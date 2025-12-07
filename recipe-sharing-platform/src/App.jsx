import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import data from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route
          path="/add-recipe"
          element={<AddRecipeForm recipes={recipes} setRecipes={setRecipes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
