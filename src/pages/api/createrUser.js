import { db } from '@/src/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { uid, email, username, role, avatar } = req.body;

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        uid,
        email,
        username,
        role,
        avatar,
        createdAt: serverTimestamp(),
      });
      res.status(200).json({ id: docRef.id, message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
