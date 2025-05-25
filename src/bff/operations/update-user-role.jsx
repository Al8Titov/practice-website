import { setUserRole } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const uddateUserRole = async (hash, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрешён',
			res: null,
		};
	}

	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
