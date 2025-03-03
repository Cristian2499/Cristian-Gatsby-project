import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => (
  <div className="container py-5">
    <h1 className="mb-4 text-center">Acerca del Blog</h1>
    <p className="lead">
      Bienvenido a Hola Mundo Blog, el espacio ideal para dar tus primeros pasos en el mundo del desarrollo. Aquí encontrarás contenido accesible y práctico pensado especialmente para principiantes.
    </p>
    <p>
      Nuestro objetivo es descomponer conceptos complejos y traducirlos en guías sencillas, tutoriales paso a paso y artículos inspiradores. Desde programación web y desarrollo de aplicaciones hasta buenas prácticas y herramientas útiles, te acompañaremos en cada línea de código.
    </p>
    <p>
      No importa si apenas estás escribiendo tu primer "Hello, World!" o si ya tienes algunas líneas de código en tu haber, en Hola Mundo Blog siempre habrá algo nuevo por descubrir.

      ¡Sigue aprendiendo, experimentando y creciendo con nosotros!
    </p>
    <Link to="/" className="btn btn-secondary mt-4">
      Volver al Blog
    </Link>
  </div>
);

export default AboutPage;
