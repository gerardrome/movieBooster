import {UserService} from "../models/userModel.js";

class UserList{
	usersService = new UserService();
	containerUsers = document.querySelector('#body-table');
	constructor(){
		this.initEvent();
	}

	printUsers(users){
		users.forEach(element => {
			this.containerUsers.innerHTML += `
				<tr class="table-secondary tr-contain">
					<th scope="row">${element.id}</th>
					<td>${element.nombre}</td>
					<td>${element.correo}</td>
					<td>
						<i class="bi bi-trash" name="${element.id}"></i>
						<i class="bi bi-pencil-square" value="${element.id}"></i>
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
	};

	 deleteUser(id) {
		this.usersService.selectUser(id);
		console.log('diste click eliminar --->', id);
	};

	initEvent(){
		this.containerUsers.addEventListener('click', e =>{
			// e.preventDefault();
			if (e.target.attributes.name) {
				// const idClick = e.target.attributes[1].value;
				// this.deleteUser(idClick)
				console.log('diste click eliminar', e.target.attributes.name);
			}else if (e.target.attributes.value) {
				console.log('diste click en editar', e.target.attributes.value);
			}
		})
	}

};

const usuarios = new UserList()
usuarios.getUsers()
console.log('conectado');

// SELECT usuarios.id, usuarios.nombre, usuarios.correo FROM usuarios