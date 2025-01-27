"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const UserDetailsPage = () => {
  const { id } = useParams(); // Extract the `id` from the URL
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    admin: false,
    profileImage: "",
  });

  // Fetch user details
  const fetchUserDetailsPage = async () => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      setUser(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.email,
        admin: response.data.admin,
        profileImage: response.data.profileImage,
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdate = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/users/${id}`, formData);
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      admin: user.admin,
      profileImage: user.profileImage,
    });
    setIsEditing(false);
  };

  useEffect(() => {
    if (id) fetchUserDetailsPage();
  }, [id]);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e:any) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData({ ...formData, profileImage: reader.result });
                };
                reader.readAsDataURL(file);
              }}
              className="w-full border rounded px-3 py-2"
            />
            {formData.profileImage && (
              <img
                src={formData.profileImage}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mt-4"
              />
            )}
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="admin"
                checked={formData.admin}
                onChange={handleChange}
              />
              <span>Is Admin</span>
            </label>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-24 h-24 rounded-full"
            />
          </div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Admin:</strong> {user.admin ? "Yes" : "No"}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
