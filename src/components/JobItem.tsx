import { useState } from 'react';
import type { Job, Candidate } from '../types/types';
import { applyToJob } from '../services/api';

interface JobItemProps {
    job: Job;
    candidate: Candidate;
}

const JobItem = ({ job, candidate }: JobItemProps) => {
    const [repoUrl, setRepoUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'default' | 'success' | 'error'>('default');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if (!repoUrl.trim()) {
            setErrorMessage('Por favor ingresa la URL de tu repositorio');
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('default');
        setErrorMessage('');

        try {
            const response = await applyToJob({
                uuid: candidate.uuid,
                jobId: job.id,
                candidateId: candidate.candidateId,
                repoUrl: repoUrl.trim(),
                applicationId: candidate.applicationId,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setRepoUrl('');
            } else {
                setSubmitStatus('error');
                setErrorMessage('Error al enviar la postulación');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Error al enviar la postulación. Por favor intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-all">
            <div className="mb-4 pb-4 border-b border-gray-700">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gray-100 mb-2">
                    {job.title}
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor={`repo-${job.id}`} className="block text-sm font-medium text-gray-300 mb-2">
                        Ingresa la URL de tu Repositorio de GitHub para postularte
                    </label>
                    <input
                        id={`repo-${job.id}`}
                        type="text"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        placeholder="https://github.com/tu-usuario/tu-repo"
                        className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-indigo-500"
                        disabled={isSubmitting || submitStatus === 'success'}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isSubmitting || submitStatus === 'success'}
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Enviando...
                        </>
                    ) : submitStatus === 'success' ? (
                        <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            ¡Enviado!
                        </>
                    ) : (
                        'Enviar Postulación'
                    )}
                </button>

                {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-3 bg-green-900/20 border border-green-700 rounded-md text-green-300">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>¡Postulación enviada exitosamente!</p>
                    </div>
                )}

                {submitStatus === 'error' && errorMessage && (
                    <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-700 rounded-md text-red-300">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default JobItem;
