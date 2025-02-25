import {
  navigateTo
} from "./router.js";

import {
  dailyMessage
} from "./motivation.js";

dailyMessage();

import {
  welcomeMessage
} from "./welcome-message.js";

welcomeMessage();

import MoodSelector from "./data-selection.js";

let moodSelector = new MoodSelector();
moodSelector.init();

let html = "";
let _selectedCatId;
let bob = "";

window.filterbyEmotions = function (value) {
  moodSelector.filterByEmotions(value);
};

window.getPostsByCategory = function (categoryId) {
  moodSelector.getPostsByCategory(categoryId);
}

window.orderBy = function (value) {
  moodSelector.orderBy(value);
};

window.orderByEnvironment = function () {
  moodSelector.orderByEnvironment();
};
window.orderByLatest = function () {
  moodSelector.orderByLatest();
};
window.orderByOldest = function () {
  moodSelector.orderByOldest();
};

window.pushPost = function () {
  moodSelector.pushPost();
};

window.showDetailView = function (id) {
  moodSelector.showDetailView(id);
};

window.generateFavPostsButton = function (postId) {
  moodSelector.generateFavPostsButton(postId);
};

window.addToFavourites = function (postId) {
  moodSelector.addToFavourites(postId);
};

window.removeFromFavourites = function (postId) {
  moodSelector.removeFromFavourites(postId);
};

window.isFavPosts = function (postId) {
  moodSelector.isFavPosts(postId);
};

//------------ Olga -----------
//picking category based on the face selected by user &
//change of text & background color :  based on the selected mood
//picking tag based on tag in a drop-down selection

window.clearHtml = function () {
  let oldContent = document.querySelector("#activities-container");
  oldContent.innerHTML = "";
};

