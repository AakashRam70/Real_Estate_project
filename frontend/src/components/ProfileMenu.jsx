import React from 'react'
import { Avatar, Menu } from "@mantine/core"

const ProfileMenu = ({ user, logout }) => {
    return (
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt="userImage" radius={"xl"} />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item>Favourites</Menu.Item>
                <Menu.Item>Bookings</Menu.Item>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item>Go back</Menu.Item>
                <Menu.Item onClick={() => {
                    localStorage.clear();
                    logout();
                }}
                    color="red">Logout</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu;