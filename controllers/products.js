const getAllProductsStatic = async (req, res) => {
  throw new Error("Testing Async Error");
  res.status(200).json({ message: "Procut testing route" });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "Product  route" });
};
module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
