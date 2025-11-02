import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(true);
  const whatsappNumber = "923405499368";

  const handleWhatsAppClick = (messageType: string) => {
    let message = "";
    
    switch (messageType) {
      case "menu":
        message = "Hi! I'd like to see your menu and prices.";
        break;
      case "order":
        message = "Hi! I'd like to place an order.";
        break;
      case "location":
        message = "Hi! I need directions to Cool Cones.";
        break;
      default:
        message = "Hi! I'd like to know more about Cool Cones.";
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  if (!isOpen) {
    return (
      <Button
        size="icon"
        onClick={() => setIsOpen(true)}
        data-testid="button-whatsapp"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-xl animate-pulse hover:animate-none z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 shadow-2xl">
        <div className="bg-[#25D366] text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-['Poppins'] font-semibold text-base">
                  Cool Cones
                </h3>
                <p className="text-xs text-white/90">
                  Typically replies instantly
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              data-testid="button-close-whatsapp-popup"
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 bg-card">
          <p className="text-sm text-muted-foreground mb-4">
            Hi there! 👋 How can we help you today?
          </p>

          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start hover-elevate text-left"
              onClick={() => handleWhatsAppClick("menu")}
              data-testid="button-whatsapp-menu"
            >
              <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>View Menu & Prices</span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start hover-elevate text-left"
              onClick={() => handleWhatsAppClick("order")}
              data-testid="button-whatsapp-order"
            >
              <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>Place an Order</span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start hover-elevate text-left"
              onClick={() => handleWhatsAppClick("location")}
              data-testid="button-whatsapp-location"
            >
              <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>Get Directions</span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start hover-elevate text-left"
              onClick={() => handleWhatsAppClick("general")}
              data-testid="button-whatsapp-general"
            >
              <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>General Inquiry</span>
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              💬 We'll respond on WhatsApp
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
