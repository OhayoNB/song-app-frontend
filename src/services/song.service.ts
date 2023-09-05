import { httpService } from "./http.service";

const BASE_URL = `song/`

export const songService = {
    getAll,
    upload
};

async function getAll() {
    try {
        return httpService.get(BASE_URL);
    } catch (err) {
        console.log('Error while trying to get songs', err);
    }
}

async function upload(file: FormData) {
    try {
        return httpService.post(BASE_URL + 'upload', file);
    } catch (err) {
        console.log('Error while trying to upload file', err);
    }
}