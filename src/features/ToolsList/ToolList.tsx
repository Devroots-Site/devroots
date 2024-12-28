import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Avatar,
  IconButton,
  CircularProgress,
  Alert,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const keywordColors = [
  'default',
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
];

export default function ToolsList() {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const keywordColorMap = {};
  const keywords = Array.from(new Set(tools.flatMap((tool) => tool.keywords)));
  keywords.forEach((keyword, index) => {
    keywordColorMap[keyword] = keywordColors[index % keywordColors.length];
  });

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('http://localhost:3000/tools/all');
        if (!response.ok) {
          throw new Error('Failed to fetch tools');
        }
        const toolsData = await response.json();
        setTools(toolsData.sort((a, b) => a.name.localeCompare(b.name)));
        setFilteredTools(toolsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  useEffect(() => {
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredTools(filtered);
  }, [searchTerm, tools]);

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Alert severity="error">An error occurred: {error}</Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Box>
      <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
        <Box sx={{ marginBottom: 4 }}>
          <TextField
            fullWidth
            label="Search Tools"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </Box>

        {filteredTools.length > 0 ? (
          <List>
            {filteredTools.map((tool) => (
              <ListItem
                key={tool.id}
                alignItems="flex-start"
                sx={{ borderBottom: '1px solid #ddd', paddingY: 2 }}
              >
                {tool.picturepath && (
                  <Avatar
                    variant="rounded"
                    src={`/tools/${tool.picturepath}`}
                    alt={tool.name}
                    sx={{ width: 80, height: 80, marginRight: 2 }}
                  />
                )}
                <ListItemText
                  primary={
                    <Typography variant="h6" component="div">
                      {tool.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="textPrimary">
                        Language: {tool.language}
                      </Typography>
                      <Box mt={1}>
                        {tool.keywords.map((keyword, idx) => (
                          <Chip
                            key={idx}
                            label={keyword}
                            size="small"
                            color={keywordColorMap[keyword]}
                            sx={{ marginRight: '5px', marginBottom: '5px' }}
                          />
                        ))}
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Author:</strong> {tool.author} |{' '}
                        <strong>Updated:</strong>{' '}
                        {new Date(tool.updated_at).toLocaleDateString()}
                      </Typography>
                    </>
                  }
                />
                <IconButton
                  href={tool.link[0]}
                  target="_blank"
                  color="primary"
                  rel="noopener noreferrer"
                >
                  <BuildIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="h6">No tools found.</Typography>
        )}
      </Container>
    </Box>
  );
}
