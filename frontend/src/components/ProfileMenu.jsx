import React from 'react'
import { } from "@mantine/core"

const ProfileMenu = () => {
    return (
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt="userImage" radius={"xl"} />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>Favourites</Menu.Item>
                <Menu.Item>Bookings</Menu.Item>
                <Menu.Item>Application</Menu.Item>
                <Menu.Item>Go back</Menu.Item>
                <Menu.Item onClick={() => {
                    localStorage.clear();
                    logOut();
                }}
                    color="red">Logout</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu;