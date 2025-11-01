import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_ice_cream_background_768bbaa5.png";

export function HeroSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      const offset = 80;
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="backdrop-blur-lg bg-background/10 rounded-2xl p-12">
          <h1 className="font-['Poppins'] font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Welcome to Cool Cones
          </h1>
          <p className="font-['Inter'] text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Indulge in premium soft-serve ice cream and frozen delights
            in the heart of Islamabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              onClick={scrollToMenu}
              data-testid="button-view-menu"
              className="text-lg px-8 rounded-full"
            >
              View Our Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const offset = 80;
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              data-testid="button-contact-us"
              className="text-lg px-8 rounded-full backdrop-blur-md bg-background/20 border-white/30 text-white hover:bg-background/30"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
