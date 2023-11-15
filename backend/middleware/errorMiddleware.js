const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    // Set the response content type to JSON
    res.setHeader('Content-Type', 'application/json');

    // Send the error response as JSON
    res.json({
        status: 'error',
        statusCode: statusCode,
        message: err.message || 'Internal Server Error'
    });
};

module.exports = errorHandler;