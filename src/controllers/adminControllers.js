const adminControllers = {
  adminView: (req, res) => res.send("Route for Admin View"),
  createView: (req, res) => {
    res.send("Route for getView Admin");
  },
  createItem: (req, res) => {
    res.send("Route for create Admin");
  },
  editView: (req, res) => {
    res.send("Route for editView Admin");
  },
  editItem: (req, res) => res.send("Route for edit Admin"),
  deleteItem: (req, res) => res.send("Route for delete Admin"),
};

module.exports = adminControllers;
