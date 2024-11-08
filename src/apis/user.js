import axios from "axios";

export const login = (email, password) => {
    return axios
        .post(
            "http://localhost:8080/api/user/login",
            {
                email,
                password,
            },
            {
                withCredentials: true,
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};
