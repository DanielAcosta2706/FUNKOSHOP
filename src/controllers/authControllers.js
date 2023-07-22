const authControllers = {
  loginView: (req, res) => res.send("Route for loginView"),
  loginUser: (req, res) => res.send("Route for loginUser"),
  registerView: (req, res) => res.send("Route to registerView"),
  registerUser: (req, res) => res.send("Route to registerUser"),
  logoutUser: (req, res) => res.send("Route to logoutUser"),
};

module.exports = authControllers;
