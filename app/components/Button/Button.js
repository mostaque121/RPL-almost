'use client'

const Button = ({ isLoading, defaultText, loadingText, handleClick }) => {
    return (
        <div>
            <button
                type="submit"
                className={`w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`}
                disabled={isLoading}
                onClick={handleClick}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"></path>
                        </svg>
                        {loadingText}
                    </div>
                ) : (
                    defaultText
                )}
            </button>
        </div>
    );
};

export default Button;
