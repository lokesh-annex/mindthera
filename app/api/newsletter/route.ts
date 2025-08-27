import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  // TODO: Save email to database or send to newsletter service
  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, message: 'Invalid email.' }, { status: 400 });
  }
  // Simulate success
  return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
}
