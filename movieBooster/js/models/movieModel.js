export class MovieService{
   constructor(){}

   store(formMovie){
      // formMovie es el valor enviado a tra vez del FormData
      // para hacer su devicio POST en el servidor 
      // console.log(formMovie);
      fetch('/api-movieBooster/movieController.php', {
         // se indica el metodo POST puesto que su valor por default es GET
         // y se le asigna un body que tiene como valor el FormData
         method: 'POST',
         body: formMovie,
      })
      .then(response => response.json())
      .then(data => {
         // aqui se obtieneen el data el FormData a manera de JSON
         console.log('response del server', data);      
      })
   }

   all(){
      console.log('todas las pelis');
   }
}

// investigar como hacer peticiones ajax y prepararlas


