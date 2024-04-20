import CoursesModel from "../models/courses.js";

const adminController = {
    // [GET] /admin/view
    view: (request, response, next) => {
        CoursesModel.find()
            .then((courses) => {
                response.render("admin/view", {
                    courses: courses.map((course) => course.toObject()),
                });
            })
            .catch(next);
    },
};

export default adminController;
