import { useState } from 'react';


export const useUserForm = () => {
  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [submit, setSubmit] = useState(false);

  const handleSetName = (event) => {
    const { value } = event.target;

    setName(value);
  };

  const handleSetAvatar = (event) => {
    const { value } = event.target;

    setAvatar(value);
  };

  const handleSetUserName = (event) => {
    const { value } = event.target;

    setUsername(value);
  };

  const handleSetEmail = (event) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postObject
    }).then(() => setSubmit(true));
  };



  return {
    getUserForm: {
      submit,
      name,
      avatar,
      username,
      email,
    },
    handleUserForm: {
      name: handleSetName,
      avatar: handleSetAvatar,
      userName: handleSetUserName,
      email: handleSetEmail,
      addUser: handleAddUser
    }

  };
}

