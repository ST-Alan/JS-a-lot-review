// import { config } from "./config";

// export const searchUser = async (username) => {
// 	try {
// 		const response = await fetch(`${config.baseUrl}/userinfo/=${username}`, {
// 			headers: {
// 				"X-RapidAPI-Key": config.rapidapiKey,
// 				"X-RapidAPI-Host": config.rapidapiHost,
// 			},
// 		});

// 		const data = await response.json();

// 		return data;
// 	} catch (error) {
// 		return error;
// 	}
// };

import { config } from "./config";

/**
 * Esta funcion consume el api de github y retorna una lista de usuarios
 */
export const searchUsers = async (username) => {
	try {
		const response = await fetch(
			`${config.baseUrl}/search/users?q=${username}`
		);

		const data = await response.json();

		return data;
	} catch (error) {
		return error;
	}
};