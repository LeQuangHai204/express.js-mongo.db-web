import sitesRoutes from "./sites.js";
import coursesRoutes from "./courses.js";
import adminRoutes from "./admin.js";

const allRoutes = [sitesRoutes, coursesRoutes, adminRoutes];

/**
 * Sets up the routes for the application.
 * Example:
 * - app.get("/news/:slug", newsController.show);
 * - app.get("/news", newsController.index);
 * - app.get("/search", sitesController.search);
 * - ...
 *
 * @param {Object} app - The Express application object.
 */
const route = (app) => {
    allRoutes.forEach((routes) => {
        routes.endpoints.forEach((endpoint) => {
            app[endpoint.method](
                routes.directory + endpoint.path,
                routes.controller[endpoint.handler]
            );
        });
    });
};

export default route;
