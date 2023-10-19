export const reviewsFilter = (list) => {
  return list.results.map((review) => ({
    id: review.id,
    author: review.author,
    content: review.content,
    created: review.created_at,
    updated: review.updated_at,
    link: review.url,
  }));
};
