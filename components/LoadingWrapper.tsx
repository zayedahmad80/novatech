"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}