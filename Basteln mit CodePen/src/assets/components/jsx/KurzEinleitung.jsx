import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/KurzEinleitung.css";
import data from "../../data.json";

export default function KurzEinleitung() {
  const wordListRef = useRef(null);
  const edgeElementRef = useRef(null);
  const cloneListRef = useRef(null);

  useEffect(() => {
    const wordList = wordListRef.current;
    const words = Array.from(wordList.children);
    const totalWords = words.length;
    const wordHeight = 100 / totalWords;
    const edgeElement = edgeElementRef.current;
    const cloneList = cloneListRef.current;
    let currentIndex = 0;

    function updateEdgeWidth() {
      const centerIndex = (currentIndex + 1) % totalWords;
      const centerWord = words[centerIndex];
      const centerWordWidth = centerWord.getBoundingClientRect().width;
      const listWidth = wordList.getBoundingClientRect().width;
      const percentageWidth = (centerWordWidth / listWidth) * 100;
      gsap.to(edgeElement, {
        width: `${percentageWidth}%`,
        duration: 0.5,
        ease: "Expo.easeOut",
      });
    }

    function moveWords() {
      currentIndex++;
      const timeline = gsap.timeline({
        onComplete: () => {
          if (currentIndex >= totalWords) {
            gsap.set([wordList, cloneList], { yPercent: 0 });
            currentIndex = 0;
          }
        }
      });

      timeline.to(wordList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1.2,
        ease: "elastic.out(1, 0.85)",
        onStart: updateEdgeWidth
      });

      timeline.to(cloneList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1.2,
        ease: "elastic.out(1, 0.85)"
      }, 0);
    }

    gsap.set(cloneList, { yPercent: 100 });

    const loopTimeline = gsap.timeline({ repeat: -1, delay: 1 });
    loopTimeline.call(moveWords);
    loopTimeline.to({}, { duration: 2 });
  }, []);

  return (
    <div>
      <section className="cloneable">
        <div className="looping-words">
          <div className="looping-words__containers">
            <ul ref={wordListRef} className="looping-words__list">
              <li className="looping-words__item">
                <p className="looping-words__p">Kreativ</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Elegant</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Effizient</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Modern</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Innovativ</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Stilvoll</p>
              </li>
            </ul>
            <ul ref={cloneListRef} className="looping-words__list looping-words__clone">
              <li className="looping-words__item">
                <p className="looping-words__p">Kreativ</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Elegant</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Effizient</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Modern</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Innovativ</p>
              </li>
              <li className="looping-words__item">
                <p className="looping-words__p">Stilvoll</p>
              </li>
            </ul>
          </div>
          <div className="looping-words__fade"></div>
          <div ref={edgeElementRef} className="looping-words__selector">
            <div className="looping-words__edge"></div>
            <div className="looping-words__edge is--2"></div>
            <div className="looping-words__edge is--3"></div>
            <div className="looping-words__edge is--4"></div>
          </div>
        </div>
      </section>
      <section className="skill-container">
        {data.map((skill) => (
          <div key={skill.skillId} className="skill-card">
            <div className="skill-card__content">
              <img
                className="skill-image"
                src={skill.imageUrl}
                alt={skill.name}
              />
            </div>
            <h3>{skill.name}</h3>
            <p className="s-lvl">{skill.level}</p>
            <div className="skill-progress-container">
              <div 
                className="skill-progress-bar" 
                style={{ width: `${parseInt(skill.level)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}