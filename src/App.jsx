import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import {Crew, Destination, Home, Technology} from "./pages";

function App() {
    return (
        <>

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </>
    );
}

export default App;
