class UserList{
	containerUsers = document.querySelector('#body-table');
	constructor(){}

	printUsers(){
		this.containerUsers.innerHTML += `
			<tr class="table-secondary tr-contain">
				<th scope="row">12121</th>
				<td>gerardrome</td>
				<td>gerardrome@mail.com</td>
			</tr>
		`;
	}
};
fetch('/api-movieBooster/usersListController.php')
.then(response => {
	response.json;
	console.log('----> response server', response);
})
.then(data => {
	console.log('---> data', data);
})
console.log('conectado');

// SELECT usuarios.id, usuarios.nombre, usuarios.correo FROM usuarios