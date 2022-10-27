import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUsers } from "../../services";

const Users = () => {
	const { username } = useParams();

	const [usersList, setUsersList] = useState([]);

	const fetchUsers = async () => {
		const data = await searchUsers(username);

		console.log(data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			<h1>Lista de usuarios</h1>
		</div>
	);
};

export default Users;