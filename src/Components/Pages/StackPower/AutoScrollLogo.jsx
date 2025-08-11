import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const logos = [
  { id: 1, name: "Health Care", img: "https://i.ibb.co/0yXdnNxP/image.png" },
  { id: 2, name: "Developers", img: "https://i.ibb.co/vCW2J1K6/Rectangle-4223.png" },
  { id: 3, name: "Entertainment", img: "https://i.ibb.co/5Wtp3Z18/image-2.png" },
  { id: 4, name: "Software", img: "https://i.ibb.co/vCW2J1K6/Rectangle-4223.png" },
  { id: 5, name: "Manufacturing", img: "https://i.ibb.co/5Wtp3Z18/image-2.png" },
  { id: 6, name: "Hospitality", img: "https://i.ibb.co/0yXdnNxP/image.png" },
  { id: 7, name: "Auto Motive", img: "https://i.ibb.co/5Wtp3Z18/image-2.png" },
  { id: 8, name: "Energy", img: "https://i.ibb.co/0yXdnNxP/image.png" },
];

const AutoScrollLogo = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <style>{`
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          background-color: #1f2937; /* Tailwind gray-800 */
          padding: 1rem 0;
        }
        .scroll-track {
          display: inline-flex;
          animation: scroll-left 30s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
        .logo-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          min-width: 180px;
        }
        .logo-item:hover img {
          transform: scale(1.05);
          z-index: 10;
        }
        .logo-title {
          color: white;
          font-weight: 600;
          white-space: nowrap;
        }
        .logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .custom-tooltip {
          background-color: rgba(0,0,0,0.8);
          color: white !important;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .custom-tooltip[data-show] {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="scroll-container bg-gradient-to-t from-[#22C1AD]/20 to-[#1E1E1E] ">
        <div className="scroll-track">
          {duplicatedLogos.map(({ id, name, img }, idx) => (
            <div
              key={idx}
              className="logo-item"
              data-tooltip-id={`tooltip-${id}`}
              data-tooltip-content={name}
            >
              <img
                src={img}
                alt={name}
                className="logo-img"
                loading="lazy"
              />
              <div className="logo-title">{name}</div>
              <Tooltip
                id={`tooltip-${id}`}
                place="top"
                className="custom-tooltip"
                delayShow={200}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AutoScrollLogo;
