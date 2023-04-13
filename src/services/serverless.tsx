import { serverlessRequest } from '../lib/request/request';

export async function getCSVData(file: File) {
    console.log('👌', file);
    const formData = new FormData();
    formData.append('file', file);
    const response = await serverlessRequest.post('file', {
        file: file,
    });
    if (response.status === 200) {
        return response.data;
    }
}
