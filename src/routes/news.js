import controller from "../app/controllers/news.js";

const routes = {
    directory: "/news",
    controller,
    endpoints: [
        { method: "get", path: "/:slug", handler: "show" },
        { method: "get", path: "/", handler: "index" },
    ],
};

export default routes;
