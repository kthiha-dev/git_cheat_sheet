class User {
	constructor(name,email){
		this.name = name;
		this.email = email;
	}

	changeEmail = (newEmail) => {
  		this.email = newEmail;
	}
}

let user = new User('kevinkyaw','kevin@test.com');
user.changeEmail('kevin@github.com');
console.dir(user);