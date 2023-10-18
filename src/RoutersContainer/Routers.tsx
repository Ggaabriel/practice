import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects/Projects";
import Gallery from "../pages/Gallery/Gallery";

const RoutersContainer = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </>
    );
};

export default RoutersContainer;
