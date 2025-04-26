"use client"; 
import React, { useState } from "react";
import FavoriteCard from "./FavoritesCard";

const Dashboard = () => {

  const [favorites, setFavorites] = useState([
    {
      id: "ex1",
      name: "Push Ups",
      bodyPart: "chest",
      image: "https://via.placeholder.com/150", // replace with real images later
    },
    {
      id: "ex2",
      name: "Squats",
      bodyPart: "legs",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "ex3",
      name: "Bicep Curls",
      bodyPart: "arms",
      image: "https://via.placeholder.com/150",
    },
  ]);
  
  return (
    <div className="min-h-screen p-6">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold mb-6">Welcome back! 👋</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#252525] border-[#333333] p-6 rounded-xl shadow">Total Workouts</div>
        <div className="bg-[#252525] border-[#333333] p-6 rounded-xl shadow">Favorite Exercises</div>
        <div className="bg-[#252525] border-[#333333] p-6 rounded-xl shadow">Top Body Part</div>
      </div>

      {/* Favorites Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Map your FavoriteCard components here */}
          {favorites.map((exercise) => (
            <FavoriteCard
              key={exercise.id}
              exercise={exercise}
              onRemove={() => {}}
            />
          ))}
            {/* No Favorites Yet */}
          {/* </div> */}
        </div>
      </div>

      {/* Workout History Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Workout History</h2>
        <div className="flex flex-col gap-4">
          {/* Map your HistoryCard components here */}
          <div className="bg-[#252525] border-[#333333] p-4 rounded-xl shadow flex items-center justify-between text-gray-400">
            No Workout History Yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
