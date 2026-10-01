"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  wide?: boolean;
};

export function Modal({ open, onClose, labelledBy, children, wide }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      opener.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={() => {
        onClose();
        opener.current?.focus();
      }}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className={`m-auto w-[calc(100%-2rem)] ${wide ? "max-w-5xl" : "max-w-3xl"} max-h-[90vh] overflow-hidden rounded-2xl border border-line bg-panel p-0 text-fg shadow-2xl`}
    >
      <div className="relative max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition hover:bg-panel-2 hover:text-fg"
          aria-label="Close"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
