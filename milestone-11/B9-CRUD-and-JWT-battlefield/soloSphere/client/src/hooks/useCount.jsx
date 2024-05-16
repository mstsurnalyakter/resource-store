import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecure from './useAxiosSecure';

const useCount = () => {
    const axiosSecure = useAxiosSecure();
     const {
       data: data2 = [],
       isLoading: isLoading2,
       refetch: refetch2,
     } = useQuery({
       queryKey: ["jobs"],
       queryFn: async () => {
         const { data } = await axiosSecure(`/jobs-count`);

         return data;
       },
     });
     return {data2,isLoading2,refetch2}
}

export default useCount