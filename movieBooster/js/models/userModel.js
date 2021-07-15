export class UserService{
	dataUpdate = null
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

getUserUpdate(id){
	return fetch('/api-movieBooster/userUpdate.php',{
				method: 'POST',
				body: JSON.stringify({'id': id}),
				headers:{
					'Content-Type': 'application/json'
				}
	})
				.then(response => response.json())
				.then(data => {
					this.dataUpdate = data.data[0]
				})
};

userDelete(id){
	return fetch('/api-movieBooster/userOptions.php',{
				method: 'POST',
				body: JSON.stringify({'id': id}),
				headers:{
					'Content-Type': 'application/json'
				}
	})
				.then(response => response.json())
				.then(data => data)
};

allUsers(){
	return fetch('/api-movieBooster/usersListController.php')
				.then(response => response.json())
				.then(data => data)
};

};



