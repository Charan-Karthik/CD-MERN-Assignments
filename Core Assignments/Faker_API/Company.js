import { faker } from '@faker-js/faker';

class Company {
    constructor(){
        this.companyID = faker.datatype.number(); // https://fakerjs.dev/api/datatype.html
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}