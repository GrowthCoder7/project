// import React from "react";
// import crueltyFreeBW from "../../assets/images/pics/ifra/cruelty_free-bw.png";
// import crueltyFreeColor from "../../assets/images/pics/ifra/cruelty_free.png";
// import veganBW from "../../assets/images/pics/ifra/VEGAN-bw.png";
// import veganColor from "../../assets/images/pics/ifra/VEGAN.png";
// import ifraBW from "../../assets/images/pics/ifra/ifra-bw.png";
// import ifraColor from "../../assets/images/pics/ifra/ifra.png";
// import premiumBW from "../../assets/images/pics/ifra/Prem-bw.png";
// import premiumColor from "../../assets/images/pics/ifra/Prem.png";

// const Certs = () => {
//   const items = [
//     { bw: crueltyFreeBW, color: crueltyFreeColor, alt: "Cruelty Free" },
//     { bw: veganBW, color: veganColor, alt: "100% Vegan" },
//     { bw: ifraBW, color: ifraColor, alt: "IFRA Certified" },
//     { bw: premiumBW, color: premiumColor, alt: "Premium Quality" },
//   ];

//   return (
//     <>
//       <style>
//         {`
//           .cert-container {
//             position: relative;
//             cursor: pointer;
//             perspective: 1000px;
//             transform-style: preserve-3d;
//             overflow: hidden;
//             height: 200px;
//             width: 200px;
//           }
          
//           .cert-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
//             backface-visibility: hidden;
//             transform-origin: center center;
//           }
          
//           .bw-image {
//             filter: grayscale(100%);
//             transform: scale(1);
//           }
          
//           .color-image {
//             position: absolute;
//             top: 0;
//             left: 0;
//             opacity: 0;
//             transform: scale(1);
//           }
          
//           .cert-container:hover .bw-image {
//             opacity: 0;
//             filter: grayscale(0%);
//             transform: scale(1.15);
//           }
          
//           .cert-container:hover .color-image {
//             opacity: 1;
//             transform: scale(1.15);
//           }

//           .cert-container::after {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
//             opacity: 0;
//             transition: opacity 0.15s ease;
//             pointer-events: none;
//           }

//           .cert-container:hover::after {
//             opacity: 1;
//           }
//         `}
//       </style>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center px-4 py-8">
//         {items.map((item, index) => (
//           <div key={index} className="cert-container">
//             <img
//               src={item.bw}
//               alt={item.alt}
//               className="cert-image bw-image"
//             />
//             <img
//               src={item.color}
//               alt={item.alt}
//               className="cert-image color-image"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Certs;

import React, { useState, useEffect } from "react";
import crueltyFreeBW from "../../assets/images/pics/ifra/cruelty_free-bw.png";
import crueltyFreeColor from "../../assets/images/pics/ifra/cruelty_free.png";
import veganBW from "../../assets/images/pics/ifra/VEGAN-bw.png";
import veganColor from "../../assets/images/pics/ifra/VEGAN.png";
import ifraBW from "../../assets/images/pics/ifra/ifra-bw.png";
import ifraColor from "../../assets/images/pics/ifra/ifra.png";
import premiumBW from "../../assets/images/pics/ifra/Prem-bw.png";
import premiumColor from "../../assets/images/pics/ifra/Prem.png";

const Certs = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const items = [
    { bw: crueltyFreeBW, color: crueltyFreeColor, alt: "Cruelty Free" },
    { bw: veganBW, color: veganColor, alt: "100% Vegan" },
    { bw: ifraBW, color: ifraColor, alt: "IFRA Certified" },
    { bw: premiumBW, color: premiumColor, alt: "Premium Quality" },
  ];

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(src);
        image.onerror = reject;
      });
    };

    Promise.all([
      ...items.map(item => loadImage(item.bw)),
      ...items.map(item => loadImage(item.color))
    ]).then(() => {
      setImagesLoaded(true);
    }).catch(error => {
      console.error("Error preloading images:", error);
    });
  }, []);

  return (
    <>
      <style>
        {`
          .cert-grid {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;
            flex-wrap: wrap;
          }
          
          .cert-container {
            width: 200px;
            height: 200px;
            position: relative;
            cursor: pointer;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 16px 16px 0 0;
            opacity: ${imagesLoaded ? 1 : 0};
            transition: opacity 0.1s ease-in;
          }
          
          .cert-image {
            position: absolute;
            width: 180px;
            height: 180px;
            object-fit: contain;
            transition: all 0.08s ease-out;
          }
          
          .bw-image {
            opacity: 1;
            transform: scale(1);
            filter: grayscale(100%);
          }
          
          .color-image {
            opacity: 0;
            transform: scale(1.1);
          }
          
          .cert-container:hover .bw-image {
            opacity: 0;
            transform: scale(1.1);
            filter: grayscale(0%);
          }
          
          .cert-container:hover .color-image {
            opacity: 1;
            transform: scale(1);
          }

          @media (max-width: 768px) {
            .cert-grid {
              gap: 15px;
              padding: 10px;
            }
            
            .cert-container {
              width: 150px;
              height: 150px;
            }
            
            .cert-image {
              width: 130px;
              height: 130px;
            }
          }

          @media (max-width: 480px) {
            .cert-grid {
              gap: 10px;
              padding: 5px;
            }
            
            .cert-container {
              width: 150px;
              height: 150px;
            }
            
            .cert-image {
              width: 130px;
              height: 130px;
            }
          }
        `}
      </style>
      <div className="cert-grid">
        {items.map((item, index) => (
          <div key={index} className="cert-container">
            <img
              src={item.bw}
              alt={`${item.alt} (Black and White)`}
              className="cert-image bw-image"
              loading="lazy"
            />
            <img
              src={item.color}
              alt={item.alt}
              className="cert-image color-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Certs;