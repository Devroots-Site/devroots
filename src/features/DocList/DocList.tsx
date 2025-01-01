import {
  Box,
  Container,
  TextField,
  MenuItem,
  Grid2,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Avatar,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useEffect, useState } from 'react';
import { Doc } from './DocList.type';

const keywordColors = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
];

export default function DocsList() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<Doc[]>([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const keywordColorMap: {
    [key: string]:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
  } = {};
  categories.forEach((keyword, index) => {
    keywordColorMap[keyword] = keywordColors[index % keywordColors.length] as
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'warning'
      | 'info';
  });

  useEffect(() => {
    const fetchDocsAndCategories = async () => {
      try {
        const [docsResponse, categoriesResponse] = await Promise.all([
          fetch(import.meta.env.VITE_BE_IP + '/docs/all'),
          fetch(import.meta.env.VITE_BE_IP + '/docs/categories/all'),
        ]);

        if (!docsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const docsData = await docsResponse.json();
        const categoriesData = await categoriesResponse.json();

        setDocs(
          docsData.sort((a: { name: string }, b: { name: any }) =>
            a.name.localeCompare(b.name)
          )
        );
        setFilteredDocs(docsData);
        setCategories(categoriesData.keywords || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'An unknown error occurred');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDocsAndCategories();
  }, []);

  useEffect(() => {
    let filtered = [...docs];

    if (searchTerm) {
      filtered = filtered.filter(
        (doc) =>
          doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (doc.description &&
            doc.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((doc) =>
        doc.keywords?.includes(selectedCategory)
      );
    }

    setFilteredDocs(filtered);
  }, [searchTerm, selectedCategory, docs]);

  return (
    <Box sx={{ marginX: '24px', marginTop: '24px' }}>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Alert severity="error">An error occurred: {error}</Alert>
        </Box>
      )}
      <Container maxWidth="lg" sx={{ paddingY: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            marginBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Search and Category Filters */}
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <TextField
            select
            fullWidth
            label="Category"
            variant="outlined"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>All Categories</em>
            </MenuItem>
            {categories.map((keyword, index) => (
              <MenuItem key={index} value={keyword}>
                {keyword}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {filteredDocs.length > 0 ? (
          <Grid2 container spacing={3}>
            {filteredDocs.map((doc) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={doc.id}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: '12px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      height: 300,
                      backgroundColor: '#f4f4f4',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={`/docs/${doc.picturepath}logo.png`}
                      alt={doc.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', marginBottom: 1 }}
                    >
                      {doc.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginBottom: 2 }}
                    >
                      {doc.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {Array.isArray(doc.keywords) &&
                        doc.keywords.map((keyword, idx) => (
                          <Chip
                            key={idx}
                            label={keyword}
                            color={keywordColorMap[keyword]}
                            size="small"
                          />
                        ))}
                    </Box>
                  </CardContent>

                  {/* Card Actions */}
                  <CardActions
                    sx={{
                      padding: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="caption">
                      <strong>Version:</strong> {doc.version}
                      <br />
                      <strong>Author:</strong> {doc.creator}
                    </Typography>
                    <Button
                      size="small"
                      href={`/docs/${doc.filepath}`}
                      target="_blank"
                      variant="contained"
                      color="primary"
                      startIcon={<TextSnippetIcon />}
                    >
                      Open
                    </Button>
                  </CardActions>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <Typography variant="h6" textAlign="center">
            No documents found.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
