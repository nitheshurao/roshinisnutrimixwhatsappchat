"use client"
import { useState, useEffect, SetStateAction } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'; // Or Next.js Link if using Next.js
import Link from 'next/link';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // State to store the logged-in user


  useEffect(() => {
    // Listen for authentication state changes
    const auth:any= getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser); // Set user if logged in, null if logged out
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Logout function
  const handleLogout = async () => {
    // await signOut();
    setIsOpen(false); // Close the menu after logout
  };

  return (
    <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.displayName || user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all">
              Login
            </Link>
          )}
    </div>
  );
}
