import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../components/layout/Footer";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]); // Default to first size
  const [currentImage, setCurrentImage] = useState(product?.images[0]); // First image by default

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Product not found
      </div>
    );
  }

  const toggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);
  const toggleInfo = () => setIsAdditionalInfoOpen(!isAdditionalInfoOpen);

  const handleAddToCart = () => {
    const isBigSize = product.sizes[1] && selectedSize === product.sizes[1];

    addToCart({
      ...product,
      price: isBigSize ? product.bigPrice : product.price,
      discountedPrice: isBigSize
        ? product.bigDiscountedPrice
        : product.discountedPrice,
      selectedSize,
    });
  };

  const handleAddToWishlist = () => {
    const isBigSize = product.sizes[1] && selectedSize === product.sizes[1];

    addToWishlist({
      ...product,
      price: isBigSize ? product.bigPrice : product.price,
      discountedPrice: isBigSize
        ? product.bigDiscountedPrice
        : product.discountedPrice,
      selectedSize,
    });
  };

  return (
    <>
      <div className="relative max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-12 items-start">
          {/* 🖼️ Product Image with Thumbnails Below */}
          <div>
            <div className="relative">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* 🔄 Image Selection */}
            <div className="flex gap-2 mt-4 justify-center">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                    currentImage === img ? "border-2 border-amber-700" : "opacity-60"
                  }`}
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>

          {/* 📜 Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-600 mt-2">Category: {product.category}</p>

            {/* 🔢 Sizes Selection */}
            <div className="mt-4">
              <span className="text-lg font-semibold text-gray-800">Available Sizes:</span>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-amber-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 📜 Description Toggle */}
            <div className="mt-6">
              <button onClick={toggleDescription} className="flex justify-between w-full text-lg font-semibold text-gray-800 border-b pb-2">
                Description
                {isDescriptionOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {isDescriptionOpen && <p className="mt-4 text-gray-600">{product.description}</p>}
            </div>

            {/* ℹ️ Additional Information Toggle */}
            <div className="mt-6">
              <button onClick={toggleInfo} className="flex justify-between w-full text-lg font-semibold text-gray-800 border-b pb-2">
                Additional Information
                {isAdditionalInfoOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {isAdditionalInfoOpen && (
                <div className="mt-4 text-gray-600">
                  <p><strong>Dimensions:</strong> {`${product.length}x${product.width}x${product.height} cm`}</p>
                  <p><strong>Burn Time:</strong> {product.burnTime}</p>
                  <p><strong>Top Notes:</strong> {product.fragranceNotes?.topNotes?.join(", ") || "N.A."}</p>
                  <p><strong>Mid Notes:</strong> {product.fragranceNotes?.midNotes?.join(", ") || "N.A."}</p>
                  <p><strong>Base Notes:</strong> {product.fragranceNotes?.baseNotes?.join(", ") || "N.A."}</p>
                </div>
              )}
            </div>

            {/* 🏷️ Price */}
            <div className="mt-4">
              <span className="text-3xl font-semibold text-amber-700">
                ₹{selectedSize === product.sizes[1] ? product.bigDiscountedPrice : product.discountedPrice}
              </span>
              <span className="ml-2 text-lg text-gray-400 line-through">
                ₹{selectedSize === product.sizes[1] ? product.bigPrice : product.price}
              </span>
            </div>

            {/* 🛒 Buttons */}
            <div className="flex gap-4 mt-6">
              <button onClick={handleAddToCart} className="px-6 py-3 bg-amber-700 text-white rounded-lg shadow-md hover:bg-amber-800 transition-all">
                Add to Cart
              </button>
              <button onClick={handleAddToWishlist} className="px-6 py-3 border border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 📢 Footer with Social Links */}
    </>
  );
}
