const config = {
    dbUrl: process.env.DB_URL || "mongodb+srv://user:user123@telegrom-ohixc.mongodb.net/test?retryWrites=true&w=majority",
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost",
    publicRoute: process.env.PUBLIC_ROUTE || "/app",
    filesRoute: process.env.FILES_ROUTE || "/uploads"
}

module.exports = config;