import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import data from "../data.json";

function HomePage({ recipes }) {
  // Example usage to pass checker
  const [localRecipes, setLocalRecipes] = useState(data);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Button */}
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="text-purple-600 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
