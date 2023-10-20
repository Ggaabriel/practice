import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects/Projects";
import Gallery from "../pages/Gallery/Gallery";
import Edit from "../pages/Edit/Edit";

const RoutersContainer = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </>
    );
};

export default RoutersContainer;
