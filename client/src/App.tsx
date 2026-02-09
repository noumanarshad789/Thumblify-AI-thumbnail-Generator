import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import MyGeneration from "./pages/MyGeneration";
import Generate from "./pages/Generate";
import YtPreview from "./pages/YtPreview";
import Login from "./components/Login";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-generations" element={<MyGeneration />} />
                <Route path="/generate/:id" element={<Generate />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/ytpreview" element={<YtPreview />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}