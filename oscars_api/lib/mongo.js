const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/oscars";
const dbName = "oscars"
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(function(error){
  if(error) throw error;
  console.log("Connection to mongo successful...")
})

//grabs all categories
const getCategories = async () => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    resolve(db.collection("data").distinct("category"));

  });
}

//grabs specific category
const getCategory = async(category) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const categoryQuery = {category: category};
    
    db.collection("data").find(categoryQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });

  });
}

//gets all movies made during a specific year
const getFilmYear = async(year) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const filmYearQuery = {year_film: year};

    db.collection("data").find(filmYearQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });

  });
}

//gets all movies made during specific ceremony year
const getCeremonyYear = async(year) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const ceremonyYearQuery = {year_ceremony: year};

    db.collection("data").find(ceremonyYearQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });

  });
}

//gets all movies made during specific ceremony
const getCeremonyNumber = async(ceremonyNumber) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const ceremonyNumberQuery = {ceremony: ceremonyNumber};

    db.collection("data").find(ceremonyNumberQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });
  });
}

//gets all winners
const getResults = async() => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const resultQuery = { winner: 'True'};

    db.collection("data").find(resultQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });
  });
}

//gets specific movie results
const getFilmName = async(filmName) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const filmQuery= {film: filmName};

    db.collection("data").find(filmQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });
  });
}

//lists all unique movies
const getFilmNames = async () => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    resolve(db.collection("data").distinct("film"));
  });
}

//lists all involvement of a specific actor/actress
const getActorName = async(actorName) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    const namesQuery = {name: actorName};

    db.collection("data").find(namesQuery).toArray(function(error, result){
      if(error) reject(error);
      resolve(result);
    });
  });
}


//not done yet
//method will get years between and pull all movies in between date
//commenting out so it doesnt mess up code
/*const greaterLessThan = async(year1, year2) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName)

    db.
  })
}*/


module.exports.getFilmNames = getFilmNames;
module.exports.getActorName = getActorName;
module.exports.getFilmName = getFilmName;
module.exports.getResults = getResults;
module.exports.getCategories = getCategories;
module.exports.getCategory = getCategory;
module.exports.getFilmYear = getFilmYear;
module.exports.getCeremonyYear = getCeremonyYear;
module.exports.getCeremonyNumber = getCeremonyNumber;