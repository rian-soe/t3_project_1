import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Log the contact request
        
        // For now, we'll just log and return success
        console.log("Contact form submission:", {
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message,
          timestamp: new Date().toISOString(),
        });

        // Simulate some processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
        };
      } catch (error) {
        console.error("Error processing contact form:", error);
        throw new Error("Failed to submit contact form. Please try again.");
      }
    }),
}); 