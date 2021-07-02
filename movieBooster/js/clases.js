class ArrayCtrl {
   #items;

   constructor(){
      this.#items = []
   }

   addItem(item){
      this.#items.push(item)
   }

   getIndexItem(item){
      const index = this.#items.findIndex(elem => item === elem)
      return index
   }

   getItem(index){
      const itemGet = this.#items.filter((elem, i) => index === i)
      return itemGet > 0 ? itemGet[0] : null
   }   

   getAllItems(){
      return this.#items
   }

   deleteItem(index){
      this.#items.splice(index,1)
   }
}


class Movies {
   titulo;
   subtitulo;
   categoria;
   clasificacion;
   poster;
   sinopsis;

   constructor({titulo, subtitulo, categoria, clasificacion, poster, sinopsis}){
      this.titulo = titulo;
      this.subtitulo = subtitulo;
      this.categoria = categoria;
      this.clasificacion = clasificacion;
      this.poster = poster;
      this.sinopsis = sinopsis
   }

}

class Category {
   category;

   constructor({category}){
      this.category = category
   }
}