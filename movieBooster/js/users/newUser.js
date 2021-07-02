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

   initEvent(){
      this.formUI.addEventListener('submit', (e) => {
         e.preventDefault();
         this.creatUser();
      })
   }
}

const user = new AddUser();


