//Below are all the HTML elements
const sayHello = document.getElementById('sayHello');
const contactInfo =  document.getElementById('contactInfo');
const friendsSection = document.getElementById('friendsSection');


//Person work:
class Person {

    constructor(name, email, phone, friends = []) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.friends = friends;
    }
  
    greet(otherPerson) {
        const hello = document.createElement('p');
        hello.innerHTML = (`Hello ${otherPerson.name}, I am ${this.name}!`)
        console.log("I'm here bbg!");
        return hello.appendChild(sayHello);
    }
  
    print_contact_info(){
      const info = document.createElement('p');
      info.innerHTML = (`${this.name}'s Email: ${this.email}.
            ${this.name}'s Phone Number: ${this.phone}`);
      return friendsSection.appendChild(info);
    }
  
    //will not be displaying on DOM
    add_friend(otherPerson){
        console.log(this.friends.push(otherPerson));
    };
  
    //will not be displaying on DOM
    num_friends(){
      console.log(this.friends.length);
    }
  
    list_friends(){
      this.friends.map(x => {
        const friends = document.createElement('p');
        friends.innerHTML = (`${this.name}'s Friends: ${x.name}`);
        return friendsSection.appendChild(friends);
      })
    }
};
  
//Sonny work:
const Sonny = new Person('Sonny');
Sonny.email = 'sonny@hotmail.com';
Sonny.phone = '483-485-4948';
  
// console.log("Name: ", Sonny.name);
// console.log(Sonny);
  

//Jordan work:
const Jordan = new Person('Jordan');
Jordan.email = 'jordan@aol.com';
Jordan.phone = '495-586-3456';
  
// console.log("Name: ", Jordan.name)
// console.log(Jordan);
  
  
//They meet...
Sonny.greet(Jordan);
Jordan.greet(Sonny);
  
//They exchange contact info!
Sonny.print_contact_info();
Jordan.print_contact_info();
  
//They're friends!
Sonny.add_friend(Jordan);
Jordan.add_friend(Sonny);
  
//They only have each other ;)
Sonny.num_friends();
Jordan.num_friends();

//They list their friends AHAHAHHAHHHH
Sonny.list_friends();
Jordan.list_friends();
  
  
  
  
//what's the point

//Vehicle work:
// class vehicle{
//   constructor(make, model, year){
//     this.make = make
//     this.model = model;
//     this.year = year;
//   }
//   print_info() {
//     console.log(car.make, car.model, car.year)
//   }
// };
  
// const car = new vehicle('VW', 'GTI', 2018)
// console.log(car);
// car.print_info();