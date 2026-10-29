import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return <button type={type} className={`button ${variant === "secondary" ? "button-secondary" : ""} ${className}`} {...props} />;
}

export function Tag({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`tag ${className}`} {...props} />;
}

export function Icon({ name }: { name: "arrow" | "check" | "external" | "error" }) {
  const paths = {
    arrow: <path d="M4 10h12m-5-5 5 5-5 5" />,
    check: <path d="m4 10 4 4 8-8" />,
    external: <><path d="M11 3h6v6M17 3l-8 8" /><path d="M8 4H4v12h12v-4" /></>,
    error: <><circle cx="10" cy="10" r="7" /><path d="M10 6v5m0 2v1" /></>,
  };
  return <svg className="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
