import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    rating: 5,
    text: "Best ice cream in Islamabad! The soft serve is so creamy and delicious. My kids love it here!",
  },
  {
    name: "Ahmed Ali",
    rating: 5,
    text: "Great quality and amazing flavors. The waffles with ice cream are my favorite. Highly recommended!",
  },
  {
    name: "Fatima Malik",
    rating: 5,
    text: "Such a lovely place! The staff is friendly and the ice cream is always fresh. Perfect for family outings.",
  },
  {
    name: "Hassan Raza",
    rating: 5,
    text: "The sundaes are incredible! Generous portions and lots of toppings. Will definitely come back.",
  },
  {
    name: "Sara Imran",
    rating: 5,
    text: "Cool Cones has become our go-to spot for dessert. The milkshakes are thick and delicious!",
  },
  {
    name: "Usman Tariq",
    rating: 5,
    text: "Excellent location in G-11 and the ice cream quality is top-notch. Worth every rupee!",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-['Poppins'] font-semibold text-sm">
                {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
