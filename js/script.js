
const url = 'https://randomuser.me/api/?results=12';//storing link for random employees as a url varible//
const ul = document.getElementById('employees'); // Get the list where we will place our employees//
const search = 'search';
const submit = 'search-submit';
const card =   'card';
const gallery = document.getElementById('gallery');
const name = document.getElementById('name');
let employeeData = [];//setting employee data as an empty array//
const modalContainer = document.querySelector('modal-container');
const modalCloseBtn = document.getElementById('modal-close-btn');

document.write("<h2>Welcome to the TreeHouse Employee List</h2>");

fetch(url)//using the fetch method to get the data from the specified url//
.then(response => response.json())//starting my promise using .then to return a response from specified url//
.then(data => data.results.map(person => { //using another promise with results.map to iterate through random employees list//
  //console.log(person);
  generateImage(person);// generating the random person images//
  generateModal(person);
  employeeData.push(person);//using the push()method to iterate through the array of random employees//
  showModals();
  hideModals();
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


function generateModal(item){//creating the generateImage function//
  const employeeInfo = document.createElement("div");//creating a div element to access the modal-container//
  employeeInfo.className = "modal-container";//calling the "className" to card to be used//
  let info = `
  <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
          <img class="modal-img" src="${item.picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
          <p class="modal-text">${item.email}</p>
          <p class="modal-text cap">${item.location.city}</p>
          <hr>
          <p class="modal-text">${item.phone}</p>
          <p class="modal-text">${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.postcode}</p>
          <p class="modal-text">${item.dob.date}</p>
      </div>`

employeeInfo.innerHTML = info;//accessing the employee info from the html//
gallery.append(employeeInfo);//appending the gallery info from the "innerHTML"//
employeeInfo.style.display = "none";//setting the overlay to none when the page is first accesssed//

}

function showModals() {
  $('.card').each(function() {
    $(this).click(function() {
      $(this).next().show();
    })
  })
}

function hideModals() {
  $('.modal-close-btn').click(function() {
    $('.modal-container').hide();
  })
}



  // gallery.addEventListener("click", (e) =>{//adding an event listener to the gallery with a event.target to only access nescessary fields//
  //
  // console.log(e.target.className)
  // let elementClass = e.target.className;
  //
  // let employeeCard = e.target.textContent('div.card');
  // if (elementClass.includes('card')) {
  //   employeeCard.nextSibling.style.display = 'block';
  // } else if (elementClass = 'modal-close-button') {
  //   e.target.parentElement.parentElement.style.display = 'none';

  // function windowOnClick(event) {
  //            if (e.target.closest("div .card")) {
  //                toggleModal();
  //            }
  //        }
  //
  // function toggleModal() {
  //
  //   modalCloseBtn.addEventListener("click", toggleModal);
  //   closeButton.addEventListener("click", toggleModal);
  //   window.addEventListener("click", windowOnClick);
  //
  //
  // }


  // }

  // var myValue = $( "#myDivId" ).val();
  // console.log("#myDivId");



  // if(e.target.id !== "gallery"){// using if statement so if anything else on the page is clicked no action will occur//
  //
  // var modal = document.querySelector(".modal-container");//storing modal as a varible with the document.querySelector to access it by class className//
  // var button = 'button';
  // var closeButton = document.querySelector(".modal-close-btn");
  //
  //       function toggleModal() {
  //           modal.classList.toggle("show-modal");
  //       }
  //
  //       function windowOnClick(event) {
  //           if (e.target.closest("div .card")) {
  //               toggleModal();
  //           }
  //       }
  //
  // modal.addEventListener("click", toggleModal);
  // closeButton.addEventListener("click", toggleModal);
  // window.addEventListener("click", windowOnClick);
  // console.log(e.target.textContent);

  // const textContent = 'e.target.textContent';
  //    employeeData.forEach(employee => {
  //       if(string.includes(e.target.textContent)){
  //
         // }
//
// })






  //.catch(function(error) {
    // If there is any error you will catch them here
  //});

//}
