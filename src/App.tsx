import { useState } from 'react';
import './index.css';
import type { Candidate } from './types/types';
import { getCandidateByEmail } from './services/api';
import JobList from './components/JobList';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [email, setEmail] = useState('');
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Por favor ingresa tu email');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const candidateData = await getCandidateByEmail(email.trim());
      setCandidate(candidateData);
    } catch (err) {
      setError('Error al obtener los datos. Verifica tu email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">

      <header className="bg-indigo-600 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Challenge - Junior Fullstack Developer
          </h1>
          <p className="text-lg text-white/90">Nimble Gravity</p>
        </div>
      </header>

      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
        {!candidate ? (

          <div className="flex justify-center items-center min-h-[400px]">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-md w-full shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-2">Bienvenido</h2>
              <p className="text-gray-300 mb-8">
                Ingresa tu email para ver las posiciones disponibles.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="facundozuleta70@gmail.com"
                    className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-indigo-500"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Cargando...
                    </>
                  ) : (
                    'Continuar'
                  )}
                </button>
              </form>

              {error && <ErrorMessage message={error} />}
            </div>
          </div>

        ) : (

          <JobList candidate={candidate} />

        )}
      </main>

      <footer className="bg-gray-800 p-6 text-center text-gray-400">
        <p>©Facundo Zuleta - Challenge Técnico</p>
      </footer>
    </div>
  );
}

export default App;
