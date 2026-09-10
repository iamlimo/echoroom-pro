import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  message = "Hi EchooRoom, I'd like to discuss a project",
  variant = "primary",
  size = "md",
  className = "",
}: WhatsAppButtonProps) {
  const phoneNumber = "2349065243789"; // +234 906 524 3789 formatted for WhatsApp API
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2",
  };

  const variantClasses = {
    primary:
      "bg-green-500 text-white hover:bg-green-600 transition-colors duration-200",
    secondary:
      "bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-200",
    outline:
      "border border-green-500 text-green-500 hover:bg-green-50 transition-colors duration-200",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold tracking-wide ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle size={size === "sm" ? 14 : size === "md" ? 16 : 18} />
      Chat on WhatsApp
    </a>
  );
}
