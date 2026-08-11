"use strict";
exports.__esModule = true;
exports.router = void 0;
var react_router_1 = require("react-router");
var Layout_1 = require("./Layout");
var Home_1 = require("./pages/Home");
var Studio_1 = require("./pages/Studio");
var Services_1 = require("./pages/Services");
var About_1 = require("./pages/About");
var Team_1 = require("./pages/Team");
var Shows_1 = require("./pages/Shows");
exports.router = react_router_1.createBrowserRouter([
    {
        path: "/",
        Component: Layout_1["default"],
        children: [
            { index: true, Component: Home_1["default"] },
            { path: "services", Component: Services_1["default"] },
            { path: "about", Component: About_1["default"] },
            { path: "team", Component: Team_1["default"] },
            { path: "studio", Component: Studio_1["default"] },
            { path: "shows", Component: Shows_1["default"] },
        ]
    },
]);
