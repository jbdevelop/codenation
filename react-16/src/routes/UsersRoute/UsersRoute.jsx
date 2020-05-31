import React from "react";

import UsersList from "../../containers/UsersList/UsersList";
import { useFetchUsers } from "../../utils/hooks";

const UsersRoute = () => {
  const { getFetchUsers } = useFetchUsers({ isEnableToFetchAllUsers: true });
  return (
    <div className="container" data-testid="users-route">
      <UsersList users={getFetchUsers.users} />
    </div>
  );
};

export default UsersRoute;
