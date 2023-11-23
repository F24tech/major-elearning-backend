module.exports = {
    routes: [
        {
            method: 'GET',
            path: "/category-courses",
            handler: "course.getAllCourses",
            config: {
                auth: false
            }
        }
    ]
}