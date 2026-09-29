"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";
import { buildWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

export function WhatsAppForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const message = `Hello Mark,\n\nMy name is ${values.name}.\n\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
    const url = buildWhatsAppUrl(profile.contact.whatsapp, message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
  };

  const inputClass =
    "w-full rounded-[var(--radius-md)] border border-border-strong bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={cn(inputClass, errors.name && "border-danger")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-xs text-danger">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(inputClass, errors.email && "border-danger")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-xs text-danger">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className={cn(inputClass, "resize-none", errors.message && "border-danger")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-danger">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-accent px-5 py-3.5 text-sm font-medium text-[#03211d] transition-colors hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
      >
        <Send size={17} aria-hidden />
        Send via WhatsApp
      </button>

      <p role="status" aria-live="polite" className="text-xs text-text-faint">
        {sent
          ? "WhatsApp opened in a new tab with your message ready to send."
          : "Opens WhatsApp with your message pre-filled — nothing is stored or sent from this site."}
      </p>
    </form>
  );
}
