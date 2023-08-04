import axios from "../utils/axios";

export default async function uploadImage(file, token) {
    if (!file) new Error("no file added");

    return new Promise((res, rej) => {
        let formData = new FormData();
        formData.append("file", file);

        axios
            .post("/api/uploadImage", formData)
            .then(({ data }) => res(data))
            .catch((e) => rej(e));
    });
}
