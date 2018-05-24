/*Declare a class expression called Clothes that takes 3 parameters in
/*the constructor, name, size, price and create a variable called
/*shirt that is equal to a new instance of Clothes with a name = Biker
/*Jacket, size = medium and price = 20.*/


class Clothes { 
  constructor(name, size, price){
  this.name = name;
  this.size = size;
  this.price = price;
  this.type = 'shirt';
}
getName(){
  return this.name;
}              
}

let shirt = new Clothes('Biker Jacket', 'medium', 20);
console.log(shirt);