/**
 * Middleware to check if a user is authenticated.
 * If authenticated, proceeds to the next middleware/route handler.
 * If not authenticated, redirects to the login page.
 */
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/users/login");
}

/**
 * Middleware to check if a user is not authenticated.
 * If not authenticated, proceeds to the next middleware/route handler.
 * If authenticated, redirects to the dashboard.
 */
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/dashboard');
    }
    next();
}

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated
};
