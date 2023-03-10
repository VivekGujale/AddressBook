console.log("Welcome to Address Book")

const firstNameRegex = RegExp('[A-Z][a-z]{2,}');
const lastNameRegex = RegExp('[A-Z][a-z]{2,}');
const addressRegex = RegExp('[a-zA-z0-9#,]{4,}');
const cityRegex = RegExp('[a-zA-z]{4,}');
const stateRegex = RegExp('[a-zA-z]{4,}');
const zipCodeRegex = RegExp("[0-9]{6}");
const phoneNumberRegex = RegExp("[91]{2}[ ][0-9]{10}");
const emailRegex = RegExp("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.,-]+");


class PersonDetails {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2]
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get email() {
        return this._email;
    }

    set firstName(firstName) {
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "First Name is incorrect"
    }

    set lastName(lastName) {
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Last Name is incorrect"
    }

    set city(city) {
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "City is incorrect"

    }

    set state(state) {
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "State is incorrect"
    }

    set zip(zip) {
        if (zipCodeRegex.test(zip))
            this._zip = zip;
        else
            throw "Zip code is incorrect"
    }

    set phoneNumber(phoneNumber) {
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Phone number is incorrect"
    }

    set email(email) {
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Email ID is incorrect"
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : "
            + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip
            + ", Phone Number : " + this.phoneNumber + ", Email ID : " + this.email;
    }
}

let addressBookArray = new Array();

let fistPerson = new PersonDetails("Vivek", "Gujale", "10-12/21 Shantinagar", "Navi Mumbai", "Maharashtra", "410235", "91 9685654789", "vivek223@gmail.com");
let secondPerson = new PersonDetails("Sandip", "Kengar", "36-02/15 Gandhinagar", "Rajkot", "Gujrat", "425459", "91 9023547852", "sandy25@gmail.com");
let thirdPerson = new PersonDetails("Sagar", "Kalokhe", "18-20/42 Kantinagar", "Navi Mumbai", "Maharashtra", "410235", "91 8521456987", "shaggy12@gmail.com");
let fourthPerson = new PersonDetails("Nilesh", "Choudhary", "10-23/12 Ramnagar", "Jaipur", "Rajasthan", "654035", "91 7563214569", "nilya564@gmail.com");
let fifthPerson = new PersonDetails("Tabrej", "Shaikh", "05-33/21 Devnagar", "Patna", "Bihar", "212019", "91 8454784561", "tabb12@gmail.com");
try {
    addressBookArray.push(fistPerson);
    addressBookArray.push(secondPerson);
    addressBookArray.push(thirdPerson);
    addressBookArray.push(fourthPerson);
    addressBookArray.push(fifthPerson);

} catch (e) {
    console.error(e);
}

function contactExists(firstName, lastName) {
    return addressBookArray.some(personDetails => personDetails.firstName == firstName && personDetails.lastName == lastName);
}

//Edit person details in address book
function editContact(firstName, lastName, type, newData) {
    if (contactExists(firstName, lastName)) {
        switch (type) {
            case "address":
                addressBookArray.find((personDetails) => personDetails.firstName == firstName).address = newData;
                break;
            case "city":
                addressBookArray.find((personDetails) => personDetails.firstName == firstName).city = newData;
                break;
            case "state":
                addressBookArray.find((personDetails) => personDetails.firstName == firstName).state = newData;
                break;
            case "zip":
                addressBookArray.find((personDetails) => personDetails.firstName == firstName).zip = newData;
                break;
            case "phoneNumber":
                addressBookArray.find((personDetails) => personDetails.firstName == firstName).phoneNumber = newData;
                break;
            case "email":
                addressBookArray.find((personDetails) => personDetails.firstName == firstName).email = newData;
                break;
            default:
                console.log("Enter valid type");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}

console.log(addressBookArray);
console.log("\nAfter Editing Contact")
editContact("Sandip", "Kengar", "city", "Solapur");
console.log(addressBookArray);

//Delete person from address book
function deleteContact(firstName, lastName) {
    if (contactExists(firstName, lastName)) {
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    } else {
        console.log("Contact Does Not Exist");
    }
}

console.log("\nAfter Deleting Contact");
deleteContact("Sagar", "Kalokhe");
console.log(addressBookArray);


//Checking count of person's available in address book
function getCountOfPerson(count) {
    count += 1;
    return count;
}

console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfPerson, 0));


//checking for duplicate person entry
console.log("\nCheck Duplicate Person Entry");
try {
    addContact(secondPerson);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);

//if there is no duplicate entry then adding person details in address book
function addContact(personDetails) {
    if (!contactExists(personDetails.firstName, personDetails.lastName))
        addressBookArray.push(personDetails);
    else
        throw "Contact is already present in the Address Book";
}

//Search person by city
function searchContactByCity(city) {
    return addressBookArray.filter((contact) => contact.city == city);
}

console.log("\nSearch Person By City");
console.log(searchContactByCity("Navi Mumbai"));

//Search person by State
function searchContactByState(state) {
    return addressBookArray.filter((contact) => contact.state == state);
}

console.log("\nSearch Person By State");
console.log(searchContactByState("Maharashtra"));

//View person details by city
function viewContactsByCity(city) {
    return addressBookArray.filter((contact) => contact.city == city);
}

console.log("\nView Person Details By City : Patna \n");
console.log(viewContactsByCity("Patna"));

//View person details by state
function viewContactsByState(state) {
    return addressBookArray.filter((contact) => contact.state == state);
}

console.log("\nView Person Details By State : Rajasthan \n");
console.log(viewContactsByState("Rajasthan"));


let contactsCityMap = new Map();
let contactsStateMap = new Map();

//get number of person count by city
function getCountOfPersonDetailsByCity(city) {
    return addressBookArray.filter((contact) => contact.city == city).length;
}

//get number of person count by state
function getCountOfPersonDetailsByState(state) {
    return addressBookArray.filter((contact) => contact.state == state).length;
}

console.log("\nNumber of Contacts residing in City : Navi Mumbai = " + getCountOfPersonDetailsByCity("Navi Mumbai"));
console.log("\nNumber of Contacts residing in State : Maharashtra = " + getCountOfPersonDetailsByState("Maharashtra"));

//sorting alphabetically person details by name
function sortAddressBookByName() {
    addressBookArray.sort((firstPerson, fourthPerson) => (firstPerson.firstName).localeCompare(fourthPerson.firstName));
    console.log(addressBookArray);
}

console.log("\nPerson details are in Alphabetical Order are : ");
sortAddressBookByName();

//sort the entries by city
function sortByCity() {
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.city).localeCompare(secondPerson.city));
    console.log(addressBookArray);
}

console.log("\nContacts Sorted By City");
sortByCity();

//sort the entries by state
function sortByState() {
    addressBookArray.sort((firstPerson, fifthPerson) => (firstPerson.state).localeCompare(fifthPerson.state));
    console.log(addressBookArray);
}

console.log("\nContacts Sorted By State");
sortByState();


//sort the entries by zip code
function sortByZip() {
    addressBookArray.sort((firstPerson, fourthPerson) => (firstPerson.zip).localeCompare(fourthPerson.zip));
    console.log(addressBookArray);
}

console.log("\nContacts Sorted By Zip");
sortByZip();
