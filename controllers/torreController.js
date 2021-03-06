const axios = require("axios");

module.exports = {
  verifyUsername: async (req, res) => {
    try {
      const param = req.query.username;

      // Make a request for a user with a given ID
      const user = await axios.get(`https://bio.torre.co/api/bios/${param}`);

      res.json(user.data);
    } catch (err) {
      console.error(err);
      res.json({ success: false, result: "Username does not exist in Torre" });
    }
  },

  // getSuggestedJobs: async (req, res) => {
  //   try {
  //     const search = {
  //       ...req.body
  //     }

  //     if(skills) {

  //     }
  //   } catch {

  //   }
  // }
};
