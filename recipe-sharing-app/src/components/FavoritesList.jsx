import { useRecipeStore } from "./recipeStore";
import { useMemo } from "react";

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favorites = useMemo(() => {
    return favoritesIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  }, [favoritesIds, recipes]);

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
