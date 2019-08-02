var { pets } = require('./utils/pets.js');

module.exports.function = function findPets(name, species) {
  var pet = null;
  var petsArray = [];
  // find pets by name if provided
  if(name){
    pets.forEach(o=>{
      if(name.toLowerCase() == o.name.toLowerCase()){
        petsArray.push(o);
      }
    })
    if(petsArray.length > 0){
      return petsArray;
    }
  }
  // find pets based on the species enum if provided
  if(species){
    pets.forEach(o=>{
      if(species.toLowerCase() == o.species.toLowerCase()){
        petsArray.push(o);
      }
    })
  }
  if(petsArray.length > 0){
    return petsArray;
  }

  // returns all the pets if neither name or species return anything
  return pets;
};
