import { authorize, fetchRoles, fetchUsers, logout, register, uddateUserRole, removeUser, } from './operations';

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	uddateUserRole,
	removeUser,
};
