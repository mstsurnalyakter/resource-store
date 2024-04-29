import { useEffect, useState } from "react";

const useUsers = () => {
  const [loadUsers, setLoadUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const refetch = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://coffee-store-server-lilac-one.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => {
        setLoadUsers(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [toggle]);

  return { loadUsers, isLoading, refetch };
};

export default useUsers;
