import { useEffect, useState } from 'react';
import type { Job, Candidate } from '../types/types';
import { getJobsList } from '../services/api';
import JobItem from './JobItem';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface JobListProps {
    candidate: Candidate;
}

const JobList = ({ candidate }: JobListProps) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsData = await getJobsList();
                setJobs(jobsData);
            } catch (error) {
                setError('Error al cargar las posiciones. Por favor intenta nuevamente.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (jobs.length === 0) {
        return (
            <div className="text-center p-12 text-gray-400">
                <p>No hay posiciones disponibles en este momento.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg mb-6 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-1">
                    Bienvenido, {candidate.firstName} {candidate.lastName}
                </h2>
                <p className="text-white/90">{candidate.email}</p>
            </div>

            <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-700">
                <h3 className="text-xl font-semibold text-white">Posiciones Disponibles</h3>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {jobs.length} {jobs.length === 1 ? 'posición' : 'posiciones'}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                    <JobItem key={job.id} job={job} candidate={candidate} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
