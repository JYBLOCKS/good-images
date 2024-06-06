import { useState, useEffect } from "react";

export function useLoading(id: number | undefined, url: string) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id !== undefined && url) {
      setInterval(() => setLoading(false), 3000);
    }
    return () => {
      setLoading(true);
    };
  }, [id, url]);

  return { loading };
}
