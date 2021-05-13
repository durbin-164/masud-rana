import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryLayout from "./layouts/index";

function App() {
    return (
        <BrowserRouter>
            <PrimaryLayout />
        </BrowserRouter>
    );
}

export default App;