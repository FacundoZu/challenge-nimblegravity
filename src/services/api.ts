import axios from 'axios';
import type { Candidate, Job, ApplicationData, ApplicationResponse } from '../types/types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCandidateByEmail = async (email: string): Promise<Candidate> => {
    const response = await api.get<Candidate>('/api/candidate/get-by-email', {
        params: { email },
    });
    return response.data;
};

export const getJobsList = async (): Promise<Job[]> => {
    const response = await api.get<Job[]>('/api/jobs/get-list');
    return response.data;
};

export const applyToJob = async (data: ApplicationData): Promise<ApplicationResponse> => {
    const response = await api.post<ApplicationResponse>('/api/candidate/apply-to-job', data);
    console.log(response);
    return response.data;
};
