

export class Movie {
   titulo;
   subtitulo;
   categoria;
   clasificacion;
   poster;
   sinopsis;
   movieService;

   constructor({titulo, categoria, clasificacion, poster, sinopsis}){
      this.titulo = titulo;
      this.categoria = categoria;
      this.clasificacion = clasificacion;
      this.poster = poster;
      this.sinopsis = sinopsis
   }

   

   getMovie(){
      console.log(':) hola pirrrru');
   }

}
