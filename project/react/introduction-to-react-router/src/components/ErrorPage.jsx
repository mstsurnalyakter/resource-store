import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
  return (
    <div className="flex min-h-screen flex-col gap-4 items-center justify-center">
      <div className='border-2 border-red-600 w-1/2 text-center space-y-3 p-6'>
        <h2 className="text-5xl text-red-700 font-bold">Oops!!</h2>
        <p className="text-4xl text-red-700 font-bold">{error.statusText}</p>
        <p className="text-4xl text-red-700 font-bold">{error.status}</p>
        <p className="text-xl text-red-700 font-bold">{error.data}</p>
        {error.status === 404 && (
          <div>
            <h3>Page Not Found</h3>
            <p>Go back where you from</p>
            <Link to={`/`}>
              <button className="btn">Home</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorPage