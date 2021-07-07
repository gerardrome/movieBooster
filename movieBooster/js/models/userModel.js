export class UserService{
	constructor(){}

	store(formUser){
		// formMovie es el valor enviado a tra vez del FormData
		// para hacer su devicio POST en el servidor 
		// console.log(formMovie);
		return fetch('/api-movieBooster/userController.php', {
			// se indica el metodo POST puesto que su valor por default es GET
			// y se le asigna un body que tiene como valor el FormData
					method: 'POST',
					body: formUser,
		})
					.then(response => response.json())
					.then(data => data)
	};
	
	selectUser(id){
		return fetch('/api-movieBooster/usersListController.php',{
					method: 'POST',
					body: id,
		})
					.then(response => response.json())
					.then(data => data)
	}

	allUsers(){
		return fetch('/api-movieBooster/usersListController.php')
					.then(response => response.json())
					.then(data => data)
	};

};



