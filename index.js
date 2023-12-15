class Hero {
  constructor(name, age, type, atack) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atack() {
    if (this.type === "mago") {
      console.log(`O ${this.type} atacou usando magia`);
    } else if (this.type === "guerreiro") {
      console.log(`${this.type} atacou com a espada`);
    } else if (this.type === "monge") {
      console.log(`${this.type} atacou com artes marciais`);
    } else if (this.type === "ninja") {
      console.log(`${this.type} atacou com a shuriken`);
    }
  }
}

let mago = new Hero("Douglas", 31, "mago");
let guerreiro = new Hero("Douglas", 31, "guerreiro");
let monge = new Hero("Douglas", 31, "monge");
let ninja = new Hero("Douglas", 31, "ninja");

mago.atack();
guerreiro.atack();
monge.atack();
ninja.atack();
