'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Artists', [
      {name: "Bartees Strange", location: "New York, NY", createdAt: new Date(), updatedAt: new Date() },
      {name: "Future Teens", location: "New York, NY", createdAt: new Date(), updatedAt: new Date() },
      {name: "Lilith", location: "New York, NY", createdAt: new Date(), updatedAt: new Date() },
      {name: "ManDancing", location: "New York, NY", createdAt: new Date(), updatedAt: new Date() },
      {name: "The Superweaks", location: "Los Angeles, CA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Pushflowers", location: "Los Angeles, CA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Cheer Up", location: "Los Angeles, CA", createdAt: new Date(), updatedAt: new Date() },
      {name: "oldsoul", location: "Los Angeles, CA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Kiki Maddog", location: "Los Angeles, CA", createdAt: new Date(), updatedAt: new Date() },
      {name: "THE AUX", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Happy Just To See You", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Gabe Goodman", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Good Looking Friends", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Photocomfort", location: "London, UK", createdAt: new Date(), updatedAt: new Date() },
      {name: "Tuft", location: "London, UK", createdAt: new Date(), updatedAt: new Date() },
      {name: "Wild Pink", location: "London, UK", createdAt: new Date(), updatedAt: new Date() },
      {name: "Provide", location: "London, UK", createdAt: new Date(), updatedAt: new Date() },
      {name: "I Wish I Could Skateboard", location: "London, UK", createdAt: new Date(), updatedAt: new Date() },
      {name: "Dan Campbell", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Bad Bad Hats", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Mint Green", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Chris Farren", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Weakened Friends", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Adult Mom", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Paige Chaplin", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Telethon", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Calicoco", location: "Boston, MA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Abi Reimold", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Allegra Anka", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Anika Pyle", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Augusta Koch", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "awakebutstillinbed", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Bartley, Clarke, Harris & Harvey", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Ben Hughes", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Ben Walsh", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Black Paw", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Brackish", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Brittany Corrigan", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Broad Cast", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Broken Field Runner", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Carly Comando", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Cave People", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Cherry", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Constant Companion", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Craig Finn", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Dan Zimmerman", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Expert Timing", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Feminine Issues", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Grace Vonderkuhn", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Greg Mendez", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Heart Harbor", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Hemming", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Hurry", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Jack MacCann", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Jeff Riddle", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Jeff Rosenstock", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Jon Loudon", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Jordyn Occhipinti", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Kayleigh Goldsworthy", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Laura Stevenson", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Lifted Bells", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Lisa Prank", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Littler", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Lowercase Roses", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Lydia Loveless", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Manhattan Side Project", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Marisa Dabice", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Matt Schimelfenig", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Maxwell Stern", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Mimi Gallagher", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Molar", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "No Thank You", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Perry Shall", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "PJ Bond", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Rachel Dispenza", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Radiator Hospital", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Roger Harvey", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Ryan Azada", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Snowhore", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "So Totally", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Soul Glo", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Strange Relations", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Swanning", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "The Menzingers", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "TJ King & the Atomic Bomb", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Worriers", location: "Philadelphia, PA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Death Cab for Cutie", location: "Seattle, WA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Charly Bliss", location: "New York, NY", createdAt: new Date(), updatedAt: new Date() },
      {name: "Jason Isbell", location: "Nashville, TN", createdAt: new Date(), updatedAt: new Date() },
      {name: "Julien Baker", location: "Nashville, TN", createdAt: new Date(), updatedAt: new Date() },
      {name: "Lucy Dacus", location: "New York, NY", createdAt: new Date(), updatedAt: new Date() },
      {name: "PUP", location: "Seattle, WA", createdAt: new Date(), updatedAt: new Date() },
      {name: "The National", location: "Seattle, WA", createdAt: new Date(), updatedAt: new Date() },
      {name: "Waxahatchee", location: "Kansas City, MO", createdAt: new Date(), updatedAt: new Date() },
      {name: "Luke Lalonde", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },  //95
      {name: "Julie Arsenault", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },  //96
      {name: "The O'Pears", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },  //97
      {name: "Nick McKinlay", location: "Toronto", createdAt: new Date(), updatedAt: new Date() }, //98
      {name: "Christo Graham", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },  //99
      {name: "Peter Dreimanis", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },  //100
      {name: "Fast Romantics", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },
      {name: "Matthew 'Doc' Dunn", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },
      {name: "Rogue Tenant + Steve Sladkowski", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },
      {name: "Ali Haberstroh + Cameron Brown", location: "Toronto", createdAt: new Date(), updatedAt: new Date() },
     ], {});

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Artists', null, {});
  }
};
