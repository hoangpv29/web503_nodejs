import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const currentProduct = products.find((item) => item.id == req.params.id);
  res.status(200).json({
    message: "Product found",
    data: currentProduct,
  });
});
app.post("/api/products", (req, res) => {
  products.push(req.body);
  res.status(201).json({
    message: "Product created",
    data: products,
  });
});
app.delete("/api/products/:id", (req, res) => {
  const newProducts = products.filter((item) => item.id != req.params.id);
  res.status(201).json({
    message: "Product deleted",
    data: newProducts,
  });
});
app.put("/api/products/:id", (req, res) => {
  const newProducts = products.map((item) =>
    item.id == req.params.id ? req.body : item
  );
  res.status(200).json({
    message: "Product updated",
    data: newProducts,
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
