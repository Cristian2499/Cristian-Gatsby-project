import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => (
  <div className="container py-5">
    <h1 className="mb-4 text-center">Acerca del Blog</h1>
    <p className="lead">
      Bienvenido a nuestro blog. Aquí compartimos las últimas noticias y 
      actualizaciones sobre deportes, con un enfoque especial en el fútbol colombiano. 
      Nuestro objetivo es brindarte contenido relevante y actualizado, con un análisis 
      detallado y opiniones informadas.
    </p>
    <p>
      Este blog se actualiza regularmente con artículos nuevos, crónicas de partidos 
      y entrevistas exclusivas. Nuestro equipo de redactores trabaja para asegurarse 
      de que siempre estés al tanto de lo más importante.
    </p>
    <p>
      Si eres un fanático del fútbol o simplemente te gusta estar informado, este es 
      el lugar perfecto para ti. ¡Esperamos que disfrutes el contenido!
    </p>
    <Link to="/" className="btn btn-secondary mt-4">
      Volver al Blog
    </Link>
  </div>
);

export default AboutPage;
