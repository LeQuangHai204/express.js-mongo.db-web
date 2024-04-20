import controller from "../app/controllers/sites.js";

const routes = {
    directory: "/",
    controller,
    endpoints: [
        { method: "get", path: "/search", handler: "search" },
        { method: "get", path: "/", handler: "home" },
        { method: "get", path: ":anything", handler: "notfound" },
    ],
};

export default routes;
