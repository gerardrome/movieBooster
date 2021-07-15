import {User} from "./user.js";
import {UserService} from "../models/userModel.js";


class AddUser {
user;
userService = new UserService();
btnSubmit = document.querySelector('#btn-submit');
// seleccionamos la etiqueta form para poder hacer uso de todos los datos del formulario
formUI = document.querySelector('#userForm');
constructor(){
   this.initEvent();
   this.validateUrl();
}

async creatUser(){
   // la palabra reservada new FormData() sirve para compilar datos clave/valor 
   // en este caso recividos en parametro FormData(this.formUI) el formulario HTML completo
   const formData = new FormData(this.formUI);
   console.log(formData);
   this.user = new User({
      // FormData.get('') obtiene el valor indicado mediante el atributo nombre del HTML
      // id: formData.get(''),
      nombre: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
   });
   // en la sig instruccion se envia el FormData completo, para su uso en PHP
   const respon = await this.userService.store(formData);
   if (respon.status === 'error') {
      alert(respon.msj);
   }else{
      alert(respon.msj)
      this.formUI.reset();
   }
};

printUserUpdate(data){
   this.user = {
      nombre: data.nombre,
      correo: data.correo,
      password: data.password
   };
   const formInput = this.formUI.getElementsByTagName('input');
   formInput['name'].value = this.user.nombre;
   formInput['email'].value = this.user.correo;
   formInput['password'].type = 'text';
   formInput['password'].value = this.user.password;
   this.formUI.querySelector('#btn-submit').innerText = 'UPDATE USER'
}

async userUpdate(){
   const idUrl = window.location.href.split('?')[1].split('=')[1];
   await this.userService.getUserUpdate(idUrl);
   this.printUserUpdate(this.userService.dataUpdate);
   // const responseApi = this.userService.getUserUpdate(idUrl);
   // const userUpdate = responseApi.data;
   // this.userService.getUserUpdate(idUrl);
   console.log('si ay id-->', idUrl);
   
}

initEvent(){
   this.formUI.addEventListener('submit', (e) => {
      e.preventDefault();
      this.creatUser();
   })
   this.formUI.querySelector('#btn-cancel').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href='newUser.html';
      console.log('diste cancelar :D')
   })
};

validateUrl(){
   const url = 'http://localhost/movieBooster/views/moviesModul/users/newUser.html';
   if (window.location.href === url) {
      console.log('no ay url para editar :(');
      return
   }else{
      this.userUpdate();
      // const idUrl = window.location.href.split('?')[1].split('=')[1];
      // const responseApi = await this.userService.getUserUpdate(idUrl);
      // const userUpdate = responseApi.data;
      // this.userService.getUserUpdate(idUrl)
      // console.log('si ay id-->', idUrl, userUpdate);
   }
}

};

const user = new AddUser();


