import CourseModel from "../models/courses.js";
import { mongooseToArr } from "../../utils/mongoose.js";

const sitesController = {
    // [GET] /
    home: (request, response, next) => {
        CourseModel.find()
            .then((courses) => {
                response.render("home", {
                    courses: mongooseToArr(courses),
                });
            })
            .catch(next);
    },

    // [GET] /search
    search: (request, response) => {
        response.render("search");
    },

    // [GET] /:anything
    notfound: (request, response) => {
        response.render("notfound");
    },
};

export default sitesController;
