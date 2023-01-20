function testeVar() {
    var a = 1;
    var b = 2;
    var sum = a + b;
    var name = "asd";

    if (name == undefined) {
        console.log("The name isn't started");
    }
    if (typeof (name) == "undefined") {
        console.log("Second test - The name isn't started")
    }
    console.log("Hello %s,the result of sum is: %d", name, sum);
}

//testeVar()
function Person() {
    this.name = "João";
    this.hello = function () {
        return "Hello Word !!"
    }
}

function objeto1() {

    var pessoa = Object();

    pessoa.nome = "Luis";

    pessoa.sobrenome = "Lima";

    pessoa.hello = function () {

        return "Hello Pessoa"

    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());

}

function object2() {
    var person = {
        name: "João";
        hello: function () {
            return "Hello Pessoa";
        }
    }
    console.log(person);
    console.log(person.name);
    console.log(person.hello())

}
function object3() {
    var person = new Person()
    console.log(person);
    console.log(person.name);
    console.log(person.hello());
}

class Person {
    constructor() {
        this.name = "João";
    }
    hello() {
        return "Hello Person !!";
    }
}

function object4() {
    var person = new Person();
    console.log(person);
    console.log(person.name);
    console.log(person.hello());
}
//object2()
//object3()
//object4()
