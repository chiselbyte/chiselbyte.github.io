import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await addDoc(collection(db, 'contacts'), {
      name,
      email,
      message,
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({ message: 'Contact saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
  }
}