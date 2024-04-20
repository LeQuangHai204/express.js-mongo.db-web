const newsController = {
    // [GET] /news
    index(request, response) {
        response.render("news");
    },

    // [GET] /news/:slug
    show(request, response) {
        response.send("News detail");
    },
};

export default newsController;
