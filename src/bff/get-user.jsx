import { getUsers } from './get-users'

export const gertUser = async (loginToFind) => {
	const users = await getUsers();

	return users.find(({ login }) => login === loginToFind);
};
