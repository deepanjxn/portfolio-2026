"use client";

import { useServerInsertedHTML } from "next/navigation";

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
      }}
    />
  ));
  return null;
}
