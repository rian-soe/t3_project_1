# Contact Feature Documentation

## Overview

The contact feature provides a comprehensive contact form with validation, error handling, and a modern UI that integrates seamlessly with the existing T3 stack application.

## Features

### Frontend Components

1. **Contact Section** (`src/components/sections/Contact.tsx`)
   - Modern, responsive contact form
   - Real-time form validation
   - Loading states and success/error feedback
   - Contact information display with icons
   - Matches existing design system

2. **Contact Page** (`src/pages/contact.tsx`)
   - Dedicated contact page route
   - Uses the Contact section component
   - Proper page title and layout

### Backend API

1. **Contact Router** (`src/server/api/routers/contact.ts`)
   - tRPC router for handling form submissions
   - Zod validation schema
   - Error handling and logging
   - Extensible for database integration

2. **Form Validation**
   - Name: Required, max 100 characters
   - Email: Required, valid email format
   - Subject: Required, max 200 characters
   - Message: Required, 10-2000 characters

## Usage

### Accessing the Contact Form

- **Homepage**: Contact section is included at the bottom of the homepage
- **Dedicated Page**: Navigate to `/contact` for a full-page contact experience
- **Navigation**: Contact link in the main navigation

### Form Submission

1. Fill out the required fields (Name, Email, Subject, Message)
2. Form validates input in real-time
3. Submit button shows loading state during submission
4. Success/error messages are displayed after submission
5. Form resets on successful submission

## Customization

### Updating Contact Information

Edit the contact information in `src/components/sections/Contact.tsx`:

```tsx
// Update these values in the Contact component
<p className="text-gray-600">hello@riansoe.com</p>
<p className="text-gray-600">Yangon, Myanmar</p>
<p className="text-gray-600">+95 9 123 456 789</p>
```

### Backend Integration

To integrate with a real backend:

1. **Database Integration**: Update the contact router to save to your database
2. **Email Service**: Add email sending functionality (e.g., SendGrid, Nodemailer)
3. **Rate Limiting**: Add rate limiting to prevent spam
4. **CAPTCHA**: Add reCAPTCHA or similar spam protection

Example database integration:

```tsx
// In src/server/api/routers/contact.ts
export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input, ctx }) => {
      // Save to database
      const contact = await ctx.db.contact.create({
        data: {
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message,
        },
      });

      // Send email notification
      await sendEmailNotification(input);

      return {
        success: true,
        message: "Thank you for your message! I&apos;ll get back to you soon.",
      };
    }),
});
```

### Styling Customization

The contact form uses Tailwind CSS classes and can be customized by:

1. Modifying the color scheme (currently uses blue theme)
2. Adjusting spacing and layout
3. Customizing form field styles
4. Adding animations or transitions

## File Structure

```
src/
├── components/
│   └── sections/
│       └── Contact.tsx          # Main contact form component
├── pages/
│   └── contact.tsx              # Dedicated contact page
└── server/
    └── api/
        └── routers/
            └── contact.ts       # Backend API router
```

## Dependencies

The contact feature uses these existing dependencies:
- React (for state management)
- tRPC (for API communication)
- Zod (for validation)
- Tailwind CSS (for styling)

No additional dependencies are required.

## Testing

To test the contact feature:

1. Start the development server: `npm run dev`
2. Navigate to the homepage or `/contact`
3. Fill out the form with valid data
4. Submit and verify the success message
5. Test validation by submitting with invalid data
6. Check the console for logged form submissions

## Future Enhancements

Potential improvements:
- File upload capability
- Contact form analytics
- Auto-response emails
- Contact form spam protection
- Contact form A/B testing
- Multi-language support 