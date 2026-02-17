const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
            <div className="w-12 h-12 border-4 border-gray-700 border-t-indigo-500 rounded-full animate-spin"></div>
            <p className="text-gray-300">Cargando...</p>
        </div>
    );
};

export default LoadingSpinner;
