import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, InstagramIcon } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-1">
      <section className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contato
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Entre em contato para agendar uma consulta ou saber mais sobre
              como podemos ajudar com suas necessidades jurídicas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-card h-full">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:(47) 99615-1048"
                          className="hover:text-primary"
                        >
                          (47) 99615-1048
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:victoriawerneradv@gmail.com"
                          className="hover:text-primary"
                        >
                          victoriawerneradv@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Endereço do Escritório</h3>
                      <p className="text-muted-foreground">
                        Atendemos presencialmente em Balneário Camboriú e Itajaí
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <InstagramIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="https://www.instagram.com/victoriawerneradv/"
                          className="hover:text-primary"
                        >
                          @victoriawerneradv
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card h-full">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227582.70437221273!2d-48.7200837!3d-26.9675404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a47b9f5318f844!2sVictoria%20Werner%20-%20Advocacia%20Criminal!5e0!3m2!1spt-BR!2sbr!4v1674068139570!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
