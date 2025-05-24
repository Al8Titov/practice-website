import { deleteUser } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants'


export const  removeUser = async (userSessions, userId) => {
	const accessRoles = [ROLE.ADMIN];

		if (!sessions.access(userSessions, accessRoles)) {
			return {
				error: 'Доступ запрешён',
				res: null,
			};
		}


	 deleteUser(userId);

	 return {
		error: null,
		res: true,
	 }
};
