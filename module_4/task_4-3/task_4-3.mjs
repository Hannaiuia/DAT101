"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
]; 

//--- Part 1 ----------------------------------------------------------------------------------------------

const height = document.getElementById("txtRectHeight"); 
const width = document.getElementById("txtRectWidth"); 
const button = document.getElementById("cmbTask1Calculate"); 
const result = document.getElementById("txtTask1Output"); 

button.addEventListener("click", function() {
  const widthInput = parseFloat(width.value); 
  const heightInput = parseFloat(height.value); 

  if (widthInput <= 0 || heightInput <= 0) {
    result.textContent = "Please enter positive values for both height and width.";
    return; 
  }

  const area = heightInput * widthInput; 
  
  const perimeter = 2*(heightInput + widthInput); 

  result.textContent = "Circumference = " + perimeter + ", Area = " + area; 
})

//--- Part 2 ----------------------------------------------------------------------------------------------

const txtTask2Word = document.getElementById("txtTask2Word");
const output = document.getElementById("txtTask2Output"); 

const words = []; 

function txtTask2WordKeyPress(event) {
  if (event.key == "Enter"){ 
    const word = txtTask2Word.value; 

    if (word) { 
      words.push(word); 
      output.textContent = "Number of words: " + words.length + " " +  words.join(" , ");
    }
  }
};

document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------

const checkAnswer = document.getElementById("cmbTask3CheckAnswer");
const output3 = document.getElementById("txtTask3Output");

checkAnswer.addEventListener("click", function(){
  
  const checkboxes = document.getElementsByName("chkTask3");
  const selectedBoxes = [];

  for(let i = 0; i < checkboxes.length; i++ ){
    if (checkboxes[i].checked){
      selectedBoxes.push(checkboxes[i].value); 
    }
  }

  if (selectedBoxes.length > 0){
    output3.textContent = "Selected Boxes: " + selectedBoxes. join(" , "); 
  }
}); 

//--- Part 4 ----------------------------------------------------------------------------------------------

const divCars = document.getElementById("divTask4Cars ");
const output4 = document.getElementById("txtTask4Output");

for (let i = 0; i < CarTypes.length; i++){
  
  const radioButton = document.createElement("input");
  radioButton.type = "radio"; 
  radioButton.name = "carBrand";  
  radioButton.value = CarTypes[i].value;

  const label = document.createElement("label");
  label.textContent = CarTypes[i].caption;  
  
  divTask4Cars.appendChild(radioButton);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br")); 
}

divTask4Cars.addEventListener("change", function(event) {
  if (event.target.name === "carBrand" && event.target.checked) {
    txtTask4Output.textContent = "You selected: " + event.target.nextSibling.textContent;
  }
});

//--- Part 5 ----------------------------------------------------------------------------------------------

const selectElement = document.getElementById("selectTask5Animals"); 
const output5 = document.getElementById("txtTask5Output");

selectElement.addEventListener ("change", function(){
  const selectedAnimal = selectElement.options[selectElement.selectedIndex].text;

  output5.textContent = "You selected: " + selectedAnimal;
});

//--- Part 6 ----------------------------------------------------------------------------------------------

const selectGirls = document.getElementById("selectTask6Girls"); 
const output6 = document.getElementById("txtTask6Output"); 

  GirlsNames.forEach(function(name) {
    const option = document.createElement("option");  
    option.value = name;  
    option.textContent = name;  
    selectGirls.appendChild(option);
  });

  selectGirls.addEventListener("change", function() {
    const selectedName = selectGirls.value;  
    output6.textContent = "You selected: " + selectedName;  

  });

//--- Part 7 ----------------------------------------------------------------------------------------------

const movieTitle = document.getElementById("txtMovieTitle"); 
const selectMovieGenre = document.getElementById("selectMovieGenre"); 
const movieDirector = document.getElementById("txtMovieDirector"); 
const movieRate = document.getElementById("txtMovieRate"); 
const movieTable = document.getElementById("tblMovies");
const movieAddButton = document.getElementById("cmbAddMovie");

MovieGenre.forEach(function(Genre){
  const movieOption = document.createElement("option"); 
  movieOption.value = Genre; 
  movieOption.textContent = Genre; 
  selectMovieGenre.appendChild(movieOption); 
}); 

movieAddButton.addEventListener("click", function(){
   const title = movieTitle.value;
   const genre = selectMovieGenre.value;
   const director = movieDirector.value;
   const rate = movieRate.value;

  if (title && genre && director && rate) {
    const rowCount = tblMovies.rows.length;

    const newRow = movieTable.insertRow(rowCount);
    const movieDetails = [rowCount, title, genre, director, rate];

    movieDetails.forEach(function(detail, index) {
      const cell = newRow.insertCell(index);  
      cell.textContent = detail; 
    });

    movieTitle.value = "";
    selectMovieGenre.value = "";
    movieRate.value = "5";  
    selectMovieGenre.selectedIndex = 0;  

  }
});