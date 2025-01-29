import React from "react";
import crueltyFreeBW from "../../assets/images/cruelty-free-bw.png";
import crueltyFreeColor from "../../assets/images/cruelty-free-color.png";
import veganBW from "../../assets/images/vegan-bw.png";
import veganColor from "../../assets/images/vegan-color.png";
import ifraBW from "../../assets/images/ifra-bw.png";
import ifraColor from "../../assets/images/ifra-color.png";
import premiumBW from "../../assets/images/premium-bw.png";
import premiumColor from "../../assets/images/premium-color.png";

const HoverEffectSection = () => {
  const items = [
    { bw: crueltyFreeBW, color: crueltyFreeColor, alt: "Cruelty Free" },
    { bw: veganBW, color: veganColor, alt: "100% Vegan" },
    { bw: ifraBW, color: ifraColor, alt: "IFRA Certified" },
    { bw: premiumBW, color: premiumColor, alt: "Premium Quality" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center px-4 py-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative group cursor-pointer flex items-center justify-center"
        >
          {/* Black-and-White Image */}
          <img
            src={item.bw}
            alt={item.alt}
            className="absolute transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
          />
          {/* Colored Image */}
          <img
            src={item.color}
            alt={item.alt}
            className="relative transition-all duration-500 ease-in-out transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default HoverEffectSection;
