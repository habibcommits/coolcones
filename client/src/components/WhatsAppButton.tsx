import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "923000000000";

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
    setIsOpen(false);
  };

  return (
    <>
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-whatsapp"
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg animate-pulse hover:animate-none z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-40 animate-in slide-in-from-bottom-4 duration-300">
          <Card className="w-80 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#25D366] rounded-full">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-lg">
                    Chat with us!
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                data-testid="button-close-whatsapp-popup"
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              How can we help you today?
            </p>

            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start hover-elevate"
                onClick={() => handleWhatsAppClick("menu")}
                data-testid="button-whatsapp-menu"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                View Menu & Prices
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start hover-elevate"
                onClick={() => handleWhatsAppClick("order")}
                data-testid="button-whatsapp-order"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Place an Order
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start hover-elevate"
                onClick={() => handleWhatsAppClick("location")}
                data-testid="button-whatsapp-location"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Directions
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start hover-elevate"
                onClick={() => handleWhatsAppClick("general")}
                data-testid="button-whatsapp-general"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                General Inquiry
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                We'll respond on WhatsApp
              </p>
            </div>
          </Card>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
          data-testid="whatsapp-overlay"
        />
      )}
    </>
  );
}
