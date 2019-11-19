
const url = 'https://randomuser.me/api/?results=12';//storing link for random employees as a url varible//
const ul = document.getElementById('employees'); // Get the list where we will place our employees//
const search = 'search';
const submit = 'search-submit';
const card =   'card';
const gallery = document.getElementById('gallery');
const name = document.getElementById('name');
let employeeData = [];//setting employee data as an empty array//


fetch(url)//using the fetch method to get the data from the specified url//
.then(response => response.json())//starting my promise using .then to return a response from specified url//
.then(data => data.results.map(person => { //using another promise with results.map to iterate through random employees list//
  //console.log(person);
  generateImage(person);// generating the random person images//
  employeeData.push(person);//using the push()method to iterate through the array of random employees//
})
)
console.log(employeeData);

//*Helper Functions*//
function generateImage(item){//creating the generateImage function//
  const employeeCard = document.createElement("div");//creating a variable and storing it as a div//
  employeeCard.className = "card";//calling the "className" to card to be used//
  let info = `
   <div class="card-img-container">
       <img class="card-img" src="${item.picture.large}" " alt="profile picture">
   </div>
   <div class="card-info-container">
       <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
       <p class="card-text">${item.email}</p>
       <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
   </div>
`
employeeCard.innerHTML = info;//appending the gallery info from the "innerHTML"//
gallery.append(employeeCard);

}

const employeeInfo = document.createElement("div");//creating a div element to access the modal-container//
employeeInfo.className = "modal-container";//adding the class name modal-container to the employee info as a varible to grab the div from the html//
let empInfo = `
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>`
        employeeInfo.innerHTML = empInfo;//accessing the employee info from the html//
        gallery.append(employeeInfo);//appending the employee info to the DOM//
        employeeInfo.style.display = "none";//setting the overlay to none when the page is first accesssed//


  gallery.addEventListener("click", (e) =>{//adding an event listener to the gallery with a event.target to only access nescessary fields//
  if(e.target.id !== "gallery"){// using if statement so if anything else on the page is clicked no action will occur//

  var modal = document.querySelector(".modal");
  var button = 'button';
  var closeButton = document.querySelector(".modal-close-btn");

        function toggleModal() {
            modal.classList.toggle("show-modal");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }

  modal.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
  console.log(e.target.textContent);

  // const textContent = 'e.target.textContent';
  //    employeeData.forEach(employee => {
  //       if(string.includes(e.target.textContent)){
  //
         }
































})






  //.catch(function(error) {
    // If there is any error you will catch them here
  //});

//}
