import { Box } from "@mui/material"
import Navbar from "../../components/Navbar/Navbar"
import HeaderSection from "../../features/HeaderSection/HeaderSection"
import Features from "../../features/Feature/Feature"
import Footer from "../../components/Footer/Footer"


export default function Landing() {
    return (
        <Box sx={{ marginX: "24px", marginTop: "24px" }}>
            <Navbar />
            <HeaderSection />
            <Features />
            <Footer />
        </Box>
    )
}