"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
  loading?: "lazy" | "eager";
};

export function SmartImage({ src, alt, className, fallback, loading = "lazy" }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(!src);

  // An image that failed before hydration never fires onError, so check it on mount.
  // Deferred lazy images also report complete with zero width but have no currentSrc yet.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0 && img.currentSrc) setFailed(true);
  }, []);

  if (failed || !src) return <>{fallback}</>;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
      data-smart-image
    />
  );
}
