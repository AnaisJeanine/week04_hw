var blackPanther = {
  title: "Black Panther",
  director: "Ryan Coogler",
  actors: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
  releaseYear: 2018,
  duration: 215,
}

console.log(blackPanther.title);
console.log(blackPanther.director);
console.log(blackPanther.releaseYear);
console.log(blackPanther.duration + 25);

console.log('movies-and-jurassic-park.js is connected! woohoo!');


// --------- Part 1 --------------

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};


// Do the tasks down here!

// Q1
var guestOfHonor = snakewaterMontana.paleontologist;

// Q2
var cleverGirl = snakewaterMontana.specimen;


// ---------- Part 2 ------------

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!

// Q1
var nicaraguanSpecimens = nicaragua.specimens;

// Q2
var favoriteSpecimen = nicaragua.specimens[2];

// Q3


nicaragua.annual_budget = 25000 + nicaragua.annual_budget;

nicaragua.annual_budget += 25000;

// ------- Part 3 ---------

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
};

// Do the tasks down here!

// Q1
var mineDepth = hammondsMines.mexico.depth;

//  Q2
var mineBudget = hammondsMines.buenos_aires.annual_budget;
console.log(hammondsMines.buenos_aires.annual_budget);


// Q3

console.log(hammondsMines.buenos_aires.specimens);



// Q4
var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },

  nicaragua: {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
    ],
  };
};


var hammondsMines.nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
    ],
  };

// Q5

var buenos_airesBudget = hammondsMines.buenos_aires.annual_budget;

var mexicoBudget = hammondsMines.mexico.annual_budget;

var nicaraguaBudget = hammondsMines.nicaragua.annual_budget;

// Q6 

var allBudgets = hammondsMines.nicaragua.annual_budget + hammondsMines.buenos_aires.annual_budget + hammondsMines.mexico.annual_budget;

// Q7

console.log(hammondsMines.mexico.specimens[1]);






