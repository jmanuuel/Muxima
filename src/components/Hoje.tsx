"use client";
import { useEffect, useState } from "react";
import { HOJE, HOJE_UTIL } from "@/content";
export default function Hoje() {
  const [t, setT] = useState<string>(HOJE_UTIL);
  useEffect(() => setT(HOJE[new Date().getDay()] ?? HOJE_UTIL), []);
  return <p><strong>Hoje no Santuário</strong><br />{t}</p>;
}
