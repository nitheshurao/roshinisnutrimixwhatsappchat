// "use client";
// import React, { useState } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import {
//   Box,
//   Button,
//   IconButton,
//   Typography,
//   Menu as MUIMenu,
//   MenuItem,
// } from "@mui/material";
// import CartIconNav from "./CartIconNav";

// const Navbar = () => {
//   const router = useRouter();
//   const { data: session, status } = useSession();
//   const [isOpen, setIsOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const isMenuOpen = Boolean(anchorEl);

//   const user = session?.user;

//   const handleMenuToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleAccountMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleAccountMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const navigateTo = (path) => {
//     router.push(path);
//     setIsOpen(false); // Close menu on navigation
//   };

//   return (
//     <header className="bg-slate-50 shadow-md">
//       <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand */}
//         <div>
//           <button
//             onClick={() => navigateTo("/")}
//             className="text-2xl font-bold text-gray-800 hover:text-emerald-600"
//           >
//             MyShop
//           </button>
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <button
//               onClick={() => navigateTo("/")}
//               className="text-gray-800 hover:text-emerald-600 transition-colors"
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigateTo("/shop")}
//               className="text-gray-800 hover:text-emerald-600 transition-colors"
//             >
//               Shop
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigateTo("/order")}
//               className="text-gray-800 hover:text-emerald-600 transition-colors"
//             >
//               Orders
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigateTo("/cart")}
//               className="text-gray-800 hover:text-emerald-600 transition-colors"
//             >
//               Cart
//             </button>
//           </li>
//           {user?.admin && (
//             <li>
//               <button
//                 onClick={() => navigateTo("/admin")}
//                 className="text-gray-800 hover:text-emerald-600 transition-colors"
//               >
//                 Admin Panel
//               </button>
//             </li>
//           )}
//         </ul>

//         {/* Cart Icon */}
//         <div className="hidden md:block">
//           <CartIconNav />
//         </div>

//         {/* User Account Section */}
//         <div className="hidden md:flex items-center space-x-4">
//           {status === "loading" ? (
//             <Typography>Loading...</Typography>
//           ) : session ? (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Typography sx={{ marginRight: 2 }}>
//                 Hello, {session.user?.name}
//               </Typography>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="account menu"
//                 onClick={handleAccountMenuOpen}
//               >
//                 {/* Icon or Text for Account */}
//                 Account
//               </IconButton>
//               <MUIMenu
//                 anchorEl={anchorEl}
//                 open={isMenuOpen}
//                 onClose={handleAccountMenuClose}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//               >
//                 <MenuItem onClick={() => navigateTo("/profile")}>
//                   Profile
//                 </MenuItem>
//                 <MenuItem onClick={() => navigateTo("/account-settings")}>
//                   Account Settings
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => {
//                     signOut();
//                     handleAccountMenuClose();
//                   }}
//                 >
//                   Logout
//                 </MenuItem>
//               </MUIMenu>
//             </Box>
//           ) : (
//             <Button
//               variant="outlined"
//               color="inherit"
//               onClick={() => router.push("/login")}
//             >
//               Login
//             </Button>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={handleMenuToggle}>
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-50 shadow-md">
//           <ul className="space-y-4 px-4 py-2">
//             <li>
//               <button
//                 onClick={() => navigateTo("/")}
//                 className="text-gray-800 hover:text-emerald-600 transition-colors block w-full text-left"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => navigateTo("/shop")}
//                 className="text-gray-800 hover:text-emerald-600 transition-colors block w-full text-left"
//               >
//                 Shop
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => navigateTo("/order")}
//                 className="text-gray-800 hover:text-emerald-600 transition-colors block w-full text-left"
//               >
//                 Orders
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => navigateTo("/cart")}
//                 className="text-gray-800 hover:text-emerald-600 transition-colors block w-full text-left"
//               >
//                 Cart
//               </button>
//             </li>
//             {user?.admin && (
//               <li>
//                 <button
//                   onClick={() => navigateTo("/admin")}
//                   className="text-gray-800 hover:text-emerald-600 transition-colors block w-full text-left"
//                 >
//                   Admin Panel
//                 </button>
//               </li>
//             )}
//             <li>
//               {session ? (
//                 <button
//                   onClick={signOut}
//                   className="text-gray-800 hover:text-red-600 transition-colors block w-full text-left"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={signIn}
//                   className="text-gray-800 hover:text-emerald-600 transition-colors block w-full text-left"
//                 >
//                   Login
//                 </button>
//               )}
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
