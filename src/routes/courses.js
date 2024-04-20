import controller from "../app/controllers/courses.js";

const routes = {
    directory: "/courses",
    controller,
    endpoints: [
        { method: "get", path: "/create-new", handler: "create" },
        { method: "post", path: "/store", handler: "store" },
        { method: "get", path: "/:slug", handler: "show" },
    ],
};

export default routes;
