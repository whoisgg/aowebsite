import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/horizontal.module.scss";
import Image from "next/image";

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
    <section className={styles.scrollSectionOuter}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should always be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          <div
            className={`${styles.scrollSection} ${styles.scrollOne}`}
            id="services"
          >
            <div>
              <h3 className="text-5xl">Servicios</h3>
            </div>
          </div>
          <div className={`${styles.scrollSection} ${styles.scrollTwo}`}>
            <div>
              <h3>Estetica</h3>
              <ul className="text-xl">
                <li>Blanqueamiento</li>
                <li>Bioestimulador colageno</li>
                <li>Rellenos de acido hialuronico</li>
                <li>rino modelacion</li>
                <li>relleno de labios y menton</li>
                <li>Skinboosters</li>
                <li>Lipoaspiracion de papada</li>
                <li>Lifting 7 puntos</li>
                <li>Vitaminas</li>
                <li>Toxina botulinica</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.scrollSection} ${styles.scrollThree}`}>
            <div>
              <h3>Endodoncia</h3>
              <ul className="text-xl">
                <li>Tratamiento de Conducto</li>
              </ul>
            </div>
          </div>
          <div className={styles.scrollSection}>
            <div>
              <h3>Odontologia General</h3>
              <ul className="text-xl">
                <li>Limpieza</li>
                <li>Restauraciones</li>
                <li>Blanquamibto</li>
                <li>Plano relajacion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
