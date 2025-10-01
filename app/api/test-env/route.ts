// Test page to check environment variables
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    brevoConfigured: !!process.env.NEXT_PUBLIC_BREVO_API_KEY,
    brevoKeyLength: process.env.NEXT_PUBLIC_BREVO_API_KEY?.length || 0,
    brevoListId: process.env.NEXT_PUBLIC_BREVO_LIST_ID,
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  });
}