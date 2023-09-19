//Person work:
class Person {

    constructor(name, email, phone, friends = []) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.friends = friends;
    }
  
    greet(otherPerson) {
        console.log(`Hello ${otherPerson.name}, I am ${this.name}!`);
    }
  
    print_contact_info(){
      console.log(this.name + "'s Email: ", this.email);
      console.log(this.name + "'s Phone Number: ", this.phone)
    }
  
    add_friend(otherPerson){
        console.log(this.friends.push(otherPerson));
    };
  
    num_friends(){
      console.log(this.friends.length);
    }
  
    list_friends(){
      this.friends.map(x => {
        console.log(this.name + "'s Friends: ", x.name);
        return (x.name + "'s Friends: ", x.name);
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
  
  
  //They're gonna be friends :)
  // Sonny.greet(Jordan);
  // Jordan.greet(Sonny);
  
  // Sonny.print_contact_info();
  // Jordan.print_contact_info();
  
  
  Sonny.add_friend(Jordan);
  Jordan.add_friend(Sonny);
  
  Sonny.num_friends();
  Jordan.num_friends();
  
  Sonny.list_friends();
  Jordan.list_friends();
  
  
  
  
  
  
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
  
  