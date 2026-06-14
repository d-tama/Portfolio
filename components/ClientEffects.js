"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // スマートフォンでは傾きエフェクトを無効にする
      return;
    }

    let cancelled = false;

    const init = () => {
      if (cancelled) return;
      if (typeof window.VanillaTilt === "undefined") {
        requestAnimationFrame(init);
        return;
      }
      window.VanillaTilt.init(document.querySelectorAll(".item"), {
        max: 25,
        speed: 400,
      });
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
