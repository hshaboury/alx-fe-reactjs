import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <FavoriteButton recipeId={recipe.id} />

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel Edit" : "Edit Recipe"}
      </button>
      <DeleteRecipeButton recipeId={recipe.id} />

      {isEditing && <EditRecipeForm recipe={recipe} />}
    </div>
  );
};

export default RecipeDetails;
