const Publication = require("../models/publication");

module.exports = class publicationController {
  static async showPublication(request, response) {
    try{
        const publications = await Publication.findAll({raw:true}) 
        response.render('home', {publications})
    }catch(error){
      console.log(error)
    }
  }
};
