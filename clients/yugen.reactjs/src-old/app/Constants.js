var domain = "https://localhost:"
//var port = "44337";
var port = "5001";
export const api = {
    "getWorlds": domain + port + "/api/v1/worlds",
    "getBooks": domain + port + "/api/v1/books",
    "getChapters": domain + port + "/api/v1/chapters",

    "postWorlds": domain + port + "/api/v1/worlds",
    "postBooks": domain + port + "/api/v1/books"
};