import { domain } from "./constants"

export const api = {
    "getWorlds": domain.url + "/api/v1/worlds",
    "postWorlds": domain.url + "/api/v1/worlds",

    "getChapters": domain.url + "/api/v1/chapters",
    
    "getBooks": domain.url + "/api/v1/books",
    "postBooks": domain.url + "/api/v1/books"
};