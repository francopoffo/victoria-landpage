import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Phone } from "lucide-react";

const services = {
  s1: {
    img: "https://raw.githubusercontent.com/francopoffo/image-files/main/iconevicacompanhamentoemdelegacia.png",
    servico:
      "Acompanhamento em delegacia, audiência de custódia e revogação da prisão",
  },
  s2: {
    img: "https://raw.githubusercontent.com/francopoffo/image-files/main/iconevichabeascorpus.png",
    servico: "Impetração de Habeas Corpus",
  },
  s3: {
    img: "https://raw.githubusercontent.com/francopoffo/image-files/main/iconeviccexecucaopenal.png",
    servico: "Execução penal",
  },
  s4: {
    img: "https://raw.githubusercontent.com/francopoffo/image-files/main/iconevicconsultoriajuridica.png",
    servico: "Consultoria jurídica",
  },
  s5: {
    img: "https://raw.githubusercontent.com/francopoffo/image-files/main/iconevicdefesaemtodoprecesso.png",
    servico:
      "Defesa durante todo o processo criminal e recursos em todas as instâncias",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 py-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-justify">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                Representação legal especializada em que você pode confiar
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Nossa missão é entregar soluções jurídicas e todos os serviços
                relacionados à área criminal e penal, atuando em defesa do
                acusado ou a favor da vítima e garantindo o direito ao devido
                processo legal.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl">
                Pautados pela ética, transparência e lealdade, construímos uma
                defesa justa, baseada na lei e respeitando as individualidades.
                Priorizamos um contato pessoal com os clientes e adotamos uma
                comunicação acessível. Atendimento presencial e online em todo o
                Estado de Santa Catarina.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl">
                Nossa missão é entregar aos nossos clientes uma defesa
                humanizada, em que tratamos cada caso com a sua individualidade.
                Fornecemos suporte 24h e atendemos urgências a qualquer momento.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Agende uma consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Chame Agora
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/banner.jpeg"
              width={400}
              height={500}
              alt="Victoria Werner"
              className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-[4/5]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container max-w-6xl mx-auto space-y-12 px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Nossos Serviços
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
              Oferecemos uma ampla gama de serviços jurídicos especializados
              para atender suas necessidades
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {Object.values(services).map((service, index, arr) => (
              <Card
                key={index}
                className={`bg-card ${
                  index === arr.length - 1 && arr.length % 2 !== 0
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-16 w-16 relative">
                    <Image
                      src={service.img}
                      alt={service.servico}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-medium">{service.servico}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="container max-w-6xl mx-auto space-y-12 px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Avaliações dos clientes
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Franco Poffo",
              rating:
                "Ótima profissional, sempre prestativa e ágil no trabalho!",
            },
            {
              name: "Isadora Poleza",
              rating: "Muito atenciosa e prestativa! Recomendo a todos.",
            },
            {
              name: "Leticia Lopes",
              rating:
                "Eu gostaria de parabenizar a Dra. Victoria Werner pelo excelente trabalho e dedicação. Indicarei sempre!!",
            },
            {
              name: "Bruna Rosa",
              rating: "Profissional de excelência.",
            },
          ].map((review, i) => (
            <Card key={i} className="bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.rating}</p>
                <p className="font-medium">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Victoria+Werner+-+Advocacia+Criminal&stick=H4sIAAAAAAAA_-NgU1IxqLAwMUgyT0lMTEkxNLcwNkixMqgwSjQxT7JMMzU2tEizMDFZxKoSlplckl-UmagQnlqUl1qkoKvgmFKWn5yYDBRyLsrMzcxLzAEALS6sTU8AAAA&hl=pt-BR&mat=CRYHYFl2NyjeElcBNqvzOhlZxxR6pQ6kzh7h8P42VvkPoKnDQWznttIsdZcJmWHCNf_NJvKpFIfq0xtplutWeaOJv1QSoB5L0317rdRLOHj5k6fTW3c7BMRl7qXov5zGnkM&authuser=0#lrd=0x840b7daadd17830d:0x2a47b9f5318f844,1,,,,"
            className="text-primary hover:underline inline-flex items-center"
          >
            Ver mais avaliações no Google
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-6xl mx-auto space-y-8 px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Pronto para discutir seu caso?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-lg md:text-xl">
              Agende uma consulta para discutirmos suas necessidades jurídicas e
              como podemos ajudar.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Link href="/contact">
                Entre em contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
