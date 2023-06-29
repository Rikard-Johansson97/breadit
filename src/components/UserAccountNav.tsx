import { User } from "next-auth";
import React, { FC } from "react";
import UserAvatar from "./UserAvatar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/DropdownMenu";

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
          className='h-8 w-8'
        />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserAccountNav;
