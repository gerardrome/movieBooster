import {UserService} from "../models/userModel.js";

class UserList{
usersService = new UserService();
containerUsers = document.querySelector('#body-table');
constructor(){
	// this.validateUrl();
}

printUsers(users){
	this.containerUsers.innerHTML = '';
	users.forEach(element => {
		this.containerUsers.innerHTML += `
			<tr class="table-secondary tr-contain">
				<th scope="row">${element.id}</th>
				<td>${element.nombre}</td>
				<td>${element.correo}</td>
				<td>
					<i class="bi bi-trash" name="${element.id}" ></i>
					<i class="bi bi-pencil-square" name="${element.id}"></i>
				</td>
			</tr>
		`;
	});

	for(let elem of this.containerUsers.children){
		const lastTD = elem.childNodes[7];
		const trashButton = lastTD.childNodes[1];  
		const editButton = lastTD.childNodes[3];  

		trashButton.addEventListener('click', () =>{
			const id = trashButton.attributes.name.value;
			this.deleteUser(id);
			console.log('quiero eliminar', id);
		});
		editButton.addEventListener('click', () =>{
			const id = editButton.attributes.name.value;
			window.location.href='newUser.html'+`?id=${id}`
			console.log('--> editar', id, window.location.href+`?id=${id}`);
		});
		
	}
	
};

async getUsers(){
	const responseApi = await this.usersService.allUsers();
	const usersList = responseApi.data;
	if(responseApi.status === 'error'){
		alert('error al cargar los usuarios');
	}else{
		this.printUsers(usersList);
	}
	console.log('response', usersList);
};

deleteUser(id) {
	this.usersService.userDelete(id);
	console.log('diste click funcion eliminar --->', id);
	this.getUsers();
};

updateUser(id){
	console.log('diste click funcion editar --->', id);
}


// validateClick(e){
// 	if (e.target.attributes.name) {
// 		let idDelete = e.target.attributes[1].value;
// 		this.deleteUser(idDelete)
// 		console.log('diste click eliminar', e.target.attributes.name.value);
// 	}else if (e.target.attributes.value) {
// 		let idUpdate = e.target.attributes[1].value;
// 		this.updateUser(idUpdate)
// 		console.log('diste click en editar', e.target.attributes.value.value);
// 	}
// }

// initEvent(){
// 	this.containerUsers.addEventListener('click', e =>{
// 		e.preventDefault();
// 		this.validateClick(e);
// 		this.getUsers();
// 	})
// }

};

const usuarios = new UserList()
usuarios.getUsers()
console.log('conectado');

// SELECT usuarios.id, usuarios.nombre, usuarios.correo FROM usuarios