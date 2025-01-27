// import React, { useState } from "react";

// const ShopNowButton = () => {


//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedQuantities, setSelectedQuantities] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userAddress, setUserAddress] = useState("");
//   const selectedDetails = selectedProducts.map((productId) => {
//     const product = products.find((p) => p.id.toString() === productId);
//     const quantity = selectedQuantities[productId];
//     return `${product.name} - Qty: ${quantity} - Total: ₹${product.price * quantity}`;
//   });
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//     phone: "",
//     isDefault: false,
//   });
//   const products = [
//     { id: 1, name: "Nutrimix - 1kg", price: 500 },
//     { id: 2, name: "Nutrimix - 500g", price: 300 },
//   ];

//   const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>,product) => {
//     const { checked, value } = e.target;
//     if (checked) {
//       setSelectedProducts([...selectedProducts, value]);
//       setSelectedQuantities((prev) => ({ ...prev, [value]: 1 }));
//     } else {
//       setSelectedProducts(selectedProducts.filter((id) => id !== value));
//       const updatedQuantities = { ...selectedQuantities };
//       delete updatedQuantities[value];
//       setSelectedQuantities(updatedQuantities);
//     }
//   };

//   const handleQuantityChange = (e, product) => {
//     const { value } = e.target;
//     setSelectedQuantities((prev) => ({
//       ...prev,
//       [product.id]: Math.max(1, parseInt(value, 10)),
//     }));
//   };

//   const openModal = () => {
   
//     setIsModalOpen(true);
//   };

//   const handleSendWhatsApp = () => {
//     if (!userAddress) {
//       alert("Please enter your address.");
//       return;
//     }

//     const phoneNumber = "+917676885491"; // Replace with your WhatsApp number
//     const productName = encodeURIComponent(selectedProducts.name);
    
//     const message = `Hello! I would like to order:\n\n*Product*: ${productName}\n*Quantity*: ${quantity}\n*Total Price*: ₹${productPrice}\n\n*Delivery Address*: ${userAddress}\n\nThank you!`;
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

//     // Redirect to WhatsApp
//     window.open(whatsappURL, "_blank");

//     // Close modal
//     setIsModalOpen(false);
//     setUserAddress("");
//   };
//   const handleChange = (e: {
//     target: { name: any; value: any; type: any; checked: any };
//   }) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };
//   return (
//     <div className="container mx-auto p-6">
//       <button
//         onClick={openModal}
//         // className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition"
//         className="bg-lightColor border-[#b89d3b] hover:bg-green-400 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
//       >
//         Shop Now
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           <div className="relative overflow-auto h-96  bg-white w-full max-w-lg p-8 rounded-3xl shadow-lg transition-all duration-500">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 bg-red-100 text-red-600 p-2 rounded-full shadow-sm hover:bg-red-200 hover:shadow-md transition"
//               onClick={() => setIsModalOpen(false)}
//               aria-label="Close"
//             >
//               ✕
//             </button>

//             {/* Header */}
//             <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//               Your Order
//             </h2>

//                 {/* Product Selection */}
//        {/* Product Selection */}
//        <div className="mb-6">
//           <p className="text-lg font-semibold text-gray-700 mb-4">
//             Select Products
//           </p>
//           <div className="space-y-4">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="p-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 flex items-center justify-between"
//               >
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="checkbox"
//                     id={`product-${product.id}`}
//                     value={product.id}
//                     onChange={(e) => handleProductChange(e, product)}
//                     className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-400"
//                   />
//                   <label
//                     htmlFor={`product-${product.id}`}
//                     className="text-gray-800 font-medium cursor-pointer"
//                   >
//                     {product.name} - ₹{product.price}
//                   </label>
//                 </div>
//                 {/* Quantity Selector */}
//                 {selectedProducts.includes(product.id.toString()) && (
//                   <div className="flex items-center space-x-2">
//                     <label
//                       htmlFor={`quantity-${product.id}`}
//                       className="text-sm text-gray-700"
//                     >
//                       Qty:
//                     </label>
//                     <input
//                       type="number"
//                       id={`quantity-${product.id}`}
//                       min="1"
//                       value={selectedQuantities[product.id] || 1}
//                       onChange={(e) => handleQuantityChange(e, product)}
//                       className="w-16 p-2 border border-gray-300 rounded-lg focus:ring-green-400"
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

           

//             {/* Address Input */}
//             <div className="mb-6">
//               <label
//                 htmlFor="address"
//                 className="block text-lg font-semibold text-gray-700 mb-2"
//               >
//                 Delivery Address
//               </label>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="street"
//                   value={formData.street}
//                   onChange={handleChange}
//                   placeholder="Street"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="City"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   placeholder="State"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="postalCode"
//                   value={formData.postalCode}
//                   onChange={handleChange}
//                   placeholder="Postal Code"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   placeholder="Country"
//                   required
//                   className="p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone"
//                   required
//                   className="p-2 border rounded"
//                 />
//               </div>
//             </div>

//             {/* WhatsApp Button */}
//             <button
//               onClick={handleSendWhatsApp}
//               className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
//             >
//               Send Order via WhatsApp
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopNowButton;

"use client"
import React, { useState } from "react";

