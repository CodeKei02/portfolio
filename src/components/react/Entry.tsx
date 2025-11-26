import { useEffect, useRef, useState } from "react";

export const Entry = () => {
  const text = "frontend developer";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [bgChanged, setBgChanged] = useState(false);
  const [finalBg, setFinalBg] = useState(false);

  const SPEED = 0.15;

  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const bounds = () => el.getBoundingClientRect();

    const spans = Array.from(
      el.querySelectorAll<HTMLElement>(".entry-gradient")
    );

    function onMove(e: MouseEvent) {
      const r = bounds();
      target.current.x = e.clientX - r.left;
      target.current.y = e.clientY - r.top;
      setHovering(true);
    }

    function onLeave() {
      target.current.x = -200;
      target.current.y = -200;
      setHovering(false);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * SPEED;
      current.current.y += (target.current.y - current.current.y) * SPEED;

      el.style.setProperty("--cx", `${current.current.x}px`);
      el.style.setProperty("--cy", `${current.current.y}px`);

      const containerRect = bounds();

      spans.forEach((s) => {
        const sr = s.getBoundingClientRect();
        const relX = current.current.x - (sr.left - containerRect.left);
        const relY = current.current.y - (sr.top - containerRect.top);
        s.style.setProperty("--mx", `${relX}px`);
        s.style.setProperty("--my", `${relY}px`);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  setTimeout(() => {
    setBgChanged(true);
  }, 2000);

  useEffect(() => {
    if (!bgChanged) return;
    const id = window.setTimeout(() => {
      // Video background removed — mark the sequence as completed so
      // the loading counter and subsequent UI can proceed.
      setVideoPlaying(true);
    }, 1000);
    return () => window.clearTimeout(id);
  }, [bgChanged]);

  const [count, setCount] = useState(1);
  useEffect(() => {
    const total = 3000;
    const step = Math.max(8, Math.round(total / 100));
    let i = 1;
    setCount(1);
    const iv = window.setInterval(() => {
      i += 1;
      if (i >= 100) {
        setCount(100);
        window.clearInterval(iv);
        return;
      }
      setCount(i);
    }, step);

    if (videoPlaying) {
      setCount(100);
      window.clearInterval(iv);
    }

    return () => window.clearInterval(iv);
  }, [videoPlaying]);

  useEffect(() => {
    const el = containerRef.current?.querySelector(
      ".loading-counter"
    ) as HTMLElement | null;
    if (!el) return;
    let pos = 0;
    const id = window.setInterval(() => {
      pos = (pos + 1) % 200;
      el.style.backgroundPosition = `${pos}% 50%`;
    }, 40);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${
        bgChanged ? "transition-y duration-1000 animated-header-bg" : "bg-black"
      } w-[100%] h-[100vh] p-4 m-auto grid justify-center items-center min-w-full relative`}
      style={{
        ["--mx" as string]: "-200px",
        ["--my" as string]: "-200px",
        ["--cx" as string]: "-200px",
        ["--cy" as string]: "-200px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 20,
          right: 24,
          zIndex: 60,
          fontSize: 48,
          fontWeight: 800,
          lineHeight: 1,
          padding: "6px 10px",
          borderRadius: 8,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(90deg,#ff0080,#ffb400,#7c3cff,#00ffd1)",
          backgroundSize: "200% 200%",
          backgroundPosition: `0% 50%`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
        className="loading-counter"
      >
        {count}%
      </div>
      <div className="absolute h-2 bg-[gray]/30 w-full bottom-0 z-[60]">
        <div
          className="h-2"
          style={{
            width: `${count}%`,
            background:
              "linear-gradient(90deg,#ff0080,#ffb400,#7c3cff,#00ffd1)",
            transition: "width 0.1s ease",
          }}
        ></div>
      </div>
      <div
        aria-hidden
        className={`pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2`}
        style={{
          left: "calc(var(--cx, 200px) + 0px)",
          top: "calc(var(--cy, 200px) + 0px)",
          width: 100,
          height: 100,
          borderRadius: "50%",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.35), inset 0 0 80px rgba(255,255,255,0.02)",
          transition: "opacity 300ms ease",
          opacity: hovering ? 1 : 0,
          background:
            "radial-gradient(circle at var(--cx) var(--cy), rgba(255,0,128,1) 0px, rgba(255,200,0,0.9) 90px, rgba(120,60,255,0.8) 200px, rgba(255,255,255,0) 280px), linear-gradient(90deg,#CE7A7A,#CE7A7A)",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "black",
          transform: bgChanged ? "translateY(-100%)" : "translateY(0%)",
          transition: "transform 1s ease",
          zIndex: 30,
          pointerEvents: "none",
        }}
      />

      <h1
        className={`tracking-[.02rem] cursor-pointer leading-[2.7rem] text-6xl text-center font-extrabold uppercase relative z-40 md:text-9xl md:leading-[.8] `}
      >
        <span
          className="entry-gradient"
          style={{
            opacity: finalBg ? 1 : 1,
            WebkitBackgroundClip: finalBg ? undefined : "text",
            backgroundClip: finalBg ? undefined : "text",
            color: finalBg ? "#111827" : "transparent",
            backgroundImage: finalBg
              ? undefined
              : "radial-gradient(circle at var(--mx) var(--my), rgba(255,0,128,1) 0px, rgba(255,200,0,0.9) 90px, rgba(120,60,255,0.8) 200px, rgba(255,255,255,0) 280px), linear-gradient(90deg,#CE7A7A,#CE7A7A)",
            transition: "filter 250ms ease",
            WebkitTextFillColor: finalBg ? undefined : "transparent",
          }}
        >
          {text.split(" ")[0]}
        </span>
        <br />
        <span
          className="tracking-[.02rem] entry-gradient"
          style={{
            WebkitBackgroundClip: finalBg ? undefined : "text",
            backgroundClip: finalBg ? undefined : "text",
            color: finalBg ? "#111827" : "transparent",
            backgroundImage: finalBg
              ? undefined
              : "radial-gradient(circle at var(--mx) var(--my), rgba(255,0,128,1) 0px, rgba(255,200,0,0.9) 90px, rgba(120,60,255,0.8) 200px, rgba(255,255,255,0) 280px), linear-gradient(90deg,#CE7A7A,#CE7A7A)",
            WebkitTextFillColor: finalBg ? undefined : "transparent",
          }}
        >
          {text.split(" ")[1]}
        </span>
      </h1>
    </div>
  );
};
