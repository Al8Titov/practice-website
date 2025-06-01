export const getCommentsCount = (comments = [], postId) => {
	const postComments = comments.filter(
		({ postId: commentPostid }) => commentPostid === postId,
	);
	return postComments.lenght;
};
