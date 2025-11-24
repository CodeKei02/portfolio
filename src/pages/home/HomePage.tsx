import React, { useEffect, useState } from "react";
import { Entry } from "../../components/react/Entry";
import { useShowEntry } from "@/store/useShowEntry";
import Header from "../../components/react/Header";

export default function HomePage({ duration = 1000 }: { duration?: number }) {
  const showEntry = useShowEntry((state) => state.showEntry);
  const setShowEntry = useShowEntry((state) => state.setShowEntry);

  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const slideDuration = 1000;
    const startId = window.setTimeout(() => {
      setIsExiting(true);
      const doneId = window.setTimeout(() => {
        setShowEntry(false);
      }, slideDuration);
      const cleanup = () => clearTimeout(doneId);
    }, duration);

    return () => {
      window.clearTimeout(startId);
    };
  }, [duration]);

  return (
    <>
      {showEntry ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            inset: 0,
            zIndex: 20,
            background: "black",
            transition: "transform 1000ms ease",
            transform: isExiting ? "translateY(-100%)" : "translateY(0%)",
          }}
        >
          <Entry />
        </div>
      ) : (
        <Header />
      )}
    </>
  );
}