const ShopNowButton = () => {
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [selectedQuantities, setSelectedQuantities] = useState<any>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const products = [
    { id: 1, name: "Nutrimix - 1kg", price: 500 },
    { id: 2, name: "Nutrimix - 200g", price: 300 },
  ];

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>, product: { id: any; name?: string; price?: number; }) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedProducts([...selectedProducts, product]);
      setSelectedQuantities((prev:any) => ({ ...prev, [product.id]: '' }));
    } else {
      setSelectedProducts(selectedProducts.filter((item:any) => item.id !== product.id));
      const updatedQuantities = { ...selectedQuantities };
      delete updatedQuantities[product.id];
      setSelectedQuantities(updatedQuantities);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, product: { id: any; name?: string; price?: number; }) => {
    const { value } = e.target;
    setSelectedQuantities((prev:any) => ({
      ...prev,
      [product.id]: Math.max(1, parseInt(value, 10)),
    }));
  };

  const calculateTotal = () => {
    // Ensure selectedProducts and selectedQuantities are valid
    if (!selectedProducts || !selectedQuantities) {
      return 0;
    }
  
    // Calculate the total
    return selectedProducts.reduce((total: number, product: { id: string | number; price: number; name: any; }) => {
      const quantity = selectedQuantities[product.id] || 0; // Use 0 if quantity is undefined
      const productTotal = product.price * quantity;
  
      console.log(`Product: ${product.name}, Quantity: ${quantity}, Subtotal: ₹${productTotal}`);
      
      return total + productTotal;
    }, 0);
  };
  
  const openModal = () => {
    // if (selectedProducts.length === 0) {
    //   alert("Please select at least one product before proceeding.");
    //   return;
    // }
    setIsModalOpen(true);
  };

  const handleSendWhatsApp = () => {
    const { name, email, street, city, state, postalCode, country, phone } = formData;
    if (!name || !street || !city || !state || !postalCode || !country || !phone) {
      alert("Please fill in all the address details.");
      return;
    }

    const phoneNumber = "+917899589718"; // Replace with your WhatsApp number
    const productDetails = selectedProducts
    .map(
      (product: { name: any; price: number; id: string | number; }) =>
        `*Product*: ${product.name}\n*Price*: ₹${product.price}\n*Quantity*: ${selectedQuantities[product.id] || 1}\n*Subtotal*: ₹${
          product.price * (selectedQuantities[product.id] || 1)
        }`
    );
    const totalPrices= selectedProducts.reduce((total: number, product: { id: string | number; price: number; name: any; }) => {
      const quantity = selectedQuantities[product.id] || 0; // Use 0 if quantity is undefined
      const productTotal = product.price * quantity;
  
      return total + productTotal;
    }, 0);
    const message = `Hello! I would like to place an order:\n\n${productDetails}\n\n*Total Price*: ₹${totalPrices}\n\n*Delivery Address*:\nName: ${
      formData.name
    }\nEmail: ${formData.email}\nPhone: ${formData.phone}\nStreet: ${
      formData.street
    }\nCity: ${formData.city}\nState: ${formData.state}\nPostal Code: ${
      formData.postalCode
    }\nCountry: ${
      formData.country
    }\n\nThank you! Looking forward to your confirmation.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setIsModalOpen(false);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const totalQuantity = (Object.values(selectedQuantities) as number[]).reduce(
    (a, b) => a + b,
    0
  );
  return (
    <div className="container mx-auto p-6">
      <button
        onClick={openModal}
        className="bg-yellow-500 text-white py-4 px-8 rounded-full font-bold shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-110"
      >
        Shop Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className=" relative overflow-auto h-96  bg-white w-full max-w-lg p-8 rounded-3xl shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 rounded-xl right-4 p-2 bg-red-500 hover:bg-red-900 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Your Order
            </h2>

            {/* Product Selection */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-4">Select Products</p>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 border border-gray-300 rounded-lg shadow-sm flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id={`product-${product.id}`}
                        onChange={(e) => handleProductChange(e, product)}
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-400"
                      />
                      <label htmlFor={`product-${product.id}`} className="text-gray-800 font-medium">
                        {product.name} - ₹{product.price}
                      </label>
                    </div>
                    {selectedProducts.find((item: { id: number; }) => item.id === product.id) && (
                      <div className="flex items-center space-x-2">
                        <label className="text-sm text-gray-700">Qty:</label>
                        <input
                          type="number"
                          value={selectedQuantities[product.id] || ''}
                          onChange={(e) => handleQuantityChange(e, product)}
                          className="w-16 p-2 border border-gray-300 rounded-lg focus:ring-green-400"
                          min="1"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
              <p className="text-lg font-semibold text-gray-800">Order Summary</p>
              <p className="text-gray-700 mt-2">
                <span className="font-bold">Total Items:</span> {totalQuantity}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-bold">Total Price:</span> ₹{calculateTotal()}
              </p>
            </div>

            {/* Address Form */}
            <div className="mb-6 grid grid-cols-1 gap-4">
              {[
                { name: "name ", placeholder: "Name *" },
                { name: "email", placeholder: "Email" },
                { name: "street", placeholder: "Street *" },
                { name: "city", placeholder: "City *" },
                { name: "state", placeholder: "State" },
                { name: "postalCode", placeholder: "Postal Code *" },
                { name: "country", placeholder: "Country" },
                { name: "phone", placeholder: "Phone" },
              ].map(({ name, placeholder }) => (
                <input
                  key={name}
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="p-3 border border-gray-300  rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400"
                />
              ))}
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Send Order via WhatsApp
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 mt-1 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-900 transition-transform transform hover:scale-105"
              >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopNowButton;
