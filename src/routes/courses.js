import controller from "../app/controllers/courses.js";

const routes = {
    directory: "/courses",
    controller,
    endpoints: [
        { method: "get", path: "/create-new", handler: "create" },
        { method: "post", path: "/store", handler: "store" },
        { method: "get", path: "/:slug", handler: "show" },
        { method: "get", path: "/:id/edit", handler: "edit" },
        { method: "get", path: "/:id/delete", handler: "delete" },
        { method: "put", path: "/:id", handler: "update" },
    ],
};

export default routes;
