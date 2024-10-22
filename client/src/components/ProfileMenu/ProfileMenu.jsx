import React from 'react'
import { Avatar, Menu } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
const ProfileMenu = ({ user, logout }) => {
	const navigate = useNavigate()
	return (
		<>
			{/* <div className="menu">
				<div className="menuTarget">
					<Avatar src={user?.picture} alt='user image' radius={"xl"} />
				</div>
				<div className="menuDropdown">
					<div className="menuItem" onClick={() => navigate("./favourites", { replace: true })}>
						Favourites
					</div>

					<div className="menuItem" onClick={() => navigate("./bookings", { replace: true })}>
						Bookings
					</div>

					<div className="menuItem" onClick={() => {
						localStorage.clear();
						logout()
					}}>
						Logout
					</div>

			</div> */}


			<Menu>
				<Menu.Target>
					<Avatar src={user?.picture} alt='user image' radius={"xl"} />
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item onClick={() => navigate("./favourites", { replace: true })}>
						Favourites
					</Menu.Item>

					<Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
						Bookings
					</Menu.Item>

					<Menu.Item onClick={() => {
						localStorage.clear();
						logout()
					}}>
						Logout
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</>
	)
}

export default ProfileMenu