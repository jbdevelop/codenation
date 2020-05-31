import { useState, useEffect, useCallback } from 'react';


export const useFetchUsers = ({ isEnableToFetchAllUsers = false }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const getUserById = (userId) => users.find((user) => userId === user.id);


  const getUserByName = useCallback(async (userName) => {
    try {
      const response = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${userName}`)
      const data = await response.json();
      setUser(data[0]);

    } catch (error) {

    }
  }, [])

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(
          "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
        );
        const data = await response.json();
        setUsers(data);

      } catch (error) {

      }
    };
    if (isEnableToFetchAllUsers) loadUsers();
  }, [isEnableToFetchAllUsers]);

  return {
    getFetchUsers: {
      users,
      user,
    },
    handleFetchUsers: {
      getUserById,
      getUserByName,
    }

  };
}

