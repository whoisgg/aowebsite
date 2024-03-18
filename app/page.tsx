"use client";
import styles from "../styles/page.module.scss";
import ZoomParallax from "../components/ZoomParallax/page";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Profile from "@/components/Pages/Profile";
import Section1 from "@/components/Pages/Section1";
import Header from "@/components/Header/Header";
import Section2 from "@/components/Pages/Section2";
import Section3 from "@/components/Pages/Section3";
import Section4 from "@/components/Pages/Section4";
import ScrollSection from "@/components/Hscroll/ScrollSection";

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
        <Section2 />
        <Section3 />
        <ScrollSection />
        <Section4 />
      </div>
    </main>
  );
}
