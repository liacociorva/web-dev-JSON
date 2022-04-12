let contentGridElement = document.getElementById('contentGrid');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "Name" : "Oana",
    "pictureURL" : "mami.JPG",
    "Food" : "soba",
    "Object" : "knitting book",
    "Color": "#57C9EC",
    "Location" : "Scandinavia"
  },
  {
    "Name" : "Daniel",
    "pictureURL" : "tati.jpg",
    "Food" : "tiramisu",
    "Object" : "chess piece",
    "Color": "#57EC6B",
    "Location" : "Yosemite"
  },
  {
    "Name" : "Lia",
    "pictureURL" : "lia.jpg",
    "Food" : "sushi",
    "Object" : "paintbrush",
    "Color": "#C233C7",
    "Location" : "Romania"
  },
  {
    "Name" : "Victor",
    "pictureURL" : "victor.JPEG",
    "Food" : "pomegranate",
    "Object" : "Rubik's cube",
     "Color": "#7662FC",
     "Location" : "Japan"
  },
  {
    "Name" : "Edgar",
    "pictureURL" : "edgar.jpg",
    "Food" : "tuna",
    "Object" : "ball of yarn",
    "Color": "#C75F33",
    "Location" : "Lia's closet"
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');
  newContentElement.style.borderColor = incomingJSON['Color'];


  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.style.color = incomingJSON['Color'];
  newContentHeading.innerText = incomingJSON['Name'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['pictureURL'];
  newImage.style.borderColor = incomingJSON['Color'];
  newContentElement.appendChild(newImage);

  let newFoodSubhead = document.createElement("H4");
  newFoodSubhead.innerText = "My favorite food is  " + incomingJSON['Food'] + ".";
  newContentElement.appendChild(newFoodSubhead);

  let newObjectSubhead = document.createElement("H4");
  newObjectSubhead.innerText = "If I were an object I would be a " + incomingJSON['Object'] + ".";
  newContentElement.appendChild(newObjectSubhead);

  let newLocationSubhead = document.createElement("H4");
  newLocationSubhead.innerText = "My favorite place to visit is " + incomingJSON['Location'] + ".";
  newContentElement.appendChild(newLocationSubhead);

  contentGridElement.appendChild(newContentElement);
}
