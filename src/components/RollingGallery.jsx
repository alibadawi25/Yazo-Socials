import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import "./RollingGallery.css";

const IMGS = [
  "https://i.postimg.cc/N0v2GFJv/Polka-dot-Pants.jpg",
  "https://i.postimg.cc/RV8n8XwF/Pearllita-Top.webp",
  "https://i.postimg.cc/Fs1LD2d8/Bronze-Electric-Baby-Top.webp",
  "https://i.postimg.cc/nLKjXxgj/The-Satin-Glazed-Pants.webp",
  "https://i.postimg.cc/T3DWXgcc/Starlit-Top.webp",
  "https://i.postimg.cc/GtxDDq2p/The-Polka-Bundle.webp",
  "https://i.postimg.cc/gkG8pFSL/Black-Velvet-Dot-Set.webp",
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 768
  );
  const [isScreenSizeXs, setIsScreenSizeXs] = useState(
    window.innerWidth <= 480
  );

  const getItemWidth = () => {
    if (isScreenSizeXs) return 180; // 150px image + 30px padding
    if (isScreenSizeSm) return 210; // 180px image + 30px padding
    return 240; // 200px image + 40px padding
  };

  const itemWidth = getItemWidth();
  const totalWidth = itemWidth * images.length;
  const dragFactor = isScreenSizeSm ? 0.5 : 0.3;

  const x = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    x.set(x.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const springConfig = {
      type: "spring",
      stiffness: isScreenSizeSm ? 80 : 60,
      damping: isScreenSizeSm ? 25 : 20,
      mass: 0.1,
      ease: "easeOut",
    };

    // Snap to nearest item
    const velocity = info.velocity.x * dragFactor;
    const currentX = x.get();
    const itemIndex = Math.round(-currentX / itemWidth);
    const targetX = -itemIndex * itemWidth;

    controls.start({
      x: targetX,
      transition: springConfig,
    });
    x.set(targetX);
  };

  const transform = useTransform(x, (value) => {
    // Create infinite loop effect
    const loopedValue = ((value % totalWidth) + totalWidth) % totalWidth;
    return `translateX(${loopedValue}px)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        const currentX = x.get();
        const nextX = currentX - itemWidth;
        
        controls.start({
          x: nextX,
          transition: { duration: 2, ease: "linear" },
        });
        x.set(nextX);
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, x, controls, itemWidth]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 768);
      setIsScreenSizeXs(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentX = x.get();
      const nextX = currentX - itemWidth;
      
      controls.start({
        x: nextX,
        transition: { duration: 2, ease: "linear" },
      });
      x.set(nextX);

      autoplayRef.current = setInterval(() => {
        const currentX = x.get();
        const nextX = currentX - itemWidth;
        
        controls.start({
          x: nextX,
          transition: { duration: 2, ease: "linear" },
        });
        x.set(nextX);
      }, 2000);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          dragMomentum={false}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            x: x,
            width: totalWidth * 2, // Double width for seamless loop
            display: "flex",
            transformStyle: "flat",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.8,
          }}
        >
          {/* Render images twice for seamless infinite scroll */}
          {[...images, ...images].map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${itemWidth}px`,
                minWidth: `${itemWidth}px`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
