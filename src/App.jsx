import { useState } from "react";
import TextPressure from "./components/TextPressure";
import BlurText from "./components/BlurText";
import CircularGallery from "./components/CircularGallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BlurText text="Follow Us On" className="blur-text"></BlurText>
      <TextPressure text="Yazo" className="text-pressure" />
      <div className="circular-gallery-container">
        <CircularGallery
          borderRadius={0.1}
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
    </div>
  );
}

export default App;
