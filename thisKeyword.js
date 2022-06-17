//// The keyword 'this' is a pointer -> it refers to an object

// const user = {
//   name: "Max",
//   videos: ["html", "css", "js", "react"],
//   greet() {
//     console.log(`Hello there ${this.name}`);

//     //add function
//     const getVideos = () => {
//       console.log(`You have ${this.videos.length} videos`);
//     };
//     getVideos();
//   },
// };
// const admin = {
//   name: "Admin",
// };

// user.greet();
//<!-------------------------------------------------------!>
//// You can use the 'this' keyword with DOM as well
// const lists = document.querySelectorAll("li");

// lists.forEach((li) => {
//   li.addEventListener("click", function () {
//     console.log(this.innerText);
//   });
// });

//// Bind , Call, Apply Keywords
//// Functions are just objects, special objects, but objects

const person = {
  firstName: "Max",
  lastname: "Salazar",

  getName() {
    console.log(this.firstName);
  },
};

function registerUser(country, language) {
  // Additional functionality
  this.getName();

  console.log(
    `Hello ${this.firstName} My country is ${country} and my language is ${language}`
  );
}

//// 'Bind' method binds the 'this' keyword to a function.
//// meaning the 'this' for that function will whatever object we bind to it
//// you have to save it to a new variable and then call the new variable when needed

// const register = registerUser.bind(person);
// register("USA", "English");

//// When you use 'Call' you're not saving to a new variable but calling the function
//// at the same time binding the 'this' keyword. you can pass in extra args by using comma

// registerUser.call(person, "USA", "Spanish");

//// Apply method is similar to Call but takes in an array with the extra arguments
registerUser.apply(person, ["US", "French"]);
