"use client";
import styles from "../styles/page.module.scss";
import ZoomParallax from "../components/ZoomParallax/page";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Profile from "@/components/Pages/Profile";
import Section1 from "@/components/Pages/Section1";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Profile />
      <div className={styles.main}>
        <ZoomParallax />
        <Section1 />
      </div>
    </main>
  );
}
