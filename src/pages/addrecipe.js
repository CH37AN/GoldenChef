import React, { useState, useEffect } from "react";
import Axios from "axios";


function Addrecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [steps, setSteps] = useState("");
  const [ingrid, setIngrid] = useState("");
  const [recipeimg, setRecipeimg] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  // const [NewSteps, setNewSteps] = useState("");
  // const [Newingrid, setNewingrid] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3304/api/get").then((response) => {
      setRecipeList(response.data);
    });
  }, []);

  const submitRecipe = () => {
    Axios.post("http://localhost:3304/api/insert", {
      recipeName: recipeName,
      steps: steps,
      ingrid: ingrid,
      recipeimg: recipeimg,
    });

    setRecipeList([
      ...recipeList,
      {
        recipeName: recipeName,
        steps: steps,
        ingrid: ingrid,
        recipeimg: recipeimg,
      },
    ]);
  };

  const deleteReview = (rname) => {
    Axios.delete(`http://localhost:3304/api/delete/${rname}`);
  };

  // const updateReview = (rname) => {
  //   Axios.put("http://localhost:3304/api/update", {
  //     RecipeName: rname,
  //     NewSteps: setNewSteps,
  //     Newingrid: setNewingrid,
  //   });
  //   // setNewReview("")
  // };

  return (
    

<div>
   
      </div>
  );
}

export default Addrecipe;
