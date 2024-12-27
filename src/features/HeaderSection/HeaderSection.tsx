import { Box, Typography } from "@mui/material";
import headerSectionLogo from "../../assets/headerSectionLogo.png";

export default function HeaderSection() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "linear-gradient(to bottom, #66ccff, #0066cc)",
                padding: "40px 60px",
                color: "#fff",
                marginTop: "56px"
            }}
        >
            {/* Left Section: Text Content */}
            <Box
                sx={{
                    maxWidth: "50%",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "16px",
                    }}
                >
                    Your Ultimate Developer Hub
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                    }}
                >
                    Explore tools, guides, and resources designed to make coding simpler and more productive for every developer.
                </Typography>
            </Box>

            {/* Right Section: Image */}
            <Box
                sx={{
                    maxWidth: "40%",
                }}
            >
                <img
                    src={headerSectionLogo}
                    alt="Developer Computer"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                    }}
                />
            </Box>
        </Box>
    );
}
