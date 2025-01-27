

import React, { useState, useEffect } from "react";

const fetchProducts = async () => {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const fetchTestimonialsForProduct = async (productId: string) => {
  const res = await fetch(`/api/products/${productId}/testimonials`);
  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }
  return res.json();
};

const addTestimonialForProduct = async (productId: string, testimonial: any) => {
  console.log("selectedProduct",productId);
  
  const res = await fetch(`/api/products/${productId}/testimonials`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testimonial),
  });
  if (!res.ok) {
    throw new Error("Failed to add testimonial");
  }
  return res.json();
};

const CreateTestimonialPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("Select Product");
  const [testimonials, setTestimonials] = useState([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const [form, setForm] = useState({
    name: "",
    feedback: "",
    images: previewImages,
    location: "",
  });

 
  // Fetch products on load
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      console.log("______data",data);
      
      setProducts(data);
    };
    loadProducts();
  }, []);

  // Fetch testimonials for the selected product
  useEffect(() => {
    if (selectedProduct) {
      const loadTestimonials = async () => {
        const data = await fetchTestimonialsForProduct(selectedProduct);
        setTestimonials(data.testimonials);
      };
      loadTestimonials();
    }
  }, [selectedProduct]);

  const handleImageUploada = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setForm((prev:any) => ({
        ...prev,
        images: [...prev.images, ...filesArray],
      }));
      const previews = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewImages((prev) => [...prev, ...previews]);
    }
  };
  const handleImageUpload = (e:any) => {
    const files = Array.from(e.target.files); // Get all selected files
    const updatedImages: (string | ArrayBuffer | null)[] = []; // Temporary array to hold new image previews
  
    files.forEach((file) => {
      const reader :any= new FileReader();
      reader.onloadend = () => {
        updatedImages.push(reader.result); // Push each image's Base64 preview
        // Once all images are read, update the state
        if (updatedImages.length === files.length) {
          setPreviewImages((prevUrls:any) => [...prevUrls, ...updatedImages]);
       }
      };
      reader.readAsDataURL(file); // Read the file as Data URL
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) {
      alert("Please select a product.");
      return;
    }

    // const imageUrls = form.images.map((file) => URL.createObjectURL(file)); // Convert to URLs for demo purposes

    const testimonial = {
      name: form.name,
      feedback: form.feedback,
      images: previewImages,
      
      location: form.location,
      productId:selectedProduct,
    };

    await addTestimonialForProduct(selectedProduct, testimonial);

    setForm({ name: "", feedback: "", images: [], location: "" });
    setPreviewImages([]);
    const data = await fetchTestimonialsForProduct(selectedProduct);
    setTestimonials(data.testimonials);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Create Testimonial
      </h1>

      {/* Select Product */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Product
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
     <option value="">-- Select a Product --</option>
          {products?.map((product: any) => (
            <>
                 
                      <option key={product._id} value={product._id}>
              {product.name}
            </option>
            </>
           
          ))}
        </select>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Feedback
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Share your experience"
            value={form.feedback}
            onChange={(e) => setForm({ ...form, feedback: e.target.value })}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Images
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        {/* Image Previews */}
        {previewImages.length > 0 && (
          <div className="flex space-x-4 mt-4">
            {previewImages.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded border"
                />
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Testimonial
        </button>
      </form>

      {/* Display Testimonials */}
      {selectedProduct && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">
            Testimonials for Selected Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {testimonials.map((t: any, idx) => (
              <div key={idx} className="bg-white p-4 shadow-md rounded-md">
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p>{t.feedback}</p>
                <p className="text-sm font-semibold text-gray-500">
                  {t.location}
                </p>
                <div className="flex space-x-2">
                  {t.images.map((img: string, i: number) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${t.name} image`}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateTestimonialPage;
