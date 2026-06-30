"use client";

import { useServerInsertedHTML } from "next/navigation";

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var p=localStorage.getItem("theme-preference");if(p==="dark"){document.documentElement.classList.add("dark");return}if(p==="light")return;var o=p||localStorage.getItem("theme");if(o==="dark"){document.documentElement.classList.add("dark");return}if(window.matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.classList.add("dark")}catch(e){}})()`,
      }}
    />
  ));
  return null;
}
