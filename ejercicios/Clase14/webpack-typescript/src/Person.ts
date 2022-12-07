class Person {
    private first_name: string;
    private last_name: string;
    constructor(name:string, lastname:string){
        this.first_name = name;
        this.last_name = lastname;
    }

    getFullName(){
        return `${this.first_name} ${this.last_name}`
    }
}

/* const freddy = new Person("fredy", "chaparro");
freddy.getFullName(); */

export {Person};