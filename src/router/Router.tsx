import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { City } from "../pages/City";
import { About } from "../pages/About";

export function Router(): ReturnType<FC> {
    return (
        <Routes>
            <Route
                index
                element={<Home />}
            />
            <Route
                path="/*"
                element={<NotFound />}
            />
            <Route
                path="/q"
                element={<City />}
            />
            <Route
                path="/about"
                element={<About />}
            />
        </Routes>
    );
}
