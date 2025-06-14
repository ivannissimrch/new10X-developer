"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";

export default function MemeTransform() {
  const [transformed, setTransformed] = useState(false);
  const [play] = useSound("/escanor-theme.mp3");

  useEffect(() => {
    if (transformed) {
      const timer = setTimeout(() => {
        window.location.href = "https://www.chingu.io";
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [transformed]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {!transformed ? (
          <>
            <h1 className="text-blue-500 text-3xl">Before Chingu</h1>
            <h2 className="text-blue-500 text-2xl">
              I din&apos;t know what app to build
            </h2>
            <motion.img
              key="before"
              src="/before.png"
              alt="Before Chingu"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-[300px] z-10"
            />
          </>
        ) : (
          <>
            <motion.video
              autoPlay
              loop
              muted
              playsInline
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-[500px] h-[500px] object-cover rounded-full  z-10"
            >
              <source src="/flames.mp4" type="video/mp4" />
            </motion.video>

            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 drop-shadow-lg z-10"
            >
              After completing 3 voyages
            </motion.h2>

            <motion.img
              key="after"
              src="/after.png"
              alt="After Chingu"
              initial={{ opacity: 0, scale: 0.7, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "backOut" }}
              className="relative z-10 w-[30%] "
            />
          </>
        )}
      </AnimatePresence>

      {!transformed ? (
        <button
          onClick={() => {
            setTransformed(true);
            play();
          }}
          className="z-10 mt-8 px-6 py-3 rounded-full text-lg font-bold bg-blue-500 text-black shadow-md hover:scale-105 transition"
        >
          Escape Tutorial Hell
        </button>
      ) : (
        <>
          <h3 className="text-yellow-500 text-3xl mt-6 text-center px-4">
            Escape tutorial hell, work with real teams, and on the way become a
            10x developer.
          </h3>
          <p className="text-sm mt-4 text-gray-300">
            Redirecting you to Chingu...
          </p>
        </>
      )}
    </main>
  );
}
