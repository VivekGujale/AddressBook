console.log("Welcome to Address Book")

const firstNameRegex = RegExp('[A-Z][a-z]{2,}');
const lastNameRegex = RegExp('[A-Z][a-z]{2,}');
const addressRegex = RegExp('[a-zA-z0-9#,]{4,}');
const cityRegex = RegExp('[a-zA-z]{4,}');
const stateRegex = RegExp('[a-zA-z]{4,}');
const zipCodeRegex = RegExp("[0-9]{6}");
const phoneNumberRegex = RegExp("[0-9]{10}");
const emailRegex = RegExp("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.,-]+");

class PersonDetails {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.city = params[2];
        this.state = params[3];
        this.zip = params[4];
        this.phoneNumber = params[5];
        this.email = params[6]
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
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

let contact = new PersonDetails("Vivek", "Gujale", "Navi Mumbai", "Maharashtra", 410235, 9685654789, "vivek223@gmail.com");
console.log(contact.toString());