import React, { useEffect } from 'react';

import obj11 from '../../assets/OBJ-11.png';
import obj12 from '../../assets/OBJ-12.png';
import obj13 from '../../assets/OBJ-13.png';


const Teaser: React.FC = () => {
  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel') as HTMLElement;
    const sliderDom = carouselDom.querySelector('.list') as HTMLElement;
    const thumbnailBorderDom = carouselDom.querySelector('.thumbnail') as HTMLElement;

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut: ReturnType<typeof setTimeout>;
    let runNextAuto: ReturnType<typeof setTimeout>;

    const showSlider = (type: 'next' | 'prev') => {
      const sliderItemsDom = sliderDom.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        // Move the first slider item to the end
        sliderDom.appendChild(sliderItemsDom[0]);
        // Move the first thumbnail item to the end to keep them in sync
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        // Move the last slider item to the beginning
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        // Move the last thumbnail item to the beginning to keep them in sync
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      // Update active thumbnail based on the new position
      setActiveThumbnail();

      // Clear and reset transitions
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      // Reset auto next timeout
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom?.click();
      }, timeAutoNext);
    };

    const setActiveThumbnail = () => {
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
      // Remove active class from all thumbnails
      thumbnailItemsDom.forEach(item => item.classList.remove('active'));
      // Add active class to the first thumbnail item
      thumbnailItemsDom[0].classList.add('active');
    };

    nextDom?.addEventListener('click', () => showSlider('next'));
    prevDom?.addEventListener('click', () => showSlider('prev'));

    // Auto-move slider
    runNextAuto = setTimeout(() => {
      nextDom?.click();
    }, timeAutoNext);

    // Cleanup
    return () => {
      nextDom?.removeEventListener('click', () => showSlider('next'));
      prevDom?.removeEventListener('click', () => showSlider('prev'));
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className="searcher-container">
      <div className="carousel">
        <div className="list">
          {/* Main Slider Items */}
          <div className="item">
            <img src={obj11} alt="OBJ-11" />
            <div className="content">
              <div className="title">Perform</div>
              <div className="topic">Champion</div>
              <div className="des">Unmatched<br></br>Durability.</div>
            </div>
          </div>
          <div className="item">
            <img src={obj12} alt="OBJ-12" />
            <div className="content">
              <div className="title">High-Scale</div>
              <div className="topic">Warrior</div>
              <div className="des">Extreme<br></br>Reliability.</div>
            </div>
          </div>
          <div className="item">
            <img src={obj13} alt="OBJ-13" />
            <div className="content">
              <div className="title">Safe</div>
              <div className="topic">Protecter</div>
              <div className="des">Clean<br></br>Protection.</div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="thumbnail">
          <div className="item">
            <img src={obj11} alt="OBJ-11 Thumbnail" />
            <div className="content">
              <div className="title">Perform</div>
            </div>
          </div>
          <div className="item">
            <img src={obj12} alt="OBJ-12 Thumbnail" />
            <div className="content">
              <div className="title">High-Scale</div>
            </div>
          </div>
          <div className="item">
            <img src={obj13} alt="OBJ-13 Thumbnail" />
            <div className="content">
              <div className="title">Safe</div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="arrows">
          <button id="prev">Prev</button>
          <button id="next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
