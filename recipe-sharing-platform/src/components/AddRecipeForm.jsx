import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm({ recipes, setRecipes }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!image.trim()) newErrors.image = "Image URL is required";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "Please provide at least 2 ingredients, separated by commas";
    if (!instructions.trim() || instructions.split(".").length < 2)
      newErrors.instructions = "Please provide detailed instructions";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        image,
        summary,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: instructions
          .split(".")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      setRecipes([newRecipe, ...recipes]);

      // Reset form
      setTitle("");
      setImage("");
      setSummary("");
      setIngredients("");
      setInstructions("");
      alert("Recipe submitted successfully!");

      navigate("/"); // redirect to home page after submit
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>

        {/* Summary */}
        <div>
          <label className="block mb-1 font-semibold">Summary</label>
          <textarea
            rows="2"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">Ingredients (comma separated)</label>
          <textarea
            rows="3"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-1 font-semibold">
            Preparation Steps (separate with periods)
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
