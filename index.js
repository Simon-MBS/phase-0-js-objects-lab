//Write your code here
// Declare and initialize the attendee object
let attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Function to log attendee name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// Function to log ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// Function to update ticket type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
}

// Function to update ticket price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
}

// Function to remove the event property
function removeEventProperty(attendee) {
    delete attendee.event;
}

// Function to add checkedIn property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};