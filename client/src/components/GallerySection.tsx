import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import softServeCone from "@assets/generated_images/Soft_serve_ice_cream_cone_f6b4ee40.png";
import sundae from "@assets/generated_images/Ice_cream_sundae_dessert_6ceae134.png";
import waffle from "@assets/generated_images/Waffle_with_ice_cream_cfea8a67.png";
import milkshake from "@assets/generated_images/Chocolate_milkshake_drink_3a816f4e.png";
import cookieSandwich from "@assets/generated_images/Ice_cream_cookie_sandwich_31915cde.png";
import flavors from "@assets/generated_images/Variety_of_ice_cream_flavors_0d804808.png";
import interior from "@assets/generated_images/Ice_cream_parlor_interior_3ccb1cdf.png";
import customers from "@assets/generated_images/Customers_enjoying_ice_cream_4427bc3e.png";

const galleryImages = [
  { src: softServeCone, alt: "Soft serve ice cream cone" },
  { src: sundae, alt: "Ice cream sundae" },
  { src: waffle, alt: "Waffle with ice cream" },
  { src: milkshake, alt: "Chocolate milkshake" },
  { src: flavors, alt: "Variety of ice cream flavors" },
  { src: cookieSandwich, alt: "Ice cream cookie sandwich" },
  { src: interior, alt: "Cool Cones interior" },
  { src: customers, alt: "Happy customers" },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our delicious world of frozen treats
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-2xl cursor-pointer hover-elevate transition-all duration-300"
              onClick={() => openLightbox(index)}
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
