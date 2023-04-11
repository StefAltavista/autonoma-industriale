import axios from "../utils/axios";
import { useState } from "react";

export function useAuthSubmit(path, values) {
    const [error, setError] = useState(false);
    const [isVisib, setIsVisb] = useState(true);
    const [thanks, setThanks] = useState(false);
    const handleClick = () => {
        axios
            .post(path, values)
            .then(({ data }) => {
                console.log(data);
                if (!data.success) {
                    setError(true);
                } else {
                    setIsVisb(false);
                    setThanks(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    };
    return [thanks, isVisib, error, handleClick];
}
