import './menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


function menuMaker(menuItems) {                 // Step 1
  let menu = document.createElement("div");
  menu.classList.add("menu");
  const list = document.createElement("ul")
  menu.appendChild(list);

  // console.log(menu);

  menuItems.forEach((element) => {              // Step 2
    let listItem = document.createElement("li");
    listItem.textContent = element;
    list.appendChild(listItem);
  });

  const menuButton = document.querySelector(".menu-button"); // Step 3



  // console.log(menu);

  return menu;                                      // Step 5
}

const header = document.querySelector(".header"); // Step 6
console.log(menuMaker(menuItems));
header.appendChild(menuMaker(menuItems));

const myMenu = document.querySelector("div.menu");
console.log(myMenu);
myMenu.addEventListener('click', () => {            // Step 4
  // if(myMenu.classList.contains("menu--open")) {
    // myMenu.classList.remove("menu--open");
    console.log("remove")
  // } else {
    myMenu.classList.add("menu--open");
  //   console.log("add")
  // }
});



// Dec 6 - 6:54pm. menu click is not adding menu--open to the div.