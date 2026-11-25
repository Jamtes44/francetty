import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { business } from "./config";

type IconName =
  | "arrow"
  | "pin"
  | "whatsapp"
  | "instagram"
  | "menu"
  | "close"
  | "bread"
  | "cake"
  | "cutlery"
  | "coffee"
  | "heart"
  | "clock"
  | "phone"
  | "leaf";
function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  if (name === "whatsapp")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    );
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M4 12h15m-5-5 5 5-5 5" />,
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    whatsapp: null,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    bread: (
      <>
        <path d="M6 20V10C0 8 3 2 8 4c2-3 6-3 8 0 5-2 8 4 2 6v10Z" />
        <path d="M10 8v5m4-5v5M6 17h12" />
      </>
    ),
    cake: (
      <>
        <path d="M3 13h18v8H3zM5 13V8h14v5M8 8V5m4 3V4m4 4V5M3 16c3 4 3-3 6 0s3-3 6 0 3-3 6 0" />
        <path d="M8 2h.01M12 1h.01M16 2h.01" />
      </>
    ),
    cutlery: (
      <>
        <path d="M5 3v6c0 4 6 4 6 0V3M8 3v18M19 21V3c-5 3-5 10 0 10" />
      </>
    ),
    coffee: (
      <>
        <path d="M3 9h13v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm13 1h2a3 3 0 0 1 0 6h-2M6 5V2m4 3V1m4 4V2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    phone: <path d="m7 3 3 5-3 2c2 4 3 5 7 7l2-3 5 3c-2 8-12 1-16-5C2 7 2 4 7 3Z" />,
    leaf: (
      <>
        <path d="M20 3C9 1 1 10 7 16S23 14 20 3ZM4 21 16 8M10 14v-4m0 4h5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const photo = (name: string) => `${import.meta.env.BASE_URL}images/francetty/${name}`;
const whatsapp = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
const reserve = whatsapp(
  "¡Hola, Francetty! Me gustaría reservar una mesa. ¿Me ayudan con la disponibilidad?",
);
const instagram = "https://www.instagram.com/fran_cetty/";
const categories = ["Todos", "Panadería", "Pastelería", "Restaurante", "Café"];
const lines: {
  title: string;
  description: string;
  icon: IconName;
  category: string;
  id: string;
}[] = [
  {
    title: "Panadería artesanal",
    description: "El aroma de lo recién horneado, todos los días.",
    icon: "bread",
    category: "Panadería",
    id: "panaderia",
  },
  {
    title: "Pastelería hecha con amor",
    description: "Pequeños detalles, grandes momentos de dulzura.",
    icon: "cake",
    category: "Pastelería",
    id: "pasteleria",
  },
  {
    title: "Restaurante gourmet",
    description: "Menú del día, parrilla y sabores que hacen de cada encuentro un buen plan.",
    icon: "cutlery",
    category: "Restaurante",
    id: "restaurante",
  },
  {
    title: "Cafetería",
    description: "Un café para cada antojo, helados y tu mejor compañía.",
    icon: "coffee",
    category: "Café",
    id: "cafe",
  },
];
const products: {
  name: string;
  description: string;
  image: string;
  category: string;
  label: string;
  position?: string;
}[] = [
  {
    name: "Torta de chocolate y fresas",
    description: "Chocolate, fresas frescas y el toque de la casa.",
    image: "torta-chocolate.webp",
    category: "Pastelería",
    label: "El favorito de la casa",
  },
  {
    name: "Postre de crema y frutos rojos",
    description: "Crema, virutas de chocolate y frutos rojos.",
    image: "chocolate-fresas.webp",
    category: "Pastelería",
    label: "Un dulce favorito",
  },
  {
    name: "Postres en vaso",
    description: "Capas de felicidad, cucharada a cucharada.",
    image: "postre-vaso.webp",
    category: "Pastelería",
    label: "Pequeños antojos",
  },
  {
    name: "Empanadas con ají",
    description: "Doraditas, crujientes y con todo el sabor.",
    image: "empanadas.webp",
    category: "Restaurante",
    label: "Sabor tradicional",
  },
  {
    name: "Mantecadas",
    description: "Recién horneadas, para acompañar tu café.",
    image: "mantecadas.webp",
    category: "Panadería",
    label: "Del horno a tu mesa",
  },
  {
    name: "Malteadas",
    description: "Cremosas y deliciosamente irresistibles.",
    image: "malteada.webp",
    category: "Café",
    label: "Un gusto para el alma",
  },
  {
    name: "Chocolate caliente con masmelos",
    description: "Cremoso, calientico y perfecto para compartir.",
    image: "chocolate-caliente.jpg",
    category: "Café",
    label: "No te lo puedes perder",
    position: "center 80%",
  },
  {
    name: "Café con crema",
    description: "Espresso, capuchino, lattes, mocas y fríos.",
    image: "cafe-crema.jpg",
    category: "Café",
    label: "Tu pausa favorita",
    position: "center 70%",
  },
];
function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="Francetty, ir al inicio">
      <img src={photo("logo-francetty.png")} alt="Francetty" />
    </a>
  );
}
function Heading({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
function External({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const nav = [
    ["Inicio", "inicio"],
    ["Panadería", "panaderia"],
    ["Pastelería", "pasteleria"],
    ["Restaurante", "restaurante"],
    ["Café", "cafe"],
    ["Eventos", "eventos"],
    ["Contacto", "contacto"],
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const chooseLine = (line: string) => {
    setCategory(line);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegación principal">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <External href={business.rappi} className="button header-rappi">
            Pide en <strong>Rappi</strong>
            <Icon name="arrow" size={16} />
          </External>
          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
        {mobileOpen && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>
                {label}
                <Icon name="arrow" size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <img
            className="hero-image"
            src={photo("hero.webp")}
            alt="Tartaletas de frutas de Francetty"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">
                <span /> HECHO CON AMOR, EN GALERÍAS
              </span>
              <h1>
                Donde el sabor
                <br />
                se convierte en
                <br />
                <em>experiencia</em>
              </h1>
              <p className="hero-subtitle">
                Artesanal & Tradicional <span>·</span> Café <span>·</span> Repostería <span>·</span>{" "}
                Gourmet
              </p>
              <p className="hero-description">
                Hay lugares que se disfrutan con todos los sentidos.
                <br className="desktop-only" /> Bienvenido a Francetty, tu lugar para compartir.
              </p>
              <div className="hero-actions">
                <External href={reserve} className="button button-gold">
                  <Icon name="whatsapp" size={19} />
                  Reserva tu mesa
                  <Icon name="arrow" size={17} />
                </External>
                <a href="#menu" className="button button-outline">
                  Ver menú
                  <Icon name="arrow" size={17} />
                </a>
              </div>
              <a href="#contacto" className="hero-location">
                <Icon name="pin" size={16} />
                Un pedacito de felicidad en Galerías, Bogotá
              </a>
            </div>
            <div className="artisan-seal">
              <Icon name="leaf" size={26} />
              <span>Hecho con</span>
              <strong>amor</strong>
              <small>Y UN TOQUE ARTESANAL</small>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>BUEN CAFÉ. DULCES MOMENTOS. MEJOR COMPAÑÍA.</span>
            <a href="#esencia">
              Descubre Francetty <span>↓</span>
            </a>
          </div>
        </section>

        <div className="promise-strip">
          <span>Tradición en cada receta</span>
          <i />
          <span>Ingredientes con amor</span>
          <i />
          <span>Momentos para compartir</span>
          <i />
          <span>El sabor de sentirte en casa</span>
        </div>

        <section className="section lines-section line-art" id="esencia">
          <div className="container reveal">
            <Heading
              eyebrow="UNA CASA, MUCHAS FORMAS DE DISFRUTAR"
              description="Del primer café de la mañana al postre que alegra tu día."
            >
              Nuestra esencia, tu antojo
            </Heading>
            <div className="lines-grid">
              {lines.map((line) => (
                <button
                  key={line.id}
                  className="line-card"
                  id={line.id}
                  onClick={() => chooseLine(line.category)}
                >
                  <span className="line-icon">
                    <Icon name={line.icon} size={35} />
                  </span>
                  <h3>{line.title}</h3>
                  <p>{line.description}</p>
                  <span className="line-explore">
                    Descubrir <Icon name="arrow" size={15} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section favorites" id="menu">
          <div className="container">
            <div className="reveal">
              <Heading
                eyebrow="SIEMPRE HAY UNA BUENA EXCUSA"
                description="Esos sabores que pruebas una vez… y quieres repetir."
              >
                Los favoritos de la casa
              </Heading>
            </div>
            <div className="filters" role="group" aria-label="Filtrar productos por categoría">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={category === item ? "active" : ""}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="product-grid" aria-live="polite">
              {products
                .filter((item) => category === "Todos" || category === item.category)
                .map((product) => (
                  <article className="product-card" key={product.name}>
                    <External
                      href={whatsapp(
                        `¡Hola, Francetty! Quisiera conocer los sabores, precios y disponibilidad de ${product.name.toLowerCase()}.`,
                      )}
                      className="product-photo"
                      label={`Consultar por ${product.name}`}
                    >
                      <img
                        src={photo(product.image)}
                        alt={product.name}
                        loading="lazy"
                        style={product.position ? { objectPosition: product.position } : undefined}
                      />
                      <span className="product-plus">
                        <Icon name="arrow" size={19} />
                      </span>
                      {product.name === "Torta de chocolate y fresas" && (
                        <span className="product-badge">El más querido</span>
                      )}
                    </External>
                    <div className="product-copy">
                      <span>{product.label}</span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </article>
                ))}
            </div>
            <div className="menu-note">
              <span>¿Se te antoja algo más? Tenemos un sabor para cada momento.</span>
              <External
                href={whatsapp(
                  "¡Hola, Francetty! ¿Me comparten el menú completo con precios y disponibilidad?",
                )}
                className="text-link"
              >
                Consulta nuestro menú completo <Icon name="arrow" size={17} />
              </External>
            </div>
          </div>
        </section>

        <section className="custom-section" id="tortas">
          <div className="container custom-grid reveal">
            <div className="custom-photo">
              <img
                src={photo("torta-personalizada.jpg")}
                alt="Torta personalizada de cumpleaños decorada por Francetty"
                loading="lazy"
                style={{ objectPosition: "center 78%" }}
              />
              <span className="photo-note">Tu idea, nuestro toque de amor.</span>
            </div>
            <div className="custom-copy">
              <span className="eyebrow">TÚ LO IMAGINAS, NOSOTROS LO HORNEAMOS</span>
              <h2>
                Una torta tan especial
                <br />
                como <em>tu momento</em>
              </h2>
              <p>
                Los mejores recuerdos también tienen sabor. Creamos tortas de cumpleaños y diseños
                personalizados para que tu celebración sea única, por dentro y por fuera.
              </p>
              <ul>
                <li>
                  <Icon name="heart" size={17} />
                  Diseños que cuentan tu historia
                </li>
                <li>
                  <Icon name="cake" size={18} />
                  Sabores para enamorar a todos
                </li>
                <li>
                  <Icon name="leaf" size={18} />
                  Hechas artesanalmente por encargo
                </li>
              </ul>
              <External
                href={whatsapp(
                  "¡Hola, Francetty! Quiero cotizar una torta personalizada. ¿Podemos hablar del diseño, las porciones y la fecha?",
                )}
                className="button button-chocolate"
              >
                <Icon name="whatsapp" size={19} />
                Diseñemos tu torta
                <Icon name="arrow" size={17} />
              </External>
              <small>Cuéntanos tu idea y consulta disponibilidad con anticipación.</small>
            </div>
          </div>
        </section>

        <section className="section events-section" id="eventos">
          <div className="container reveal">
            <Heading
              eyebrow="LOS BUENOS MOMENTOS MERECEN UN BUEN LUGAR"
              description="Sí, este también puede ser el lugar de tus mejores recuerdos."
            >
              Celebra con nosotros
            </Heading>
            <div className="events-grid">
              <div className="events-copy">
                <span className="eyebrow">UN ESPACIO PARA ENCONTRARNOS</span>
                <h3>
                  ¿Sabías que puedes
                  <br />
                  <em>reservar?</em>
                </h3>
                <p>
                  Tú pones el motivo, nosotros el sabor y ese ambiente acogedor que hace sentir a
                  todos como en casa.
                </p>
                <div className="event-tags">
                  <span>Cumpleaños</span>
                  <span>Baby shower</span>
                  <span>Eventos corporativos</span>
                </div>
                <External
                  href={whatsapp(
                    "¡Hola, Francetty! Me gustaría reservar para una celebración. ¿Qué opciones tienen para eventos?",
                  )}
                  className="text-link"
                >
                  Planeemos tu celebración <Icon name="arrow" size={18} />
                </External>
              </div>
              <div className="event-photo event-photo-tall">
                <img
                  src={photo("evento-grupo.webp")}
                  alt="Grupo celebrando en Francetty con globos y torta"
                  loading="lazy"
                />
                <span>Encuentros que se recuerdan</span>
              </div>
              <div className="event-photo event-photo-small">
                <img
                  src={photo("evento-cumple.webp")}
                  alt="Celebración de cumpleaños en Francetty"
                  loading="lazy"
                />
                <span>Detalles llenos de amor</span>
              </div>
            </div>
            <p className="photo-disclaimer">
              Consulta opciones, decoración y disponibilidad para tu evento.
            </p>
          </div>
        </section>

        <section className="instagram-section">
          <div className="container">
            <div className="instagram-heading reveal">
              <div>
                <span className="eyebrow">UN POQUITO DE NUESTRO DÍA A DÍA</span>
                <h2>Momentos Francetty</h2>
              </div>
              <External href={instagram} className="text-link">
                <Icon name="instagram" size={21} />
                @fran_cetty
                <Icon name="arrow" size={17} />
              </External>
            </div>
            <div className="instagram-grid">
              {["equipo.jpg", "torta-chocolate.webp", "celebracion.webp", "fachada.jpg", "cena-grupo.jpg"].map(
                (image, index) => (
                  <External
                    href={instagram}
                    key={image}
                    className="instagram-photo"
                    label="Ver más momentos en Instagram de Francetty"
                  >
                    <img
                      src={photo(image)}
                      alt={
                        [
                          "El equipo de Francetty",
                          "Torta de chocolate y fresas",
                          "Celebraciones en Francetty",
                          "Nuestra sede en Galerías",
                          "Un encuentro para compartir",
                        ][index]
                      }
                      loading="lazy"
                    />
                    <span>
                      <Icon name="instagram" size={27} />
                    </span>
                  </External>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section visit-section line-art" id="contacto">
          <div className="container visit-grid reveal">
            <div className="visit-copy">
              <span className="eyebrow">SIEMPRE ES UN BUEN MOMENTO</span>
              <h2>
                Nos vemos en <em>Francetty</em>
              </h2>
              <p>
                Tu próxima pausa favorita está en Galerías.
                <br />
                Ven por un café, quédate por la experiencia.
              </p>
              <div className="contact-item">
                <Icon name="pin" />
                <div>
                  <h3>Aquí te esperamos</h3>
                  <p>
                    Cra 21 #53-36
                    <br />
                    Galerías, Bogotá, Colombia
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="clock" />
                <div>
                  <h3>Nuestros horarios</h3>
                  {business.hours.length ? (
                    business.hours.map((hours) => (
                      <p key={hours.days}>
                        {hours.days}: {hours.time}
                      </p>
                    ))
                  ) : (
                    <p>Confirma nuestro horario antes de visitarnos.</p>
                  )}
                  <External
                    href={whatsapp("¡Hola! ¿Cuál es el horario de atención de Francetty?")}
                    className="small-link"
                  >
                    Consultar horario de hoy <Icon name="arrow" size={13} />
                  </External>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="phone" />
                <div>
                  <h3>Hablemos</h3>
                  <a href="tel:+573143400773">+57 314 340 0773</a>
                </div>
              </div>
              <External
                href="https://www.google.com/maps/search/?api=1&query=Francetty+Cra+21+53-36+Bogota"
                className="button button-chocolate"
              >
                Cómo llegar
                <Icon name="arrow" size={17} />
              </External>
            </div>
            <div className="map-wrap">
              <iframe
                title="Ubicación de Francetty en Galerías, Bogotá"
                src="https://maps.google.com/maps?q=Cra%2021%20%2353-36%2C%20Bogot%C3%A1%2C%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="map-caption">
                <span className="map-mark">
                  <Icon name="pin" size={23} />
                </span>
                <div>
                  <strong>Francetty</strong>
                  <span>Un lugar para sentirte en casa.</span>
                </div>
                <External
                  href="https://www.google.com/maps/search/?api=1&query=Francetty+Cra+21+53-36+Bogota"
                  label="Abrir ubicación en Google Maps"
                >
                  <Icon name="arrow" />
                </External>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo />
              <p>Donde el sabor se convierte en experiencia.</p>
            </div>
            <div className="footer-column">
              <h3>Descubre Francetty</h3>
              <a href="#menu">Nuestro menú</a>
              <a href="#tortas">Tortas personalizadas</a>
              <a href="#eventos">Celebra con nosotros</a>
            </div>
            <div className="footer-column">
              <h3>Estamos para ti</h3>
              <a href="#contacto">Cra 21 #53-36, Galerías</a>
              <a href="tel:+573143400773">+57 314 340 0773</a>
              <External href={reserve}>
                Reserva por WhatsApp <Icon name="arrow" size={14} />
              </External>
            </div>
            <div className="footer-column">
              <h3>Sigamos compartiendo</h3>
              <External href={instagram}>
                <Icon name="instagram" size={17} />
                @fran_cetty
              </External>
              <External href={business.rappi}>
                Encuéntranos en Rappi <Icon name="arrow" size={14} />
              </External>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Francetty. Todos los derechos reservados.</span>
            <span>Hecho con amor en Bogotá.</span>
            <a href="#inicio">Volver al inicio ↑</a>
          </div>
        </div>
      </footer>
      <External
        href={whatsapp("¡Hola, Francetty! Me gustaría recibir más información.")}
        className="floating-whatsapp"
        label="Hablar con Francetty por WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
        <span>¿Hablamos?</span>
      </External>
    </>
  );
}
