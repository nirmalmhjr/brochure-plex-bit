import { useEffect, useRef, useState } from "react";

/** Tracks image load failures without putting onError on the img element. */
export function useImageFallback(src?: string) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFailed(false);

    const img = ref.current;
    if (!(img && src)) {
      return;
    }

    const onError = () => setFailed(true);
    img.addEventListener("error", onError);
    return () => img.removeEventListener("error", onError);
  }, [src]);

  return { failed, ref };
}
