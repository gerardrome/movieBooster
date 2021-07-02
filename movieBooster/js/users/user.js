

export class User {
   nombre;
	email;
	password;
   userService;

   constructor({nombre, email, password}){
		this.nombre = nombre;
		this.email = email;
		this.password = password;
   };

   

   getMovie(){
      console.log(':) hola pirrrru');
   }

}
