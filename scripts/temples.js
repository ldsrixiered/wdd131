// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year to the span element with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output the last modified date to the paragraph element with id "lastModified"
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;
