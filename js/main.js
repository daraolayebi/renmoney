// declaration of all variables
let body = document.getElementsByTagName('body')[0]
let logo = document.getElementsByClassName('pwr-logo')[0]
let className = 'widget-is-open'

let btn = document.getElementById('btnPay');
let btnContinue = document.getElementById('btnStart')
let closeWidget = document.getElementById('btnClose');
let prevNextBtns = document.getElementsByClassName('btn-page-toggle')
let paymentForm = document.getElementsByTagName('form')[0]
let formWarning = document.getElementById('warning')

let currentPage = 0;
let isLastPage = false
let pages = document.getElementsByClassName('form-page')
let dataContainer = document.getElementsByClassName('user-data')[0]

// hide first page of form and display page passed to Change Page function
pages[currentPage].style.display = "none";
displayCurrentPage(currentPage);

// opens widget on click of the button by adding class to body 
btn.addEventListener('click', function () {
    if (!body.classList.contains(className)) body.classList.add(className);
    else body.classList.remove(className);
});

// closed widget by removing class from body, and resets payment form to its original state
closeWidget.addEventListener('click', function () {
    body.classList.remove(className);
    resetForm();
});

function changePage(page) {

    // checks if on final page; if true, all fields are logged out and API is called
    if (isLastPage) {
        saveFormValues();
        fetchTodo();
    }


    // checks that all fields are filled before proceeding to next page
    if (page == 1 && !validateFields()) {
        formWarning.style.display = "block";
        return false;
    } else formWarning.style.display = "none";


    // checks if user is on second to the last page before setting isLastPage to true 
    // button text is changed
    if (page == 1 && currentPage == 2) {
        isLastPage = true;
        prevNextBtns[1].innerHTML = "Finish";
    } else prevNextBtns[1].innerHTML = "Next";


    // hides current page
    // adds +1 or -1 from current page number
    // passes key to pages array to display the new page 
    pages[currentPage].style.display = "none";
    currentPage = currentPage + page;
    pages[currentPage].style.display = "block";


    // checks if user is not on the first or the last page to determine button display
    if (currentPage >= 1 && currentPage < 4) {
        togglePrevNextButtons('block');
        logo.classList.remove('large')
    }
    else {
        togglePrevNextButtons('none');
        logo.classList.add('large')
    }


    displayCurrentPage(currentPage);
}

// shows or hides prev and next buttons
function togglePrevNextButtons(display) {
    prevNextBtns[0].style.display = display;
    prevNextBtns[1].style.display = display;
}

// determines which page to display by passing page value to array key
function displayCurrentPage(page) {
    pages[page].style.display = "block";
}

// checks if all fields are filled before enabling Next button
function validateFields() {
    let isValid = true
    let input = pages[currentPage].getElementsByTagName("input");
    let select = pages[currentPage].getElementsByTagName("select");

    if (currentPage > 0) {
        for (let i = 0; i < input.length; i++) {
            if (input[i].value == "") isValid = false
        }
        for (let i = 0; i < select.length; i++) {
            if (select[i].value == "") isValid = false
        }
    }
    return isValid;
}

// resets page values and clears payment form once widget is closed
function resetForm() {
    pages[currentPage].style.display = "none";
    prevNextBtns[0].style.display = "none";
    prevNextBtns[1].style.display = "none";
    currentPage = 0;
    isLastPage = false
    displayCurrentPage(currentPage);
    dataContainer.innerHTML = ""
    paymentForm.reset();
}

// if isLastPage is true, form is selected and serialized
// equals sign is replaced with colon for better distinction between name and value 
// the string is decoded and split into an array and each element is passed into HTML 
function saveFormValues() {
    dataContainer.innerHTML = ""
    let data = $(paymentForm).serialize()
    var updatedData = data.replace(/=/g, ": ");
    var updatedData2 = updatedData.replace(/%40/g, "@");
    decodedData = decodeURI(updatedData2)
    let dataArray = decodedData.split('&')
    dataArray.forEach(item => {
        var p = document.createElement("p");
        p.innerText = item;
        p.classList.add('user-data-item')
        dataContainer.append(p);
    });
}

// makes GET request to todo API and stores response object in HTML
function fetchTodo() {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
        dataType: "json",
        success: function (response) {
            document.querySelector('.todo').innerHTML = `
            <h5>Your Todo: ${response.title}</h5>
            <p class="user-data-item">User ID: ${response.userId}<p>
            <p class="user-data-item">Status: ${response.completed}<p>`
        },
        error: function (error) { alert(error) }
    });
}