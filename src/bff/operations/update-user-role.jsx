import { setUserRole } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants'


export const  uddateUserRole = async (userSessions, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

		if (!sessions.access(userSessions, accessRoles)) {
			return {
				error: 'Доступ запрешён',
				res: null,
			};
		}


	 setUserRole(userId, newUserRoleId);

	 return {
		error: null,
		res: true,
	 }
};
