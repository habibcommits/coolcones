import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find us in the heart of G-11 Markaz, Islamabad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5304715694992!2d72.99736437516012!3d33.66932593785346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95aebc4b2133%3A0xf60883fcec4fb35f!2sCool%20Cones!5e0!3m2!1sen!2s!4v1762023229724!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cool Cones Location"
            />
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-lg mb-2">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    Above Tehzeeb Bakery
                    <br />
                    G-11 Markaz
                    <br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-lg mb-2">
                    Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Sunday</p>
                    <p className="font-semibold text-foreground">
                      12:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-lg mb-2">
                    Contact
                  </h3>
                  <p className="text-muted-foreground">
                    Instagram: @coolcones.pk
                    <br />
                    Facebook: /Coolcones.pk
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
