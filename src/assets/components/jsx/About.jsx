import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const slideContainer = slider.querySelector(".slide");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    if (!slideContainer || !next || !prev) return;

    const handleNextClick = () => {
      if (isAnimating) return;
      setIsAnimating(true);

      let items = slideContainer.querySelectorAll(".item");
      if (items.length > 0) {
        slideContainer.appendChild(items[0]); // Erster Eintrag wird ans Ende gesetzt
      }

      setTimeout(() => setIsAnimating(false), 500); // Verhindert zu schnelle Klicks
    };

    const handlePrevClick = () => {
      if (isAnimating) return;
      setIsAnimating(true);

      let items = slideContainer.querySelectorAll(".item");
      if (items.length > 0) {
        slideContainer.prepend(items[items.length - 1]); // Letzter Eintrag wird an den Anfang gesetzt
      }

      setTimeout(() => setIsAnimating(false), 500);
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, [isAnimating]);

  return (
    <div ref={sliderRef} className="Coding-Slider">
      <div className="slide">
        {[
          {
            name: "Komplexität & Präzision",
            url: "https://cdn.pixabay.com/photo/2023/11/11/08/54/data-8380806_960_720.jpg",
            description:
              "Keiner ist perfekt, dass muss auch keiner sein, aber ich versuche immer mein Bestes zu geben.",
          },
          {
            name: "Gaming",
            url: "https://cdn.pixabay.com/photo/2023/01/23/00/52/gaming-pc-7737628_960_720.jpg",
            description:
              "Gaming ist eins meiner Hobbys. Ich spiele gerne Spiele wie Call of Duty, Age of Empires, etc.",
          },
          {
            name: "Coding",
            url: "https://cdn.pixabay.com/photo/2019/01/09/16/19/computer-3923644_960_720.jpg",
            description:
              "Seit 2024 habe ich angefangen zu coden. Ich habe Erfahrung in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, etc.",
          },
          {
            name: "PC-Building",
            url: "https://cdn.pixabay.com/photo/2021/11/22/14/23/computer-6816638_960_720.jpg",
            description:
              "Ich bastel liebend gerne an PCs. Ich habe schon viele PCs zusammengebaut und repariert.",
          },
          {
            name: "Web-Design",
            url: "https://cdn.pixabay.com/photo/2015/11/16/16/41/web-1045994_960_720.jpg",
            description:
              "Hier kann ich mich richtig austoben. Ich liebe es, Webseiten zu designen und zu entwickeln.",
          },
          {
            name: "Zeit für Ruhe",
            url: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg",
            description:
              "In meiner Freizeit gehe ich gerne spazieren, lese Bücher oder schaue Serien oder gehe in die Therme.",
          },
          {
            name: "Länder entdecken",
            url: "https://cdn.pixabay.com/photo/2017/11/24/21/49/bali-2975787_960_720.jpg",
            description:
              "Länder, die ich unbedingt noch sehen will: Thailand, Japan, USA, Kanada, Australien, Norwegen etc.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url('${item.url}')` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="description">{item.description}</div>
              <button className="Lese">Lese weiter</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev">
          <FaArrowLeft />
        </button>
        <button className="next">
          <FaArrowRight />
        </button>
      </div>
      <h1>Hier sind ein paar Ideen & nachgebaute Dinge</h1>
      
    <div className="cardsContainer">
      <div className="cards">
        <div className="cards-content">
            <div className="cards-front">
                <h3 className="cards-title">The forest</h3>
                <p className="cards-subtitle">Hover to find out more</p>
            </div>
            <div className="cards-back">
                <p className="cards-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente doloremque expedita eaque tempora quas est quidem, aliquam natus quaerat.</p>
            </div>
        </div>
    </div>
    <div className="cards">
        <div className="cards-content">
            <div className="cards-front">
                <h3 className="cards-title">The sea</h3>
                <p className="cards-subtitle">Hover to find out more</p>
            </div>
            <div className="cards-back">
                <p className="cards-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente doloremque expedita eaque tempora quas est quidem, aliquam natus quaerat.</p>
            </div>
        </div>
    </div>
    <div className="cards">
        <div className="cards-content">
            <div className="cards-front">
                <h3 className="cards-title">The desert</h3>
                <p className="cards-subtitle">Hover to find out more</p>
            </div>
            <div className="cards-back">
                <p className="cards-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente doloremque expedita eaque tempora quas est quidem, aliquam natus quaerat.</p>
            </div>
        </div>
    </div>
    </div>

    </div>
  );
};

export default About;
