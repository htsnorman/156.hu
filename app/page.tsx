'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './globals.css';

const VideoPage = () => {
  const videoSrc = '/156v6.mp4'; // Replace with the actual video path

  return (
    <div className="h-screen flex flex-col justify-center items-center background-image">
      <div className="rounded-full overflow-hidden">
        <video className="custom-video" autoPlay loop controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
      <div className="mt-4">
        <span className="animate-ping inline-block h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
        <a href="https://alfaamore.hu" target="_blank" rel="noopener noreferrer">
          <Image
            src="/amore.png"
            width={200}
            height={200}
            alt="Author's image"
          />
        </a>
      </div>
    </div>
  );
};

export default VideoPage;