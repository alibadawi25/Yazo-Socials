import React from "react";
import { useState } from "react";
import TextPressure from "./components/TextPressure";
import BlurText from "./components/BlurText";
import CircularGallery from "./components/CircularGallery";
import InstaButton from "./components/InstagramButton";
import TiktokButton from "./components/TiktokButton";
import "./App.css";

function App() {
  const [isWide, setIsWide] = useState(window.innerWidth > 768);

  // Update isWide on window resize
  React.useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <TextPressure
        text="Yazo"
        className="text-pressure"
        weight={isWide ? true : false}
      />
      <BlurText text="Follow Us On" className="blur-text"></BlurText>
      <div className="social-buttons">
        <InstaButton
          onClick={() =>
            window.open("https://www.instagram.com/yazo.eg", "_blank")
          }
        />
        <TiktokButton
          onClick={() =>
            window.open("https://www.tiktok.com/@yazo.eg", "_blank")
          }
        />
      </div>

      <div className="circular-gallery-container">
        <CircularGallery
          borderRadius={0.1}
          // bend is 0 if screen is narrow and 1 if wide
          bend={isWide ? 2 : 0}
          textColor="#7f1517"
          items={[
            {
              image: "https://i.postimg.cc/N0v2GFJv/Polka-dot-Pants.jpg",
              text: "Polka Dot Pants",
            },
            {
              image: "https://i.postimg.cc/RV8n8XwF/Pearllita-Top.webp",
              text: "Pearllita Top",
            },
            {
              image:
                "https://i.postimg.cc/Fs1LD2d8/Bronze-Electric-Baby-Top.webp",
              text: "Bronze Electric Baby Top",
            },
            {
              image:
                "https://i.postimg.cc/nLKjXxgj/The-Satin-Glazed-Pants.webp",
              text: "The Satin Glazed Pants",
            },
            {
              image: "https://i.postimg.cc/T3DWXgcc/Starlit-Top.webp",
              text: "Starlit Top",
            },
            {
              image: "https://i.postimg.cc/GtxDDq2p/The-Polka-Bundle.webp",
              text: "The Polka Bundle",
            },
            {
              image: "https://i.postimg.cc/gkG8pFSL/Black-Velvet-Dot-Set.webp",
              text: "Black Velvet Dot Set",
            },
          ]}
          className="circular-gallery"
        />
      </div>
      <div className="shop-now-container">
        <BlurText
          text="You can shop at"
          className="shop-now"
          delay={100}
          threshold={0.3}
        />
        <a
          href="https://yazo-official.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="yazo-link"
        >
          <BlurText
            text="Yazo"
            className="shop-now yazo-text"
            delay={150}
            threshold={0.3}
          />
        </a>
        <BlurText
          text="now!"
          className="shop-now"
          delay={200}
          threshold={0.3}
        />
      </div>
    </div>
  );
}

export default App;
