import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    TextField,
    MenuItem,
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
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Navbar from "../../components/Navbar/Navbar";
import HeaderSection from "../../features/HeaderSection/HeaderSection";

const keywordColors = ['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function Docs() {
    const [docs, setDocs] = useState<{ id: string; name: string; description?: string; keywords: string[]; picturepath?: string; version: string; creator: string; updated_at: string; filepath: string; }[]>([]);
    const [filteredDocs, setFilteredDocs] = useState<{ id: string; name: string; description?: string; keywords: string[]; picturepath?: string; version: string; creator: string; updated_at: string; filepath: string; }[]>([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const keywordColorMap: { [key: string]: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' } = {};
    categories.forEach((keyword, index) => {
        keywordColorMap[keyword] = keywordColors[index % keywordColors.length] as 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    });

    useEffect(() => {
        const fetchDocsAndCategories = async () => {
            try {
                const [docsResponse, categoriesResponse] = await Promise.all([
                    fetch('http://localhost:3000/docs/all'),
                    fetch('http://localhost:3000/docs/categories/all'),
                ]);

                if (!docsResponse.ok || !categoriesResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const docsData = await docsResponse.json();
                const categoriesData = await categoriesResponse.json();

                setDocs(docsData.sort((a, b) => a.name.localeCompare(b.name)));
                setFilteredDocs(docsData);
                setCategories(categoriesData.keywords || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDocsAndCategories();
    }, []);

    useEffect(() => {
        let filtered = docs;

        if (searchTerm) {
            filtered = filtered.filter(doc =>
                doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (doc.description && doc.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(doc => doc.keywords.includes(selectedCategory));
        }

        setFilteredDocs(filtered);
    }, [searchTerm, selectedCategory, docs]);

    if (loading) {
        return (
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Alert severity="error">An error occurred: {error}</Alert>
                </Box>
            </Container>
        );
    }

    return (
        <Box sx={{ marginX: "24px", marginTop: "24px" }}>
            <Navbar />
            <HeaderSection
                title="Docs"
                subtitle="Explore tools, guides, and resources designed to make coding simpler and more productive for every developer."
            />
            <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
                <Box sx={{ marginBottom: 4 }}>
                    <TextField
                        fullWidth
                        label="Search"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ marginBottom: 2 }}
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
                    <List>
                        {filteredDocs.map((doc) => (
                            <ListItem
                                key={doc.id}
                                alignItems="flex-start"
                                sx={{ borderBottom: '1px solid #ddd', paddingY: 2 }}
                            >
                                {doc.picturepath && (
                                    <Avatar
                                        variant="rounded"
                                        src={`/docs/${doc.picturepath}logo.png`}
                                        alt={doc.name}
                                        sx={{ width: 80, height: 80, marginRight: 2 }}
                                    />
                                )}
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" component="div">
                                            {doc.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="body2" color="textPrimary">
                                                {doc.description}
                                            </Typography>
                                            <Box mt={1}>
                                                {Array.isArray(doc.keywords) ? (
                                                    doc.keywords.map((keyword, idx) => (
                                                        <Chip
                                                            key={idx}
                                                            label={keyword}
                                                            size="small"
                                                            color={keywordColorMap[keyword]}
                                                            sx={{ marginRight: '5px', marginBottom: '5px' }}
                                                        />
                                                    ))
                                                ) : (
                                                    <Typography variant="body2" color="textSecondary">
                                                        No Keywords Available
                                                    </Typography>
                                                )}
                                            </Box>
                                            <Typography variant="body2" color="textSecondary">
                                                <strong>Version:</strong> {doc.version} | <strong>Author:</strong> {doc.creator} | <strong>Updated:</strong> {new Date(doc.updated_at).toLocaleDateString()}
                                            </Typography>
                                        </>
                                    }
                                />
                                <IconButton
                                    href={`/docs/${doc.filepath}`}
                                    target="_blank"
                                    color="primary"
                                    rel="noopener noreferrer"
                                >
                                    <TextSnippetIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography variant="h6">No documents found.</Typography>
                )}
            </Container>
        </Box>
    );
}
