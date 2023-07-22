const shopControllers = {
  shopView: (req, res) => res.send("Route for shop View"),
  detailView: (req, res) => res.send("Route for getItem View"),
  addItemToCart: (req, res) => res.send("Route to add a item to cart"),
  cartView: (req, res) => res.send("Cart View Route"),
  checkout: (req, res) =>
    res.send("Route to receive the selected products and init the buy process"),
};

module.exports = shopControllers;
