import React, { useState } from 'react';

const CloudKeeperApp = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">CloudKeeper</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department:</label>
                            <input
                                type="text"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your department"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-4">
                        <h2 className="text-xl font-semibold">Welcome, {name}!</h2>
                        <p className="text-gray-600">Department: {department}</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-4 bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CloudKeeperApp;
