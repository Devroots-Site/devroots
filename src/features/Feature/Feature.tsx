import { Box, Typography } from "@mui/material";

export default function Features() {
    return (
        <Box sx={{ padding: "60px 80px" }}> {/* Increased padding */}
            {/* Section Header */}
            <Box sx={{ marginBottom: "50px", textAlign: "center" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "16px",
                        color: "#333",
                        marginTop: "40px"
                    }}
                >
                    Features
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "20px",
                        color: "#666",
                    }}
                >
                    That Simplify Your Development
                </Typography>
            </Box>

            {/* Feature Cards */}
            <Box
                sx={{
                    display: "flex",
                    gap: "40px", // Increased gap between cards
                    justifyContent: "space-between",
                }}
            >
                {/* Card 1 */}
                <Box
                    sx={{
                        flex: 1,
                        padding: "50px", // Increased padding inside the card
                        borderRadius: "16px", // More rounded corners
                        background: "linear-gradient(0deg, #1C5D99 0%, #46F0FC 130%)",
                        color: "#fff",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.3)", // Enhanced shadow
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "64px", // Larger icon
                            marginBottom: "24px", // More spacing under the icon
                        }}
                    >
                        🛠️
                    </Box>
                    <Typography
                        variant="h5" // Larger title text
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "16px", // More space below title
                        }}
                    >
                        Tools that make your work Easier
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6" }}>
                        Access a suite of powerful tools tailored to boost productivity and streamline your development process.
                    </Typography>
                </Box>

                {/* Card 2 */}
                <Box
                    sx={{
                        flex: 1,
                        padding: "50px", // Increased padding inside the card
                        borderRadius: "16px", // More rounded corners
                        background: "linear-gradient(0deg, #1C5D99 0%, #46F0FC 130%)",
                        color: "#fff",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.3)", // Enhanced shadow
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "64px", // Larger icon
                            marginBottom: "24px", // More spacing under the icon
                        }}
                    >
                        📚
                    </Box>
                    <Typography
                        variant="h5" // Larger title text
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "16px", // More space below title
                        }}
                    >
                        Documentation to Guide You
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6" }}>
                        Explore comprehensive documentation that helps you learn, implement, and grow as a developer.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
