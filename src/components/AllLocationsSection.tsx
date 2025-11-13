import { MapPin } from "lucide-react";

const locationData = [
  {
    unit: "barra",
    name: "Barra",
    address: "Estr. Cel. Pedro Correa, 1201",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0988425891!2d-43.3586967!3d-23.0107847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd006c4d8cb5d%3A0x7e8c1c1c1c1c1c1c!2sEstr.%20Cel.%20Pedro%20Correa%2C%201201%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
  },
  {
    unit: "recreio",
    name: "Recreio",
    address: "Av. Gilka Machado, 1111",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5!2d-43.45!3d-23.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd1e7!2sAv.%20Gilka%20Machado%2C%201111%20-%20Recreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
  },
  {
    unit: "pechincha",
    name: "Pechincha",
    address: "Rua Comendador Siqueira, 283",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5!2d-43.35!3d-22.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd944!2sR.%20Comendador%20Siqueira%2C%20283%20-%20Pechincha%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
  }
];

export const AllLocationsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nossas Unidades
            </h2>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
              Escolha a unidade mais próxima de você
            </p>
          </div>

          <div className="space-y-12">
            {locationData.map((location) => (
              <div 
                key={location.unit}
                className="grid lg:grid-cols-2 gap-8 items-center bg-background rounded-2xl p-6 lg:p-8 shadow-lg"
              >
                <div className="space-y-4">
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-foreground"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Unidade {location.name}
                  </h3>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {location.address}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-xl border-2 border-border">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa da localização - Unidade ${location.name}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
