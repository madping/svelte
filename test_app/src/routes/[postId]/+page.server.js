export const load = async ({params}) => {
  const post = await getPost(params.postId);
  return { post };
};


//db

const getPost = async(id) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await post.json();
};