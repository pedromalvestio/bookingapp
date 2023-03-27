import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import Fligths from "../Pages/Flights";
import { AppContainer } from "./styles";                                

const App = () => (
    <Router>
        <AppContainer>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="fligths" element={<Fligths />}/>
            </Routes>
        </AppContainer>
    </Router>
);

export default App;