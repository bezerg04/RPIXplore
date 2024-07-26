import { db } from '@/src/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { uid, username, content, imageUrl, avatar } = req.body;

    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        uid,
        username,
        content,
        imageUrl: imageUrl || null,
        avatar: avatar || null,
        createdAt: serverTimestamp(),
        likes: [],
        dislikes: [],
        comments: [],
      });
      res.status(200).json({ id: docRef.id, message: 'Post created successfully' });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Failed to create post', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
