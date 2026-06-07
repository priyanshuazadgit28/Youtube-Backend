class ApiResponce {
    constructor(statusCode, data = null, message = "success", errors = []) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}
