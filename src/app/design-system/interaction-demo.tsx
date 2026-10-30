"use client";

import { useRef, useState } from "react";
import { Button, Icon, Tag } from "@/components/ui";

type View = "empty" | "loading" | "ready" | "error";
const views: { value: View; label: string }[] = [
  { value: "empty", label: "Vacío" },
  { value: "loading", label: "Cargando" },
  { value: "ready", label: "Listo" },
  { value: "error", label: "Error" },
];

export function InteractionDemo() {
  const [view, setView] = useState<View>("empty");
  const [marked, setMarked] = useState(false);
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-8">
      <div className="specimen">
        <h3 className="mb-4 text-title">Acciones y enlaces</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => setMarked(!marked)} aria-pressed={marked}>
            {marked ? <Icon name="check" /> : <Icon name="arrow" />}
            Marcar ejemplo
          </Button>
          <Button variant="secondary" onClick={() => { setMarked(false); setView("empty"); setMessage(""); setInvalid(false); if (input.current) input.current.value = ""; }}>Restablecer</Button>
          <Button disabled>Acción no disponible</Button>
        </div>
        <p className="mt-3 text-label text-muted">La acción deshabilitada no tiene un destino configurado. El resto de controles solo modifica esta demostración.</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a className="text-link" href="#composicion">Ver muestra de proyecto <Icon name="arrow" /></a>
          <a className="text-link" href="https://github.com/IBM/plex">Origen de IBM Plex <Icon name="external" /></a>
        </div>
      </div>

      <div className="specimen">
        <h3 className="mb-2 text-title">Estados de contenido</h3>
        <p className="mb-4 text-muted">Selecciona un estado. Son ejemplos locales, sin peticiones a un servidor.</p>
        <fieldset>
          <legend className="mb-3 text-label font-medium">Estado de la muestra</legend>
          <div className="flex flex-wrap gap-2">
          {views.map(({ value, label }) => <label key={value} className="flex min-h-target cursor-pointer items-center gap-2 rounded-control border border-control bg-surface px-3 py-2 has-checked:border-accent has-checked:bg-surface has-checked:text-accent">
            <input type="radio" name="content-state" value={value} checked={view === value} onChange={() => setView(value)} className="size-4 shrink-0 accent-accent" />
            {label}
          </label>)}
          </div>
        </fieldset>
        <div className="mt-6 min-h-feedback border-t border-border pt-6" role="status" aria-live="polite" aria-atomic="true">
          {view === "empty" && <><p className="font-medium">Todavía no hay material de referencia.</p><p className="mt-2 text-muted">Cuando exista evidencia revisada, este espacio podrá mostrar una captura con su contexto.</p></>}
          {view === "loading" && <><p className="font-medium">Cargando muestra…</p><p className="mt-2 text-muted">Estado de carga simulado. Selecciona Listo o Error para finalizar.</p>          <div className="mt-4 space-y-3"><div className="h-4 w-3/4 bg-surface" /><div className="h-4 w-1/2 bg-surface" /></div></>}
          {view === "ready" && <div className="flex items-start gap-3 text-accent"><Icon name="check" /><div><p className="font-semibold">Muestra lista.</p><p className="mt-2 text-foreground">La confirmación usa texto e icono, además de color.</p></div></div>}
          {view === "error" && <div><div className="flex items-start gap-3 text-muted"><Icon name="error" /><div><p className="font-semibold">No se pudo cargar la muestra.</p><p className="mt-2 text-foreground">Error simulado. Puedes volver al estado inicial.</p></div></div><Button className="mt-4" variant="secondary" onClick={() => setView("empty")}>Volver al estado inicial</Button></div>}
        </div>
      </div>

      <div className="specimen">
        <h3 className="mb-2 text-title">Validación y etiquetas</h3>
        <p className="mb-6 text-muted">Un campo vacío muestra el error. No se guarda ni se envía información.</p>
        <form noValidate onSubmit={(event) => {
          event.preventDefault();
          const empty = !input.current?.value.trim();
          setInvalid(empty);
          setMessage(empty ? "Escribe un nombre para continuar con la demostración." : "Validación completada. No se han enviado datos.");
          if (empty) input.current?.focus();
        }} className="max-w-measure">
          <label htmlFor="sample-name" className="mb-2 block font-medium">Nombre de la muestra <span className="font-normal text-muted">(obligatorio)</span></label>
          <input ref={input} id="sample-name" name="sample-name" className="field" required aria-invalid={invalid || undefined} aria-describedby="sample-help sample-message" autoComplete="off" placeholder="Por ejemplo: revisión visual" onChange={() => { if (message) { setMessage(""); setInvalid(false); } }} />
          <p id="sample-help" className="mt-2 text-label text-muted">Usa un nombre de prueba, sin datos personales.</p>
          <p id="sample-message" role="status" aria-live="polite" className={`mt-2 min-h-[3.5rem] ${invalid ? "text-accent-active" : "text-accent"}`}>{message}</p>
          <Button className="mt-4" type="submit">Validar muestra</Button>
        </form>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Tag>Muestra de diseño</Tag>
          <Tag className="border-control bg-surface text-accent"><Icon name="check" />Estado: correcto</Tag>
          <Tag className="border-control bg-surface text-muted"><Icon name="error" />Estado: error</Tag>
        </div>
        <p className="mt-3 text-label text-muted">Las etiquetas describen contenido. No son botones ni se incluyen en el orden de tabulación.</p>
      </div>
    </div>
  );
}
