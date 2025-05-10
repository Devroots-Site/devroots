import {
    Box,
    Container,
    TextField,
    MenuItem,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Chip,
    Avatar,
    Button,
    Alert,
} from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useEffect, useState } from 'react';
import { IDocumentation } from './documentation.type';
import { useDocumentation } from './hook/useDocumentation';
import LoadingSpinner from '../../components/LoadingSpinner';

const keywordColors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function DocsList() {
    const [filteredDocs, setFilteredDocs] = useState<IDocumentation[]>([]);

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearch = useDebouncedValue(searchTerm, 300);

    const keywordColorMap: {
        [key: string]: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    } = {};

    const {
        documentation,
        errorDocumentation,
        isLoadingDocumentation,
        keywords,
        isLoadingKeywords,
        errorDocumentationKeywords,
    } = useDocumentation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const publicandActiveDocumentation = documentation ?? [];
    const categories = keywords ?? [];
    // SECTION useEffect

    categories.forEach((keyword, index) => {
        keywordColorMap[keyword] = keywordColors[index % keywordColors.length] as
            | 'primary'
            | 'secondary'
            | 'success'
            | 'error'
            | 'warning'
            | 'info';
    });

    // ANCHOR filtering
    useEffect(() => {
        // Start with the full list of documents
        let filtered = [...publicandActiveDocumentation];

        // Apply search filter (match in name or description)
        if (searchTerm.trim()) {
            const lowerSearch = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (doc) =>
                    doc.name.toLowerCase().includes(lowerSearch) ||
                    (doc.description && doc.description.toLowerCase().includes(lowerSearch)),
            );
        }

        // Apply category filter (only if one is selected)
        if (selectedCategory) {
            filtered = filtered.filter((doc) => doc.keywords?.includes(selectedCategory));
        }

        // Update the filtered documents state
        setFilteredDocs(filtered);
    }, [publicandActiveDocumentation, searchTerm, debouncedSearch, selectedCategory]);

    // !SECTION

    function useDebouncedValue<T>(value: T, delay = 300): T {
        const [debounced, setDebounced] = useState(value);

        useEffect(() => {
            const timer = setTimeout(() => setDebounced(value), delay);
            return () => clearTimeout(timer);
        }, [value, delay]);

        return debounced;
    }

    return (
        <Box>
            {errorDocumentation || errorDocumentationKeywords ? (
                <Box sx={{ p: 4 }}>
                    <Alert severity="error">
                        Failed to load documentation or keywords. Please try again later.
                    </Alert>
                </Box>
            ) : isLoadingDocumentation || isLoadingKeywords ? (
                <LoadingSpinner loadingmessage="Loading documentation..." />
            ) : (
                <Container maxWidth="lg">
                    <Box sx={{ marginY: 4 }}>
                        {/* Filter Inputs */}
                        <Grid container spacing={2} marginBottom={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Search"
                                    variant="outlined"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
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
                            </Grid>
                        </Grid>

                        {/* Documentation Cards */}
                        <Grid container spacing={3}>
                            {(filteredDocs ?? []).map((document) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={document.id}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: 2,
                                            boxShadow: 3,
                                        }}
                                    >
                                        {/* Image */}
                                        <Box
                                            sx={{
                                                height: 250,
                                                backgroundColor: '#fafafa',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                overflow: 'hidden',
                                                borderTopLeftRadius: 8,
                                                borderTopRightRadius: 8,
                                            }}
                                        >
                                            <Avatar
                                                variant="square"
                                                src={`/docs/${document.picturepath}logo.png`}
                                                alt={document.name}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </Box>

                                        {/* Content */}
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                {document.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                gutterBottom
                                            >
                                                {document.description}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: 1,
                                                    mt: 1,
                                                }}
                                            >
                                                {Array.isArray(document.keywords) &&
                                                    document.keywords.map((keyword, idx) => (
                                                        <Chip
                                                            key={idx}
                                                            label={keyword}
                                                            color={keywordColorMap[keyword]}
                                                            size="small"
                                                        />
                                                    ))}
                                            </Box>
                                        </CardContent>

                                        {/* Actions */}
                                        <CardActions
                                            sx={{
                                                px: 2,
                                                pb: 2,
                                                pt: 0,
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="caption">
                                                    <strong>Version:</strong> {document.version}
                                                    <br />
                                                    <strong>Author:</strong> {document.creator}
                                                </Typography>
                                            </Box>
                                            <Button
                                                size="small"
                                                href={`/docs/${document.filepath}`}
                                                target="_blank"
                                                variant="contained"
                                                color="primary"
                                                startIcon={<TextSnippetIcon />}
                                            >
                                                Open
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            )}
        </Box>
    );
}
