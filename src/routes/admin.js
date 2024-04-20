import controller from "../app/controllers/admin.js";

const routes = {
    directory: "/admin",
    controller,
    endpoints: [{ method: "get", path: "/view", handler: "view" }],
};

export default routes;
