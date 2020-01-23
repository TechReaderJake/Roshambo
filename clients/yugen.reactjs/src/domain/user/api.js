import React from "react"
import Axios from "axios"
import { domain } from "../constants"

const api = {
    "getUsers": domain.url + "/api/v1/Users",
    "postUsers": domain.url + "/api/v1/Users",
}

refreshUsers: () => {
    Axios.get(api.getUsers).then((response) => {
        return response.data
    });
}
