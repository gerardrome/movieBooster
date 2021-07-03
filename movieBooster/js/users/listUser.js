import {UserService} from "../models/userModel.js";

class UserList{
	usersService = new UserService();
	containerUsers = document.querySelector('#body-table');
	constructor(){}

	printUsers(users){
		users.forEach(element => {
			this.containerUsers.innerHTML += `
				<tr class="table-secondary tr-contain">
					<th scope="row">${element.id}</th>
					<td>${element.nombre}</td>
					<td>${element.correo}</td>
					<td>
						<i class="bi bi-trash"></i>
						<i class="bi bi-pencil-square"></i>
					</td>
				</tr>
			`;
		});
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
	}

	
};

const usuarios = new UserList()
usuarios.getUsers()
console.log('conectado');

// SELECT usuarios.id, usuarios.nombre, usuarios.correo FROM usuarios