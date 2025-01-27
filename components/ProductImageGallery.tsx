import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ProductImageGallery = ({ product }:any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailRef = useRef<any>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e:any) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e:any) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      nextImage(); // Swiped left
    } else if (deltaX < -50) {
      prevImage(); // Swiped right
    }
  };

  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumbnail = thumbnailRef.current.children[currentImageIndex];
      const offsetLeft = activeThumbnail?.offsetLeft;
      const offsetWidth = activeThumbnail?.offsetWidth;
      const containerWidth = thumbnailRef?.current.offsetWidth;
      const scrollPosition =
        offsetLeft - (containerWidth / 2 - offsetWidth / 2);
      thumbnailRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <div
        className="relative  mb-1  h-96"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg h-96 "
        />
        
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            onClick={prevImage}
            className="bg-white/50 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={nextImage}
            className="bg-white/50 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className="flex space-x-4 overflow-x-auto pb-4 pt-2 px-2 hide-scrollbar"
          ref={thumbnailRef}
        >
          {product.images.map((image:any, index:any) => (
            <Image
              key={index}
              src={image}
              alt={`${product.name} - Image ${index + 1}`}
              width={80}
              height={80}
              objectFit="cover"
              className={`rounded-lg cursor-pointer transition-all duration-300 ${
                currentImageIndex === index
                  ? "ring-2 ring-blue-500"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
