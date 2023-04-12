import { useContext, useEffect, useState } from "react";
import axios from "../utils/axios";
import { GlobalContext } from "../globalContext/context";

export default function useValidateAccess() {
    const { dispatch } = useContext(GlobalContext);
    const [access, setAccess] = useState();
    useEffect(() => {
        axios
            .get("api/validate")
            .then(({ data }) => {
                if (data.token) {
                    console.log("ACCESS", data);
                    data.token
                        ? dispatch({ type: "LOG_IN", payload: data.token })
                        : null;
                    setAccess(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return [access];
}
