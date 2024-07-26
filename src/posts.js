const { datastore } = require('./datastore');

async function createPost(user, content, imageUrl) {
  const postKey = datastore.key('Post');

  const entity = {
    key: postKey,
    data: [
      { name: 'uid', value: user.uid },
      { name: 'username', value: user.displayName || user.email },
      { name: 'content', value: content },
      { name: 'imageUrl', value: imageUrl || null },
      { name: 'createdAt', value: new Date() },
      { name: 'likes', value: [] },
      { name: 'dislikes', value: [] },
      { name: 'comments', value: [] },
    ],
  };

  await datastore.save(entity);
  console.log(`Post ${postKey.id} created successfully.`);
}

async function getPosts() {
  const query = datastore.createQuery('Post').order('createdAt', {
    descending: true,
  });

  const [posts] = await datastore.runQuery(query);
  return posts;
}

async function updatePost(postId, updates) {
  const postKey = datastore.key(['Post', parseInt(postId, 10)]);
  const [post] = await datastore.get(postKey);
  if (!post) {
    throw new Error(`Post with ID ${postId} not found.`);
  }

  Object.keys(updates).forEach((key) => {
    post[key] = updates[key];
  });

  await datastore.save({ key: postKey, data: post });
}

module.exports = { createPost, getPosts, updatePost };
