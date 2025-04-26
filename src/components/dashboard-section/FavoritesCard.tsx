"use client";
import React from "react";

const FavoriteCard = ({ exercise, onRemove }) => {
  return (
    <div className="bg-[#252525] border-[#333333] p-4 rounded-xl shadow h-40 flex items-center justify-center text-gray-400 hover:shadow-lg transition duration-300 relative">
      {/* <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 relative group">  */}
      {/* Image (Optional) */}
      {exercise.image && (
        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-32 object-cover rounded-md mb-4"
        />
      )}

      {/* Exercise Name */}
      <h3 className="text-lg font-semibold">{exercise.name}</h3>

      {/* Body Part (Optional) */}
      {exercise.bodyPart && (
        <p className="text-sm text-gray-500 capitalize mt-1">
          {exercise.bodyPart}
        </p>
      )}

      {/* Remove Button */}
      <button
        onClick={() => onRemove(exercise.id)}
        className="absolute top-2 right-2 text-gray-400 "
      >
        ❌
      </button>
    </div>
  );
};

export default FavoriteCard;
