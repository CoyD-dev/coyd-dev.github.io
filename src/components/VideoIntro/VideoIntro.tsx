import React from 'react';
import styles from './VideoIntro.module.css';

const VideoIntro: React.FC = () => {
  const handleVideoClick = () => {
    const video = document.getElementById('customVideo') as HTMLVideoElement;
    const overlay = document.getElementById('videoOverlay');
    if (video.paused) {
      video.play();
      video.controls = true;
      if (overlay) overlay.style.display = 'none';
    } else {
      video.pause();
      video.controls = false;
      if (overlay) overlay.style.display = 'flex';
    }
  };

  const handlePlayButtonClick = () => {
    const video = document.getElementById('customVideo') as HTMLVideoElement;
    const overlay = document.getElementById('videoOverlay');
    video.play();
    video.controls = true;
    if (overlay) overlay.style.display = 'none';
  };

  return (
    <section className={`bg-gaming-dark ${styles.videoSectionPadding}`}>
      <div className="container mx-auto px-4">
        <div className={styles.videoSectionGrid}>
          {/* Left Side - Video Player */}
          <div className="relative">
            <video
              id="customVideo"
              className={`w-full rounded-lg ${styles.videoPlayer}`}
              onClick={handleVideoClick}
            >
              <source
                src="https://rankupacademy.gg/assets/RUA_Trailer_V2-a98634f6b41a79631adbe15ed50fc57154a8f8460f0b11190b652ee1f1c37871.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay */}
            <div
              id="videoOverlay"
              className={styles.videoOverlay}
              onClick={handlePlayButtonClick}
            >
              <button className={`font-gaming ${styles.videoPlayButton}`}>
                <span className={styles.videoPlayIcon}></span>
                PREVIEW
              </button>
            </div>
          </div>

          {/* Right Side - Boxed Text */}
          <div className={styles.videoTextBox}>
            <p className="text-black text-lg leading-relaxed font-medium" style={{ textTransform: "uppercase" }}>
              <span className="font-bold">Your rank is not held hostage by your teammates anymore.</span>
              <br />
              Picture this: What if Top Players could guide you step-by-step, revealing{' '}
              <span className="font-bold">EXACTLY</span> what you need to do to{' '}
              <span className="font-bold" style={{ color: "#FC4F05" }}>dominate your games</span>?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;