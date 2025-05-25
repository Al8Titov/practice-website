export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:3000/session/${sessionId}`, {
		method: 'DELETE',
	});
