//// comments with 4 forward slashes represent an explanation of the concept

const videos = [
  "Pranking chiwita",
  "Learn Javascript",
  "HTML5 tutorial",
  "CSS for all",
  "css",
  "java",
  "programming",
  "ui/ux",
];

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2K20", rating: 4 },
];
//===================================================================================//
//// Reference types, if we create a new variable and set it equal to an existing array,
//// all changes to the new variable array will affect the original array.

// const newVideos = videos;
// console.log(videos);
// console.log(newVideos);

//// push new video to new array affects original, this is a reference type
// newVideos.push("new video!!!");
// console.log(videos);
// console.log(newVideos);

//===================================================================================//

//// map() ////
// Map creates a new array based on the first one nad you can run functions on the new array

// const newVideos = videos.map((video) => video.toUpperCase());
// newVideos.push("video 5");
// console.log(newVideos);
// console.log(videos);

//===================================================================================//

//// forEach() ////
// forEach will run a function for each item in an array
// videos.forEach((video) => console.log(`Title: ${video}`));

//===================================================================================//

//// find() ////
// find() will check each item and return the first one where a condition is met
// const searchTutorial = videos.find((video) => video.toLowerCase().includes("html"));
// console.log(searchTutorial);

//===================================================================================//

//// Filter() ////
//// Filter works a little like find() but it can return multiple values in a new array

// const shortSearch = videos.filter((video) => video.length < 10);
// console.log(shortSearch);

// const greatGames = games.filter((game) => game.rating < 9);
// console.log(greatGames);

//===================================================================================//

// Some and Every - These only return a true or false value
// Every() will check that a conditions is true or false for every item in the array
//some() will check that a condition is true for at least one item in the array

// const checkRating = games.every((game) => game.rating > 8);
// console.log(checkRating);

// const someRating = games.some((game) => game.rating > 9);
// console.log(someRating);

//===================================================================================//

//// Turnary operators are pretty much condensed if statements
// const newVideo = videos.map((video) => (video.length < 10 ? video : null));
// console.log(newVideo);

//===================================================================================//

//// sort()
//// Applying sort() to an array will modify it.
////Even if saving it to a new variable it will modify the original

//// This is actually kind of weird... /: it basically sorts arrays alphabetically
//// so far so goo but it also sorts numbers alphabetically, so to sort numbers we have
//// create a function as follows (a,b) => return a - b |or| return b - a;
//// this way you can sort numbers from smallest to largest or from largest to smallest

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

//// sort items alphabetically
// items.sort();
// console.log(items);

//// sort items in reverse alphabetical order
// items.sort((a, b) => b.localeCompare(a));
// console.log(items);

//// <!-- sort numbers below -->
//// if return is negative 'a' is sorted before 'b'
//// if return is positive 'b' is sorted before 'a'
//// if return is equal to zero then nothing changes

// ratings.sort((a, b) => a - b);
// console.log(ratings);

// this one compares it based on their rating which is a number
// games.sort((a, b) => a.rating - b.rating);

// this one compares them alphabetically based in the title which is a string
// games.sort((a, b) => a.title.localeCompare(b.title));

// console.log(games);

//===================================================================================//
//// Spread operator

//// A simple way to create copies of arrays without affecting the original array

const descRatings = [...ratings];

//// changes we make to the new variable array will not affect the original
// descRatings.sort((a, b) => b - a);
// console.log("new sorted array: " + descRatings);
// console.log("original array: " + ratings);

//// spread operator can be used to create arrays out of strings too
// const names = "Developedbymax";
// const letters = [...names];
// console.log(letters);

//// spread operator can also be used to concatenate arrays into new arrays

// const names = ["Max", "Ale", "Uzziel"];
// const otherNames = ["Angel", "Benji"];
// const allNames = [...names, ...otherNames];
// const moreNames = ["Robert", "Alicia", ...names, ...otherNames];

// console.log(names);
// console.log(otherNames);
// console.log(allNames);
// console.log(moreNames);
