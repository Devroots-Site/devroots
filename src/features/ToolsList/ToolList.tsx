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
    Alert,
    MenuItem,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import { useEffect, useState } from 'react';
import { useTools } from './hooks/useTools';
import { Tools } from '@/models/Tools.class';
import LoadingSpinner from '@/components/LoadingSpinner';

const keywordColors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function ToolsList() {
    const [filteredTools, setFilteredTools] = useState<Tools[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const debouncedSearch = useDebouncedValue(searchTerm, 300);

    const { toolsList, errorTools, isLoadingTools } = useTools();

    const keywordColorMap: {
        [key: string]: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    } = {};

    const allKeywords = Array.from(new Set(toolsList?.flatMap((tool) => tool.keywords)));

    allKeywords.forEach((keyword, index) => {
        keywordColorMap[keyword] = keywordColors[index % keywordColors.length] as
            | 'primary'
            | 'secondary'
            | 'success'
            | 'error'
            | 'warning'
            | 'info';
    });

    useEffect(() => {
        let filtered = [...(toolsList ?? [])];

        if (debouncedSearch.trim()) {
            const searchLower = debouncedSearch.toLowerCase();
            filtered = filtered.filter(
                (tool) =>
                    tool.name.toLowerCase().includes(searchLower) ||
                    tool.keywords.some((kw) => kw.toLowerCase().includes(searchLower)),
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter((tool) => tool.keywords.includes(selectedCategory));
        }

        setFilteredTools(filtered);
    }, [debouncedSearch, selectedCategory, toolsList]);

    if (errorTools) {
        return (
            <Box sx={{ p: 4 }}>
                <Alert severity="error">Failed to load tools. Please try again later.</Alert>
            </Box>
        );
    }

    if (isLoadingTools) {
        return <LoadingSpinner loadingmessage="Loading tools..." />;
    }

    return (
        <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
            {/* Filters */}
            <Box sx={{ marginBottom: 4 }}>
                <TextField
                    fullWidth
                    label="Search Tools"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    select
                    fullWidth
                    label="Filter by Category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <MenuItem value="">
                        <em>All Categories</em>
                    </MenuItem>
                    {allKeywords.map((keyword) => (
                        <MenuItem key={keyword} value={keyword}>
                            {keyword}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            {/* Tool List */}
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
                                primary={<Typography variant="h6">{tool.name}</Typography>}
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
                                                    sx={{ mr: 0.5, mb: 0.5 }}
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
    );
}

// Debounce hook
function useDebouncedValue<T>(value: T, delay = 300): T {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
}
