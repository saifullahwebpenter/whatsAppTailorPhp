// Select the three-dot icon and the dropdown menu
const threeDots = document.getElementById('three-dots');
const dropdownMenu = document.getElementById('dropdown-menu');

// Ensure the dropdown is closed on page load/refresh
document.addEventListener('DOMContentLoaded', function() {
    dropdownMenu.style.display = 'none'; // Close dropdown on page load
});

// Toggle the dropdown menu on three dots click
threeDots.addEventListener('click', function(event) {
    // Prevent the event from bubbling up to the document click listener
    event.stopPropagation(); 
    
    // Toggle the dropdown menu visibility
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    // Check if the clicked target is not the three dots or the dropdown menu
    if (event.target !== threeDots && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none'; // Hide the dropdown
    }
});



/////////////////////// SEARCH POPUP /////////////////////////


// Select the magnifying glass icon in .nav-icons and the popup search bar
const searchIcon = document.querySelector('.nav-icons .fa-magnifying-glass');
const popupSearchBar = document.querySelector('.popup-search-bar');
const closeIcon = document.querySelector('.popup-search-bar .fa-xmark');

// Show the popup-search-bar when the magnifying glass icon is clicked
searchIcon.addEventListener('click', function() {
    popupSearchBar.classList.add('active'); // Add the active class to show it
});

// Hide the popup-search-bar when the X icon is clicked
closeIcon.addEventListener('click', function() {
    popupSearchBar.classList.remove('active'); // Remove the active class to hide it
});


//////////////////////////////////Dashboard mobile display///////////////////////////////////////
// // Get the dashboard link and the div elements
// document.getElementById('dashboard-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default anchor behavior

//     // Show the dashboard div
//     document.querySelector('.dashboard').style.display = 'block';

//     // Hide the left-container div
//     document.querySelector('.left-container').style.display = 'none';
// });
// Dashboard link click event
document.getElementById('dashboard-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Show the dashboard div
    document.querySelector('.dashboard').style.display = 'block';
    document.querySelector('.dashboard').style.width = '100%';
    // Hide the left-container div
    document.querySelector('.left-container').style.display = 'none';
});

// Font Awesome X mark click event to close the dashboard and show the left-container
document.getElementById('close-dashboard').addEventListener('click', function() {
    // Hide the dashboard div
    document.querySelector('.dashboard').style.display = 'none';

    // Show the left-container div
    document.querySelector('.left-container').style.display = 'block';
});


///////////////////////close notif box///////////////////////////
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('closeNotif').addEventListener('click', function() {
            document.getElementById('notifBox').style.display = 'none';
        });
    });
