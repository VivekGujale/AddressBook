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
try {
    addressBookArray.push(new PersonDetails("Vivek", "Gujale", "10-12/21 Shantinagar", "NaviMumbai", "Maharashtra", "410235", "91 9685654789", "vivek223@gmail.com"));
    addressBookArray.push(new PersonDetails("Sandip", "Kengar", "36-02/15 Gandhinagar", "Pune", "Maharashtra", "425459", "91 9023547852", "sandy25@gmail.com"));
    addressBookArray.push(new PersonDetails("Sagar", "Kalokhe", "18-20/42 Kantinagar", "Satara", "Maharashtra", "412015", "91 8521456987", "shaggy12@gmail.com"));
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);