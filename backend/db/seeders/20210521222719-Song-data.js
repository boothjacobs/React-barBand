'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Songs', [
        {title: "About Today", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Lemonworld", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Mr. November", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "The Geese of Beverly Road", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "All the Wine", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "A Reasonable Man (I Don't Mind)", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Looking for Astronauts", artistId: 1, originalArtist: "The National", albumId: 1, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Run Away With Me", artistId: 2, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Emotion", artistId: 3, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Really Like You", artistId: 4, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Gimme Love", artistId: 5, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "All That", artistId: 6, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Boy Problems", artistId: 7, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Making the Most of the Night", artistId: 8, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Your Type", artistId: 9, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Let's Get Lost", artistId: 10, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "LA Hallucinations", artistId: 11, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Warm Blood", artistId: 12, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "When I Needed You", artistId: 13, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Black Heart", artistId: 14, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Didn't Just Come Here To Dance", artistId: 15, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Favorite Color", artistId: 16, originalArtist: "Carly Rae Jepsen", albumId: 2, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "State of Grace", artistId: 17, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Red", artistId: 18, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Treacherous", artistId: 4, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Knew You Were Trouble", artistId: 12, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "All Too Well", artistId: 19, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "22", artistId: 20, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Almost Do", artistId: 14, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "We Are Never Ever Getting Back Together", artistId: 16, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Stay Stay Stay", artistId: 15, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "The Last Time", artistId: 21, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Holy Ground", artistId: 22, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Sad Beautiful Tragic", artistId: 11, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "The Lucky One", artistId: 23, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Everything Has Changed", artistId: 13, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Starlight", artistId: 24, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Begin Again", artistId: 2, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "The Moment I Knew", artistId: 25, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Come Back... Be Here", artistId: 26, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Girl at Home", artistId: 27, originalArtist: "Taylor Swift", albumId: 3, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "American Hearts", artistId: 78, originalArtist: "AA Bondy", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Bamboo Bones", artistId: 22, originalArtist: "Against Me!", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Those Were The Days", artistId: 28, originalArtist: "Angel Olsen", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Earth Death", artistId: 48, originalArtist: "Baths", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Jet Ski", artistId: 56, originalArtist: "Bikini Kill", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Dark Moon", artistId: 30, originalArtist: "Bonnie Guitar", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Land Locked Blues", artistId: 57, originalArtist: "Bright Eyes", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Wolves at the Door", artistId: 39, originalArtist: "David Bazan", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Heroes", artistId: 52, originalArtist: "David Bowie", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "My Guitar", artistId: 67, originalArtist: "Dear Nora", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "A Distorted Reality Is Now a Necessity to Be Free", artistId: 44, originalArtist: "Elliott Smith", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Wet as a Cloud", artistId: 76, originalArtist: "Fred Thomas", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Prosthetic Head", artistId: 70, originalArtist: "Green Day", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Want to Learn A Love Song", artistId: 74, originalArtist: "Harry Chapin", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "24 Frames", artistId: 84, originalArtist: "Jason Isbell", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Rise Up With Fists", artistId: 34, originalArtist: "Jenny Lewis & the Watson Twins", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Imagine", artistId: 51, originalArtist: "John Lennon", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Important In Your Life", artistId: 73, originalArtist: "Jonathan Richman", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "All I Want", artistId: 61, originalArtist: "Joni Mitchell", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Disorder", artistId: 82, originalArtist: "Joy Division", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Hey, That's No Way To Say Goodbye", artistId: 41, originalArtist: "Leonard Cohen", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Passionate Kisses", artistId: 62, originalArtist: "Lucinda Williams", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "After the Gold Rush", artistId: 83, originalArtist: "Neil Young", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Love Vigilantes", artistId: 53, originalArtist: "New Order", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Something In The Way", artistId: 66, originalArtist: "Nirvana", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Back Against the Wall", artistId: 29, originalArtist: "PUP", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Revolver", artistId: 38, originalArtist: "Rage Against the Machine", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "What Kind of Monster Are You?", artistId: 71, originalArtist: "Slant 6", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I'm Only Sleeping", artistId: 68, originalArtist: "The Beatles", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "We're Gonna Rise", artistId: 49, originalArtist: "The Breeders", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Strangers", artistId: 33, originalArtist: "The Kinks", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Love, Love, Love", artistId: 31, originalArtist: "The Mountain Goats", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Unsatisfied", artistId: 42, originalArtist: "The Replacements", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "This is the Day", artistId: 63, originalArtist: "The The", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Confessions of a Futon Revolutionist", artistId: 47, originalArtist: "The Weakerthans", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Dynamite Shovel", artistId: 54, originalArtist: "The Wonder Years", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Tower Song", artistId: 60, originalArtist: "Townes Van Zandt", albumId: 4, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Valerie", artistId: 64, originalArtist: "Amy Winehouse", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Creator, Destroyer", artistId: 58, originalArtist: "Angel Olsen", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Innocent Vigilant Ordinary", artistId: 37, originalArtist: "Appleseed Cast", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Rollercoaster", artistId: 86, originalArtist: "Bleachers", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "All I Really Wanta Do", artistId: 43, originalArtist: "Bob Dylan", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "When You're Alone", artistId: 16, originalArtist: "Bruce Springsteen", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Raining in Baltimore", artistId: 59, originalArtist: "Counting Crows", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "The Ice Is Getting Thinner", artistId: 75, originalArtist: "Death Cab for Cutie", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I'm So Tired", artistId: 50, originalArtist: "Fugazi", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Wrecking Ball", artistId: 45, originalArtist: "Gillan Welch", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Feel It", artistId: 80, originalArtist: "I Heart Hiroshima", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "On A Good Day", artistId: 22, originalArtist: "Joanna Newsom", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Something", artistId: 32, originalArtist: "Julien Baker", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Constant Craving", artistId: 40, originalArtist: "KD Lang", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Old Paint", artistId: 79, originalArtist: "Linda Ronstadt", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Buzzcut Season", artistId: 77, originalArtist: "Lorde", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Metal Firecracker", artistId: 30, originalArtist: "Lucinda Williams", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Two Headed Boy", artistId: 55, originalArtist: "Neutral Milk Hotel", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Options", artistId: 72, originalArtist: "Pedro the Lion", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "By My Side", artistId: 35, originalArtist: "Porches", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Samson", artistId: 84, originalArtist: "Regina Spektor", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Do What You Have To Do", artistId: 65, originalArtist: "Sarah McLachlan", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Give Out", artistId: 31, originalArtist: "Sharon Van Etten", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "My Favorite Mistake", artistId: 36, originalArtist: "Sheryl Crow", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Untitled", artistId: 46, originalArtist: "Social Distortion", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Black Hole Sun", artistId: 52, originalArtist: "Soundgarden", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I Don't Know", artistId: 70, originalArtist: "The Beastie Boys", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Invisible Man", artistId: 68, originalArtist: "The Breeders", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Color In Your Cheeks", artistId: 69, originalArtist: "The Mountain Goats", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Pressure's On My Knob", artistId: 81, originalArtist: "Three 6 Mafia", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "The Waiting", artistId: 53, originalArtist: "Tom Petty", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Way Down In The Hole", artistId: 85, originalArtist: "Tom Waits", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Tears Are In Your Eyes", artistId: 42, originalArtist: "Yo La Tengo", albumId: 5, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Waterfalls", artistId: 86, originalArtist: "TLC", albumId: 6, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "King of Carrot Flowers Pt. 1", artistId: 86, originalArtist: "Neutral Milk Hotel", albumId: 6, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Fall On Me", artistId: 86, originalArtist: "REM", albumId: 6, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Flirted With You All My Life", artistId: 86, originalArtist: "Vic Chesnutt", albumId: 6, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Hollaback Girl", artistId: 87, originalArtist: "Gwen Stefani", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "I'm On Standby", artistId: 22, originalArtist: "Grandaddy", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Aaron and Maria", artistId: 86, originalArtist: "American Analog Set", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Wrecking Ball", artistId: 88, originalArtist: "Gillian Welch", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Crossing With Switchblades", artistId: 56, originalArtist: "Jeff Rosenstock", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Anthem Part Two", artistId: 89, originalArtist: "Blink-182", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "We Will Become Silhouettes", artistId: 60, originalArtist: "The Postal Service", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Lips of An Angel", artistId: 90, originalArtist: "Hinder", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Plea from a Cat Named Virtue", artistId: 91, originalArtist: "The Weakerthans", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "My Backwards Walk", artistId: 92, originalArtist: "Frightened Rabbit", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "You Said Something", artistId: 93, originalArtist: "PJ Harvey", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
        {title: "Reign of Love", artistId: 16, originalArtist: "Coldplay", albumId: 7, fileUrl: null, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};