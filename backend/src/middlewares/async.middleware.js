/**
 * Middleware for handling asynchronous route handlers
 * @param {Function} requestHandler - The asynchronous function to wrap
 * @returns {Function} - The Express middleware function
 */
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

export { asyncHandler };
