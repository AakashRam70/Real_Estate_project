import React from 'react'
import { } from "@mantine/core"

const ProfileMenu = () => {
    return (
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt="userImage" radius={"xl"} />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>
                    Favourites
                </Menu.Item>
                <Menu.Item>
                    Bookings
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu