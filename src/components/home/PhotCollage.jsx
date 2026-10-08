import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import data from "../../assets/data";

// ---- Small helper: is the viewport at/below the mobile breakpoint? -------
// Keep this in sync with the `@media (max-width: 640px)` rule below.
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

/**
 * PhotoCollage
 * ------------
 * A scattered "polaroid" photo grid that staggers into view (fade + scale +
 * rotate into its resting tilt) the first time it scrolls into the viewport,
 * with an optional subtle parallax drift on top.
 *
 * Sizing: each photo's `width` is a CSS clamp() string (min, preferred, max)
 * so cards scale smoothly with the viewport instead of a fixed pixel size.
 * The `container`'s height is also clamp()-based so the collage keeps its
 * proportions as the screen shrinks/grows.
 */

// ---- Default photo data (position/rotation/size are your "layout") -------
// width: clamp(min, preferred-vw, max) — bigger cards, scales responsively
const DEFAULT_PHOTOS = [
  {
    src: data.Image1,
    rotate: -6,
    top: "0%",
    left: "0%",
    width: "clamp(220px, 30vw, 420px)",
    speed: 0.6,
  },
  {
    src: data.Image100,
    rotate: 4,
    top: "14%",
    left: "24%",
    width: "clamp(200px, 27vw, 380px)",
    speed: 1,
  },
  {
    src: data.Image102,
    rotate: -3,
    top: "2%",
    left: "48%",
    width: "clamp(230px, 32vw, 440px)",
    speed: 1.4,
  },
  {
    src: data.Image105,
    rotate: 6,
    top: "20%",
    left: "70%",
    width: "clamp(200px, 27vw, 380px)",
    speed: 0.8,
  },
];

// ---- Stagger container ----------------------------------------------------
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// ---- Per-photo entrance variant (fades/scales/rotates into final tilt) ---
const photoVariant = (finalRotate) => ({
  hidden: { opacity: 0, scale: 0.7, rotate: 0, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: finalRotate,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
});

// ---- A single photo: entrance animation + optional scroll parallax -------
function Polaroid({
  src,
  rotate,
  top,
  left,
  width,
  speed = 1,
  parallax = true,
  zIndex,
}) {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  // Only used if parallax is enabled — each photo drifts a different
  // amount as the section scrolls past, based on its own `speed`.
  // Disabled on mobile: it fights with `position: sticky` (both try to
  // move the element), which makes the sticky stack jitter.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [50 * speed, -50 * speed],
  );
  const applyParallax = parallax && !isMobile;

  return (
    <motion.div
      ref={ref}
      className="polaroid"
      style={{
        top,
        left,
        width,
        zIndex,
        ...(applyParallax ? { y: parallaxY } : {}),
      }}
      variants={photoVariant(rotate)}
    >
      <img src={src} alt="" draggable={false} />
    </motion.div>
  );
}

// ---- The collage container -------------------------------------------------
export default function PhotoCollage({
  photos = DEFAULT_PHOTOS,
  parallax = true,
  className = "",
}) {
  return (
    <motion.div
      className={`collage ${className}`}
      variants={container}
      data-nav-theme="light"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // fires once, when 30% is visible
    >
      {photos.map((p, i) => (
        // zIndex increases down the list so, once stacked/sticky on
        // mobile, each new card overlaps on top of the ones before it.
        <Polaroid key={i} {...p} parallax={parallax} zIndex={i + 1} />
      ))}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
   CSS (put this in your stylesheet, or convert to CSS-in-JS/Tailwind)
   ---------------------------------------------------------------------------

  

--------------------------------------------------------------------------- */