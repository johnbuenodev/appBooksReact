import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Book from "../pages/Book";

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/Book" element={<Book />} />
            </Routes>
        </BrowserRouter>
    );
}

/* <Switch>
               //<Route path="/" exact component={Login} />
               //<Route path="/book" component={Book} />
               <Login/>
           </Switch> */