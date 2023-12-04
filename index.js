const express = require("express");
const app = express();
const mongoose = require("mongoose");

const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct
} = require("./productOperations");
app.use(express.json());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/brandCenter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection to MongoDB created");

    //create
    //console.log("Creating a new record");
    //let product = await createProduct("IDEAS", 15000, ["X-small", "small" , "medium", "large"]);
    //console.log(product);

    //get all
    //let allProducts = await getAllProducts();
    //console.log(allProducts);

    //delete
    //console.log(await deleteProduct("656cc5281f2f2b0ed90ecbbd"));

    //update
    console.log("Updating Record");
    let updatedProduct = await updateProduct(
      "656cc4621f2f2b0ed90ecbbc",
      "ADDIDAS UPDATED",
      2500,
      ["medium", "large"]
    );
    console.log(updatedProduct);
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);