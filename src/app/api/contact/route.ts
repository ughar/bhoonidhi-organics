import { NextResponse } from 'next/server';
import { z } from 'zod';

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9+\-\s()]{10,20}$/),
  product: z.string(),
  message: z.string().min(10).max(1000),
  csrf: z.string()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate CSRF token
    const csrfToken = request.headers.get('X-CSRF-Token');
    if (!csrfToken || csrfToken !== body.csrf) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Rate limiting check (implement your own logic)
    // const isRateLimited = await checkRateLimit(request.ip);
    // if (isRateLimited) {
    //   return NextResponse.json(
    //     { error: 'Too many requests' },
    //     { status: 429 }
    //   );
    // }

    // Process the contact form (implement your own logic)
    // await processContactForm(validatedData);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 