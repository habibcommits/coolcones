import { Card } from "@/components/ui/card";
import { IceCream, Heart, Users } from "lucide-react";
import interiorImage from "@assets/generated_images/Ice_cream_parlor_interior_3ccb1cdf.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-4">
            About Cool Cones
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your destination for premium frozen treats in G-11 Markaz, Islamabad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Located above Tehzeeb Bakery in G-11 Markaz, Cool Cones has been
              serving Islamabad's finest soft-serve ice cream and frozen
              desserts. We're passionate about creating memorable moments with
              every scoop.
            </p>
            <p className="text-lg leading-relaxed">
              Our commitment to quality ingredients, creative flavors, and
              exceptional service has made us a favorite destination for ice
              cream lovers across the city. Whether you're craving a classic
              cone or an elaborate sundae, we've got something special for you.
            </p>
          </div>

          <div className="relative">
            <img
              src={interiorImage}
              alt="Cool Cones Interior"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <IceCream className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-['Poppins'] font-semibold text-xl mb-2">
              Premium Quality
            </h3>
            <p className="text-muted-foreground">
              We use only the finest ingredients to create our delicious frozen treats
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-['Poppins'] font-semibold text-xl mb-2">
              Made with Love
            </h3>
            <p className="text-muted-foreground">
              Every dessert is crafted with care and attention to detail
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-['Poppins'] font-semibold text-xl mb-2">
              Family Friendly
            </h3>
            <p className="text-muted-foreground">
              A welcoming space perfect for families and friends to enjoy together
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
