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
    Alert,
    Container,
} from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Websites } from '@/models/Websites';
import useWebsites from './hooks/useWebsite';

const keywordColors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function WebsiteList() {
    const [filteredWebsites, setFilteredWebsites] = useState<Websites[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const debouncedSearch = useDebouncedValue(searchTerm, 300);

    const { websitesList, isLoadingWebsite, errorWebsite } = useWebsites();

    const websites: Websites[] = websitesList ?? [];

    const allKeywords = Array.from(
        new Set(
            websites
                .flatMap((site) => site.keywords ?? [])
                .filter((kw): kw is string => typeof kw === 'string'),
        ),
    );

    const keywordColorMap = allKeywords.reduce(
        (map, keyword, index) => {
            map[keyword] = keywordColors[index % keywordColors.length];
            return map;
        },
        {} as Record<string, (typeof keywordColors)[number]>,
    );

    useEffect(() => {
        let filtered = [...websites];

        if (debouncedSearch.trim()) {
            const term = debouncedSearch.toLowerCase();
            filtered = filtered.filter((site) => site.name.toLowerCase().includes(term));
        }

        if (selectedCategory) {
            filtered = filtered.filter((site) => site.keywords?.includes(selectedCategory));
        }

        setFilteredWebsites(filtered);
    }, [debouncedSearch, selectedCategory, websites]);

    if (errorWebsite) {
        return (
            <Box sx={{ p: 4 }}>
                <Alert severity="error">❌ Failed to load websites.</Alert>
            </Box>
        );
    }

    if (isLoadingWebsite) {
        return <LoadingSpinner loadingmessage="Loading websites..." />;
    }

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="primary">
                🌐 Public Websites
            </Typography>

            <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                gap={2}
                mb={4}
                justifyContent="center"
            >
                <TextField
                    fullWidth
                    label="🔍 Search by name"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <TextField
                    select
                    fullWidth
                    label="📂 Category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <MenuItem value="">
                        <em>All Categories</em>
                    </MenuItem>
                    {allKeywords.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            {filteredWebsites.length > 0 ? (
                filteredWebsites.map((site) => (
                    <Card key={site.id} sx={{ mb: 3, p: 2, borderRadius: 3, boxShadow: 4 }}>
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {site.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                {site.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                {(site.keywords ?? []).map((keyword, idx) => (
                                    <Chip
                                        key={idx}
                                        label={keyword}
                                        color={
                                            keywordColorMap[keyword] as
                                                | 'primary'
                                                | 'secondary'
                                                | 'success'
                                                | 'error'
                                                | 'warning'
                                                | 'info'
                                        }
                                        size="small"
                                    />
                                ))}
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
                                sx={{ ml: 1, borderRadius: 2, textTransform: 'none' }}
                            >
                                🌍 Visit Website
                            </Button>
                        </CardActions>
                    </Card>
                ))
            ) : (
                <Typography textAlign="center" color="textSecondary" mt={4}>
                    No websites found.
                </Typography>
            )}
        </Container>
    );
}

// Debounced search helper
function useDebouncedValue<T>(value: T, delay = 300): T {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debounced;
}
