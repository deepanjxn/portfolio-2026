import { useEffect } from "react";

type ShortcutOptions = {
  ignoreWhenEditing?: boolean;
};

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: ShortcutOptions = {}
) {
  const { ignoreWhenEditing = true } = options;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.repeat) return;

      if (ignoreWhenEditing) {
        const target = e.target as HTMLElement;
        if (
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable
        ) {
          return;
        }
      }

      if (e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, callback, ignoreWhenEditing]);
}
