import React from 'react'
import { useNavigate, useRouteError } from 'react-router'

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoHome = ()=>{
        navigate("/")
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card text-center py-5 shadow-xl w-1/2 border-2 border-purple-600">
        <h2 className="text-red-600 text-2xl font-bold">Oops!!</h2>
        <h2 className="text-red-500 text-2xl font-bold">
          Status code: {error.status}
        </h2>
        <h2 className="text-red-600 text-2xl font-bold">{error.statusText}</h2>
        <h2 className="text-red-600 text-2xl font-bold">{error.data}</h2>
        {error.status === 404 && (
          <div>
            <h2 className="text-red-600 text-2xl font-bold">Page Not Found</h2>
            <button
              className="btn bg-purple-600 hover:bg-purple-700  text-white"
              onClick={handleGoHome}
            >
              Go Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Error