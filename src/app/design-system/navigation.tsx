"use client";

import { useEffect, useState } from "react";

const sections = [
  ["fundamentos", "Fundamentos"],
  ["tipografia", "Tipografía"],
  ["interaccion", "Interacción"],
  ["composicion", "Composición"],
  ["accesibilidad", "Accesibilidad"],
] as const;

export function Navigation() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const update = () => setCurrent(window.location.hash.slice(1));
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const links = (
      <ul className="grid grid-cols-2 gap-1 lg:grid-cols-1">
        {sections.map(([id, label]) => <li key={id}>
          <a className="nav-link" href={`#${id}`} aria-current={current === id ? "location" : undefined}>{label}</a>
        </li>)}
      </ul>
  );

  return (
    <>
      <details className="border-y border-border lg:hidden">
        <summary className="min-h-target cursor-pointer py-3 font-medium text-accent">Índice de esta página</summary>
        <nav className="py-3" aria-label="Secciones del sistema de diseño">{links}</nav>
      </details>
      <nav className="hidden lg:block" aria-label="Secciones del sistema de diseño">
        <p className="mb-3 px-3 font-medium">Contenido</p>
        {links}
        <p className="mt-6 px-3 text-label text-muted">Referencia de desarrollo.<br />El portafolio se construirá en otra fase.</p>
      </nav>
    </>
  );
}
