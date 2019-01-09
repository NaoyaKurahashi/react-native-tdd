export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hasRequiredInfo = () => {
        return this.name && this.age;
    }

    register = () => {
        return true;
    }
}