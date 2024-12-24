import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  const projects = [
    {
      title: "FAQ Accordion",
      description: "Componente minimalista para mostrar preguntas y respuestas frecuentes",
      href: "https://micro-faq.vercel.app/",
    },
    {
      title: "Bento Grid",
      description: "Layout moderno con diseño de cuadrícula adaptativa",
      href: "https://micro-grid-nu.vercel.app/",
    },
    {
      title: "Social Proof",
      description: "Sección elegante para mostrar testimonios y valoraciones",
      href: "https://social-micro.vercel.app/",
    },
    {
      title: "Proximamente: Mas proyectos",
      description: "Pronto habra nuevas actualizaciones con microproyectos mejores",
      href: "#",
    },
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Proyectos Minimalistas</h1>
        <p className={styles.subtitle}>
          Una colección de componentes con diseño limpio y funcional
        </p>
      </header>
      <section>
        <ul className={styles.projectsGrid}>
          {projects.map((project) => (
            <li key={project.href} className={styles.projectCard}>
              <Link href={project.href} className={styles.projectLink}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

