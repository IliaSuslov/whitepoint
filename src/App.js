import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Timer } from "./components/Timer";
import { Palette } from "./components/Palette";


export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/timer" element={<Timer />} />
                <Route path="/palette" element={<Palette />} />
            </Route>
        </Routes>
    )
}