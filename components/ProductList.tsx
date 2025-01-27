"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [editingProduct, setEditingProduct] = useState<any>(null); // Product being edited
  const [imageUrls, setImageUrls] = useState<any>([]); // Temporary image storage for editing
  const { data: session }:any = useSession();
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
    //   if (!session?.user?._id) {
    //     setError("User not authenticated. Please log in.");
    //     setIsLoading(false);
    //     return;
    //   }

    //   try {
        const response = await axios.get(`/api/products?userId=${session.user._id}`);
        setProducts(response.data);
        setIsLoading(false);
    //   } catch (err) {
    //     setError("Failed to fetch products. Please try again later.");
    //     setIsLoading(false);
    //   }
    };

    fetchProducts();
  }, [session]);

  const handleEdit = (product:any) => {
    setEditingProduct({ ...product });
    setImageUrls(product.images);
  };

  const handleDelete = async (productId:any) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`/api/product/${productId}`);
        setProducts((prevProducts: any[]) =>
          prevProducts.filter((product:any) => product._id !== productId)
        );
      } catch (err) {
        alert("Failed to delete the product. Please try again later.");
      }
    }
  };

  const handleEditChange = (e:any) => {
    const { name, value } = e.target;
    setEditingProduct((prev:any) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e:any) => {
    const files :any= Array.from(e.target.files);
    const updatedImages :any= [];

    files.forEach((file:any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatedImages.push(reader.result);
        if (updatedImages.length === files.length) {
          setImageUrls((prevUrls: any) => [...prevUrls, ...updatedImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (urlToRemove:any) => {
    setImageUrls((prevUrls:any) => prevUrls.filter((url:any) => url !== urlToRemove));
  };

  const handleSaveEdit = async () => {
    try {
      const updatedProduct:any = { ...editingProduct, images: imageUrls };
      await axios.put(`/api/product/${editingProduct._id}`, updatedProduct);
      setProducts((prevProducts:any) =>
        prevProducts.map((product:any) =>
          product._id === editingProduct._id ? updatedProduct : product
        )
      );
      setEditingProduct(null); // Close edit form
      setImageUrls([]);
    } catch (err) {
      alert("Failed to update the product. Please try again later.");
    }
  };

  if (isLoading) {
    return <p className="text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Product List 


      <button
                onClick={() => router.push('/dashboard/add-product')}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Add Product
              </button>
      </h1>
      {products.length > 0 ? (
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product:any) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={product.images[0] || "https://via.placeholder.com/100"}
                    alt={product.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.prices.toFixed(2)}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editingProduct.name}
                  onChange={handleEditChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  name="prices"
                  value={editingProduct.prices}
                  onChange={handleEditChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={editingProduct.quantity}
                  onChange={handleEditChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="w-full border rounded px-3 py-2"
                />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {imageUrls.map((url:any, index:any) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Uploaded ${index}`}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <button
                        onClick={() => handleRemoveImage(url)}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
