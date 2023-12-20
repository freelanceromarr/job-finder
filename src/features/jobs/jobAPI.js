import axios from '../../utility/db';

export const fetchJobs = async () => {
    const response = await axios.get('/jobs/');
    return response.data;
};
export const postJobs = async (data) => {
    const response = await axios.post('/jobs/', data);
    return response.data;
};
export const fetchJob = async (id) => {
    const response = await axios.get(`/jobs/${id}`);
    return response.data;
};
export const updateJob = async (id, data) => {
    const response = await axios.put(`/jobs/${id}`, data);
    return response.data;
};
export const deleteJob = async (id) => {
    await axios.delete(`/jobs/${id}`);
    return id;
};