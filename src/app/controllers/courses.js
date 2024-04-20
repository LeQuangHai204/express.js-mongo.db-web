import CoursesModel from "../models/courses.js";
import { mongooseToObj } from "../../utils/mongoose.js";

const coursesController = {
    // [GET] /courses/:slug
    show(request, response, next) {
        CoursesModel.findOne({ slug: request.params.slug })
            .then((course) => {
                response.render("courses/show.hbs", {
                    course: mongooseToObj(course),
                });
            })
            .catch(next);
    },

    // [GET] /courses/create-new
    create(request, response) {
        response.render("courses/create");
    },

    // [POST] /courses/store
    store(request, response, next) {
        CoursesModel.create({
            ...request.body,
            image: `https://img.youtube.com/vi/${request.body.video_id}/0.jpg`,
        })
            .then(() => {
                response.redirect("/");
            })
            .catch(next);
    },
};

export default coursesController;
