import { Card } from "@/components/ui/card";
import softServeCone from "@assets/generated_images/Soft_serve_ice_cream_cone_f6b4ee40.png";
import sundae from "@assets/generated_images/Ice_cream_sundae_dessert_6ceae134.png";
import waffle from "@assets/generated_images/Waffle_with_ice_cream_cfea8a67.png";
import milkshake from "@assets/generated_images/Chocolate_milkshake_drink_3a816f4e.png";
import cookieSandwich from "@assets/generated_images/Ice_cream_cookie_sandwich_31915cde.png";
import flavors from "@assets/generated_images/Variety_of_ice_cream_flavors_0d804808.png";

const menuItems = [
  {
    name: "Soft Serve Cones",
    description: "Classic vanilla, chocolate, or swirl in a crispy waffle cone",
    price: "Rs. 250",
    image: softServeCone,
    category: "Cones",
  },
  {
    name: "Premium Sundaes",
    description: "Multiple scoops with chocolate sauce, whipped cream, and toppings",
    price: "Rs. 450",
    image: sundae,
    category: "Sundaes",
  },
  {
    name: "Waffle Delight",
    description: "Golden Belgian waffle topped with ice cream and fresh fruit",
    price: "Rs. 550",
    image: waffle,
    category: "Waffles",
  },
  {
    name: "Thick Milkshakes",
    description: "Creamy milkshakes in chocolate, vanilla, or strawberry",
    price: "Rs. 350",
    image: milkshake,
    category: "Shakes",
  },
  {
    name: "Cookie Sandwich",
    description: "Fresh ice cream sandwiched between chocolate chip cookies",
    price: "Rs. 400",
    image: cookieSandwich,
    category: "Specialty",
  },
  {
    name: "Flavor Variety",
    description: "Mix and match from our selection of artisanal flavors",
    price: "From Rs. 200",
    image: flavors,
    category: "Scoops",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our delicious selection of frozen treats and desserts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-menu-item-${index}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-['Poppins'] font-semibold text-xl">
                    {item.name}
                  </h3>
                  <span className="font-semibold text-primary whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {item.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
