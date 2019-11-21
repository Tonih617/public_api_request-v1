

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
const element = 'element';
const searchInput = document.getElementById('search-input');
const searchSubmit = document.getElementById('search-submit');


document.write("<h2>THANK YOU FOR VISITING GLOBAL NET!!</h2>");//dynamically adding a message to the bottom of the page//




fetch(url)//using the fetch method to get the data from the specified url//
.then(response => response.json())//starting my promise using .then to return a response from specified url//
.then(data => data.results.map(person => { //using another promise with results.map to iterate through random employees list//
  //console.log(person);
  generateImage(person);// generating the random person images//
  generateModal(person);
  employeeData.push(person);//using the push()method to iterate through the array of random employees//
  showModals();//calling the show modals function//
  hideModals();//calling the hide modals function//
})
)
console.log(employeeData);//console.logging employee data//

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
employeeCard.innerHTML = info;//getting innerHTML info from the HTML//
gallery.append(employeeCard);//appending the info from the "innerHTML"//

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
gallery.append(employeeInfo);//appending the info from the "innerHTML"//
employeeInfo.style.display = "none";//setting the overlay to none when the page is first accesssed//

}

function showModals() {//calling the show modals function//
  $('.card').each(function() {//iterating through each card//
    $(this).click(function() {//adding a click handler to each card//
      $(this).next().show();//returning and showing the next sibling element//
    })
  })
}

function hideModals() {//calling the hide modals function//
  $('.modal-close-btn').click(function() {//adding a click handler function to the close button//
    $('.modal-container').hide();//hiding the modal container after the close button has been activated//
  })



//*Exceeds=======Search Function*//

  function generateSearchInput(item){//creating the generateSearchInput function//
    const searchContainer = document.createElement("div");//creating a div element to access the Search-container//
    searchContainer.className = "search-input";//calling the "className" to search-input to be used//
    let info =`
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form> -->  `

  employeeSearch.innerHTML = 'search-input';//accessing the employeeSearch info from the html//
  gallery.append(search);//appending the search//
  // employeeSearch.style.display = "none";
}
function showModalBtnContainer() {//creating a show modal button container function//
  $('.search').each(function() {//iterating through the employees to search//
    $(this).click(function() {//adding a click handler to the search button//
      $(this).next().show();//accessing the next employee//
      $(this).prev().show();//accessing the previous employee//
    })
  })
}

function hideModals() {//creating a function to hide modal when page loads//
  $('.modal-close-btn').click(function() {//adding a click handler to the modal close button//
    $('.modal-container').hide();//hiding the modal after the close button has been activated//
  })

// searchInput.addEventListener('keyup', inputSearch, false);
// searchSubmit.addEventListener('click', inputSearch, false);
//

}
}
