export const actions = {
  default: async ({ request}) =>{
    const post = await request.formData();

    const resp = await createPost({
      title: post.get('title'),
      body: post.get('body'),
      userId: 1
    });
    return resp;
  }
};



const createPost = async ({title, body, userId}) => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });
  return await resp.json();
}