import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappNumber = "923000000000";
  const message = "Hi! I'd like to know more about Cool Cones ice cream.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      size="icon"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp"
      className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg animate-pulse hover:animate-none z-40"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
}
