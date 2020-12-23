const axios = require("axios");

module.exports = {
  verifyUsername: (req, res) => {
    console.log("[TorreController.js] req: ", req.body);
    console.log("[TorreController.js user: ", user);
    // Make a request for a user with a given ID
    axios
      .get(`https://bio.torre.co/api/bios/${user}`)
      .then(function (response) {
        res.json({ success: true, result: response });
      })
      .catch(function (error) {
        console.log(error);
        res.json({
          success: false,
          result: "Username does not exist in Torre",
        });
      });
  },
};
