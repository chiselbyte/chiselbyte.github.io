import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('API: Received POST request');
  try {
    const body = await req.json();
    console.log('API: Parsed body', body);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log('API: Missing fields');
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    console.log('API: Adding doc to Firestore');
    await addDoc(collection(db, 'contacts'), {
      name,
      email,
      message,
      createdAt: Timestamp.now(),
    });
    console.log('API: Contact saved successfully');

    return NextResponse.json({ message: 'Contact saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('API: Error occurred', error);
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
  }
}