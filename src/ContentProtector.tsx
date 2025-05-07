import { ReactNode, useEffect } from "react";

export default function ContentProtector({ children }: { children: ReactNode }) {
  // Block text selection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Block right-click and keyboard shortcuts
  useEffect(() => {
    const handleContextMenu = (e: Event) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+A, Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+I, F12
      if (e.ctrlKey || e.metaKey || e.key === "F12") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Block image dragging
  useEffect(() => {
    const handleDragStart = (e: Event) => e.preventDefault();
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return <div className="select-none">{children}</div>;
}