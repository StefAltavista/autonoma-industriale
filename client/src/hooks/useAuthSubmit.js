import axios from "../utils/axios";
import { useState } from "react";

export function useAuthSubmit(path, values) {
    const [error, setError] = useState(false);
    const [isVisib, setIsVisb] = useState(true);
    const [thanks, setThanks] = useState(false);
    const [token, setToken] = useState();
    const handleClick = () => {
        axios
            .post(path, values)
            .then(({ data }) => {
                if (!data.success) {
                    setError(true);
                } else {
                    setIsVisb(false);
                    setThanks(true);
                    data.token ? setToken(data.token) : null;
                }
            })
            .catch((err) => {
                setError(err);
            });
    };
    return [thanks, isVisib, error, handleClick, token];
}
