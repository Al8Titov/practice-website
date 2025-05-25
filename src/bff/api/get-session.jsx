import { transformSession } from '../transformers';

export const getSession = async (hash) =>
	fetch(`http://localhost:3000/session?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
