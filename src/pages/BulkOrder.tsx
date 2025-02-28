import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";  // or use your preferred toast library
import Button from "../components/ui/Button";

export default function BulkOrder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      customer_message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_BULK_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Enquiry sent successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send enquiry:", error);
      toast.error("Failed to send enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-serif text-center text-gray-900 mb-4">Bulk Order Enquiry</h1>
        {submitted ? (
          <div className="text-center">
            <p className="mb-4 text-gray-700">Thank you for your enquiry. We will get back to you soon!</p>
            <a
              href="https://wa.me/message/RUUJK4FNVNT2A1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 font-semibold underline"
            >
              Contact us on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:outline-none focus:ring focus:border-amber-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:outline-none focus:ring focus:border-amber-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:outline-none focus:ring focus:border-amber-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Enquiry"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:outline-none focus:ring focus:border-amber-500"
              rows={4}
              required
            ></textarea>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-700 text-white py-3 rounded-md hover:bg-amber-800 transition">
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
