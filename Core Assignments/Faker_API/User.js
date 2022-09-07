import { faker } from '@faker-js/faker'; // can't use import statements outside of a module
// const {faker} = require('@faker-js/faker');

export default class User {
    constructor(){
        this.userID = faker.datatype.number(); // https://fakerjs.dev/api/datatype.html
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNum = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password(8);
    }
}