function categorySelected(catId) {
  clearHtml();
  _selectedCatId = catId;
  if (catId === "2") {
    document.querySelector("#changing-text").innerHTML = "";
    html = "I'm so happy to see you being happy ❤";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--happy-yellow-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/happyhappyboi.png">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--happy-yellow-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/happy-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "6") {
    document.querySelector("#changing-text").innerHTML = "";
    html = "It's ok to feel bored or indecisive sometimes.";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--indiffrent-brown-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/Indifferentboi.png">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--indifferent-brown-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/indifferent-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "3") {
    document.querySelector("#changing-text").innerHTML = "";
    html = "It's only natural to feel down somedays 🤗";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--sad-blue-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/sadboi.png" class="blueboi">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--sad-blue-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/sad-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "5") {
    document.querySelector("#changing-text").innerHTML = "";
    html = "Everyone feels unmotivated sometimes, don't worry about it.";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--unmotivated-green-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/unmotivatedboi.png">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--unmotivated-green-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/unmotivated-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "8") {
    document.querySelector("#changing-text").innerHTML = "";
    html =
      "It's normal to feel tired sometimes, take a deep breath, now it's time to rest.";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--tired-purple-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/sleepysleepyboi.png" class="sleepyboi">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--tired-purple-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/tired-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "7") {
    document.querySelector("#changing-text").innerHTML = "";
    html =
      "Everyone feels stressed sometimes, I'm proud of you acknowledging it.";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--stressed-grey-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/stressedboi.png" class="blueboi">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--stressed-grey-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/stressed-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "4") {
    document.querySelector("#changing-text").innerHTML = "";
    html = "It's normal to get angry or frustrated sometimes 🤗";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--frustrated-red-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/angryboi.png">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--frustrated-red-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/frustrated-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
  if (catId === "9") {
    document.querySelector("#changing-text").innerHTML = "";
    html =
      "It's hard to deal with anxiety and take care of yourself, I'm happy that you are doing it.";
    document.querySelector("#changing-text").innerHTML += html;
    document.querySelector("#time-selection-wrapper").style.backgroundColor =
      "var(--anxious-purple-lower)";
    document.querySelector("#armyofBobs").innerHTML = "";
    bob = `<img src="img/anxiousboi.png" class="purpleboi">`;
    document.querySelector("#armyofBobs").innerHTML = bob;

    /*------ style for detailed view based on mood category - Vlada ----*/
    document.querySelector("#detailed-view-wrapper").style.backgroundColor =
      "var(--white)";
    document.querySelector("#detailedView").style.backgroundColor =
      "var(--anxious-purple-lower)";
    document.querySelector("#emojiIcon").innerHTML = "";
    bob = `<img src="img/shadow/anxious-shadow.png">`;
    document.querySelector("#emojiIcon").innerHTML = bob;
  }
}

function timeSelected(tagId) {
  if (tagId === "10" || tagId === "11" || tagId === "12" || tagId === "13") {
    moodSelector.getPostsByCatAndTag(_selectedCatId, tagId);
    navigateTo("#/allActivities");
  }
}

window.categorySelected = (catId) => categorySelected(catId);
window.timeSelected = (tagId) => timeSelected(tagId);

window.navigateto = function (id) {
  navigateTo(id);
};

window.filterByEnvironment = (value) => moodSelector.filterByEnvironment(value);

/*window.save_data = function () {
  if (typeof (Storage) !== "undefined") {
    let input = document.getElementById('inputName').value;
    localStorage.setItem('name', input);
    document.getElementById('inputName').value = localStorage.getItem('name');
    let storedValue = localStorage.getItem("name");
    document.querySelector("#user-name").innerHTML = storedValue;
    console.log(storedValue);
    navigateTo("#/settings");
    input = '';
    return storedValue;
  } else {
    alert("Sorry! No Web Storage support..")
  }
}*/

// Saves the input value = name, to the Local Storage - Marius

window.saveNameSettings = function () {
  let saveUser = document.querySelector("#save-name");
  let userName = document.querySelector("#username");
  let savedNames = document.querySelectorAll(".user-name");

  saveUser.addEventListener(
    "submit",
    function (event) {
      // Don't submit the form
      event.preventDefault();

      // Ignore it if the wishlist item is empty
      if (userName.value.length < 1) return;

      // Add item to wishlist
      for (const name of savedNames) {
        name.innerHTML = userName.value;
      }

      // Save the list to localStorage
      localStorage.setItem("savedName", userName.value);

      // Clear input
      userName.value = "";
    },
    false
  );

  // Check for saved wishlist items
  var saved = localStorage.getItem("savedName");

  // If there are any saved items, update our list
  for (const name of savedNames) {
    if (saved) {
      name.innerHTML = saved;
    }
  }
};

saveNameSettings();

window.saveNameHome = function () {
  let saveUser = document.querySelector("#save-name2");
  let userName = document.querySelector("#username2");
  let savedNames = document.querySelectorAll(".user-name");

  saveUser.addEventListener(
    "submit",
    function (event) {
      // Don't submit the form
      event.preventDefault();

      // Ignore it if the wishlist item is empty
      if (userName.value.length < 1) return;

      for (const name of savedNames) {
        name.innerHTML = userName.value;
      }

      // Save the list to localStorage
      localStorage.setItem("savedName", userName.value);

      // Clear input
      userName.value = "";
    },
    false
  );

  // Check for saved wishlist items
  var saved = localStorage.getItem("savedName");

  // If there are any saved items, update our list
  for (const name of savedNames) {
    if (saved) {
      name.innerHTML = saved;
    }
  }
};

saveNameHome();

window.showEditName = function () {
  let edit = document.querySelector("#edit-name");
  let form = document.querySelector("#save-name");
  window.saveButton = function () {
    form.style.display = "none";
    edit.style.display = "flex";
  }
  if (form.style.display = "none") {
    form.style.display = "block";
    edit.style.display = "none";
  } else {
    saveButton();

  }
};

window.showMenu = function () {
  let navBar = document.querySelector(".tabbar");
  if (navBar.style.display = "none") {
    navBar.style.display = "flex";
  }
}