import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/horizontal.module.scss";
import Image from "next/image";
import Service1 from "./Service1";

import ServiceM from "./ServiceM";

function ScrollSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []); // Run only once on component mount

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, [sectionRef, triggerRef]);

  return (
    <section
      className={styles.scrollSectionOuter}
      suppressHydrationWarning={true}
    >
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should always be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          <div className={` ${styles.scrollOne}`}>
            <ServiceM />
          </div>
          <div className={` ${styles.bgone} ${styles.scrollSection}`}>
            <Service1
              scrollHeading="Odontologia"
              mainImage="/images/110.jpg"
              overlayImage="/images/123.jpg"
              count="1"
              color=""
            />
          </div>
          <div className={`${styles.bgtwo} ${styles.scrollSection}`}>
            <Service1
              scrollHeading="Endodoncia"
              mainImage="/images/19.jpg"
              overlayImage="/images/18.jpg"
              count="2"
              color=""
            />
          </div>
          <div className={` ${styles.bgthree} ${styles.scrollSection}`}>
            <Service1
              scrollHeading="Estetica"
              mainImage="/images/2.jpg"
              overlayImage="/images/5.jpg"
              count="3"
              color=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
