interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className="flex items-center gap-2 p-4 mt-4 bg-red-900/20 border border-red-700 rounded-md text-red-300">
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
