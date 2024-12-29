import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const keywordColors = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
];

export default function WebsiteList() {
  interface Website {
    id: number;
    name: string;
    description: string;
    link: string;
    keywords: string[];
  }

  const [websites, setWebsites] = useState<Website[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredWebsites, setFilteredWebsites] = useState<Website[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  let keywordColorMap: { [key: string]: string } = {};

  useEffect(() => {
    const fetchWebsitesAndCategories = async () => {
      try {
        const [websitesResponse, categoriesResponse] = await Promise.all([
          axios.get(import.meta.env.VITE_BE_IP + "/websites/all"),
          axios.get(import.meta.env.VITE_BE_IP + '/websites/categories/all'),
        ]);

        setWebsites(websitesResponse.data);
        setFilteredWebsites(websitesResponse.data);

        const fetchedCategories = categoriesResponse.data.keywords || [];
        setCategories(fetchedCategories);

        // Generate keywordColorMap dynamically
        keywordColorMap = fetchedCategories.reduce(
          (
            map: { [x: string]: string },
            category: string | number,
            index: number
          ) => {
            map[category] = keywordColors[index % keywordColors.length];
            return map;
          },
          {}
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWebsitesAndCategories();
  }, []);

  useEffect(() => {
    let filtered = [...websites];

    if (searchTerm) {
      filtered = filtered.filter((site) =>
        site.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((site) =>
        site.keywords.includes(selectedCategory)
      );
    }

    setFilteredWebsites(filtered);
  }, [searchTerm, selectedCategory, websites]);

  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#0078ff',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Websites
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '20px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <TextField
          fullWidth
          label="Search by Name"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TextField
          select
          fullWidth
          label="Filter by Category"
          variant="outlined"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {filteredWebsites.map((site) => (
        <Card
          key={site.id}
          sx={{
            maxWidth: '600px',
            width: '100%',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#333', marginBottom: '8px' }}
            >
              {site.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              {site.description}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '16px',
              }}
            >
              {site.keywords.map((keyword, index) => {
                if (typeof keyword !== 'string') return null;
                return (
                  <Chip
                    key={index}
                    label={keyword}
                    color={
                      (keywordColorMap[keyword] as
                        | 'primary'
                        | 'secondary'
                        | 'success'
                        | 'error'
                        | 'warning'
                        | 'info'
                        | 'default') || 'default'
                    }
                    variant="filled"
                  />
                );
              })}
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                marginLeft: '16px',
                textTransform: 'none',
                borderRadius: '20px',
              }}
            >
              Visit Website
            </Button>
          </CardActions>
        </Card>
      ))}

      {filteredWebsites.length === 0 && (
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', color: '#999', marginTop: '20px' }}
        >
          No websites found.
        </Typography>
      )}
    </Box>
  );
}
