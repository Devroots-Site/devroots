import { Box, Typography } from "@mui/material";
import headerSectionLogo from "../../assets/headerSectionLogo.png";

type HeaderSectionProps = {
    title: string,
    subtitle: string;
    srcPath?: string;
};

export default function HeaderSection({ title, subtitle, srcPath }: HeaderSectionProps) {
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
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>

            {/* Right Section: Image */}
            <Box
                sx={{
                    maxWidth: "40%",
                }}
            >
                <img
                    src={srcPath || headerSectionLogo}
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
