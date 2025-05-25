export const transformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	author: dbComment.author_id,
	publishedAt: dbComment.published_at,
	content: dbComment.content,
});
