"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4ebe1]">
      <div className="relative h-[60vh] w-full md:h-screen">
        <video
          ref={videoRef}
          src="/stylist.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition-all hover:bg-white/50 hover:scale-105"
          >
            {isPlaying ? (
              <Pause size={20} className="fill-white" />
            ) : (
              <Play size={20} className="ml-1 fill-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}