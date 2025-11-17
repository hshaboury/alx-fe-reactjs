import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import FavoriteButton from "./FavoriteButton";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes || []);
  const recipes = useRecipeStore((state) => state.recipes || []);

  const recipesToShow = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {recipesToShow.length > 0 ? (
        recipesToShow.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "15px" }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
