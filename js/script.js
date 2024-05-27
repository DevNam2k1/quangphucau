// JavaScript code goes here

// Function to get current date and time
function getCurrentDateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    return date + ' ' + time;
}

// Function to display visitor count
function displayVisitorCount() {
    // Logic to retrieve visitor count from a database or server
    var visitorCount = 1000; // Replace with actual visitor count
    var visitorCountElement = document.getElementById('visitor-count');
    visitorCountElement.innerHTML = 'Visitors: ' + visitorCount;
}

// Call the functions on page load
window.onload = function() {
    var dateTimeElement = document.getElementById('date-time');
    dateTimeElement.innerHTML = getCurrentDateTime();

    displayVisitorCount();
};


// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav ul li a');
    
    // Add click event listeners to each navigation link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Get the target section ID from the href attribute
        var targetId = link.getAttribute('href');
        
        // Scroll to the target section
        scrollToSection(targetId);
      });
    });
  });
  
  // Function to scroll to a section with a given ID
  function scrollToSection(sectionId) {
    // Get the target section element
    var targetSection = document.querySelector(sectionId);
    
    // Calculate the target position relative to the document
    var targetPosition = targetSection.offsetTop;
    
    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }