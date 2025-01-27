"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import useCartStore from "@/store/cartStore";
import { Heart, ShoppingCart, Instagram, Loader } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  brand?: string;
  description?: string;
  images: string[];
  prices: number;
  originalPrice?: number;
  quantity: number;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onWishlistUpdate?: () => void;
}

export default function ProductCard({ product, onWishlistUpdate }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const addItem = useCartStore((state:any) => state.addItem);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (product) {
        setTimeout(() => setIsProductLoading(false), 1000);
      } else {
        setTimeout(() => setIsProductLoading(false), 1000);
      }
    };

    loadProduct();
  }, [product]);

  useEffect(() => {
    const checkWishlistStatus = async () => {
      if (session) {
        try {
          const response = await axios.get(`/api/wishlistAll`);
          setWishlistItems(response.data.items);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      }
    };

    checkWishlistStatus();
  }, [session]);

  const isInWishlist = useMemo(() => {
    return wishlistItems.some((item) => item._id === product._id);
  }, [wishlistItems, product._id]);

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    addItem(product);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      toast.success(`${product.name} has been added to your cart!`);
    }, 1500);
  };

  const toggleWishlist = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!session) {
      router.push("/login");
      return;
    }
    try {
      if (isInWishlist) {
        await axios.delete("/api/wishlist", {
          data: { productId: product._id },
        });
        setWishlistItems((prevItems) => prevItems.filter((item) => item._id !== product._id));
        toast.success("Removed from wishlist");
      } else {
        await axios.put("/api/wishlist", { productId: product._id });
        toast.success("Added to wishlist");
      }
      if (onWishlistUpdate) {
        onWishlistUpdate();
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      toast.error("Something went wrong with the wishlist");
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-bold text-gray-800">
          Product not found. Please check back later.
        </h2>
      </div>
    );
  }

  return (
    <div className="aid-card bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-gray-800 transition duration-300 cursor-pointer">
      <div className="relative">
        {product.images && product.images.length > 0 ? (
          <>
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full shadow hover:shadow-lg"
            >
              {"<"}
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full shadow hover:shadow-lg"
            >
              {">"}
            </button>
          </>
        ) : (
          <Image
            src="/placeholder-image.jpg"
            alt="Placeholder"
            width={400}
            height={400}
            className="object-cover w-full h-64"
          />
        )}
        {product.featured && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
        {product.brand && <p className="text-sm text-gray-500 mt-1">{product.brand}</p>}
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-green-600">${product.prices.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2">Quantity: {product.quantity}</p>
      </div>

      <div className="p-4 flex items-center justify-between relative">
        <button
          onClick={handleAddToCart}
          className="bg-[#af831a] hover:bg-[#ddae89] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="animate-spin w-5 h-5" />
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
        <div className="flex items-center space-x-3">
          <a
            href={`https://www.instagram.com/?url=`}
            className="ml-5 flex items-center no-underline hover:border hover:border-green-900 hover:rounded-full hover:p-1 transition-all"
            aria-label="Share on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        {showSuccessMessage && (
          <div className="absolute bottom-16 left-4 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded shadow-lg">
            Product added to cart!
          </div>
        )}
      </div>
    </div>
  );
}
