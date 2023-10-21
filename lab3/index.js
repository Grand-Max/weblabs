

const btn  = document.getElementById("load");
const info  = document.getElementById("info");

btn.addEventListener("click", (event) => { 

    fetch('https://randomuser.me/api?results=5')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        loadProfiles(data)
  
      });
  
});



function loadProfiles(data){
   for (const profile of data.results) {
      addProfile(profile);
   }
}

function addProfile(profile){
    // Create a new div element
    var profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    // Create an image element
    var profileImg = document.createElement("img");
    profileImg.src = profile.picture.large;
    profileImg.alt = "profile pic";

    // Create paragraphs and set their content
    var nameParagraph = document.createElement("p");
    nameParagraph.textContent = "Name:";
    var nameValue = document.createElement("p");
    nameValue.classList.add("name");
    let name = profile.name;
    nameValue.textContent = name.title +' '+ name.first +' '+ name.last;

    var cityParagraph = document.createElement("p");
    cityParagraph.textContent = "City:";
    var cityValue = document.createElement("p");
    cityValue.classList.add("city");
    cityValue.textContent = profile.location.city;

    var countryParagraph = document.createElement("p");
    countryParagraph.textContent = "Country:";
    var countryValue = document.createElement("p");
    countryValue.classList.add("country");
    countryValue.textContent = profile.location.country;

    var postcodeParagraph = document.createElement("p");
    postcodeParagraph.textContent = "Postcode:";
    var postcodeValue = document.createElement("p");
    postcodeValue.classList.add("postcode");
    postcodeValue.textContent = profile.location.postcode;

    // Append elements to the profileDiv
    profileDiv.appendChild(profileImg);
    profileDiv.appendChild(nameParagraph);
    profileDiv.appendChild(nameValue);
    profileDiv.appendChild(cityParagraph);
    profileDiv.appendChild(cityValue);
    profileDiv.appendChild(countryParagraph);
    profileDiv.appendChild(countryValue);
    profileDiv.appendChild(postcodeParagraph);
    profileDiv.appendChild(postcodeValue);

    // Append the profileDiv to the body of the document
    info.appendChild(profileDiv);
}