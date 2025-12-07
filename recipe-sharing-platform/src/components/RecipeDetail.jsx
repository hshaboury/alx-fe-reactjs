import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === parseInt(id));
        setRecipe(selected);
      });
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-purple-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-lg p-5 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-1">
          {recipe.ingredients?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700 leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
