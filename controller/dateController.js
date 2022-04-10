const dateController = {}

dateController.convertTime = (time) => {
    const response = {};
    let date = (time)? new Date(time) : new Date();
    let format = date.toGMTString()
    if (format === "Invalid Date"){
        response.error = format
    } else {
        response.unix = date.getTime();
        response.utc = format
    }
    return response;
}

module.exports = dateController;