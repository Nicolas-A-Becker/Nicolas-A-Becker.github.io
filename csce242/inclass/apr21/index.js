const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/recipes", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=> console.log("Connected to Mongo DB"))
    .catch(err => console.log("Couldn't connect to MongoDB.",err));

const recipeSchema = new mongoose.Schema({
    name:String,
    description:String
});

const Recipe = mongoose.model("Recipe",recipeSchema);

async function createRecipe(){
    const recipe = new Recipe({
        name:"Banana Bread",
        description:"Bananay goodness"
    });

    const result = await recipe.save();
    console.log(result);
}

createRecipe();