const bodyUI = document.querySelector('body');
const menuList = [
   {
      nombre: 'movies list',
      url: '/movieBooster/views/moviesModul/movieList/movieList.html',
   },
   {
      nombre: 'new movie',
      url: '/movieBooster/views/moviesModul/addMovies/addMovie.html',
   },
   {
      nombre: 'new category',
      url: '/movieBooster/views/moviesModul/category/addCategory.html'
   },
   {
      nombre: 'favoritos',
      url: '#'
   },
   {
      nombre: 'new user',
      url: '/movieBooster/views/moviesModul/users/newUser.html'
   },
   {
      nombre: 'list users',
      url: '/movieBooster/views/moviesModul/users/listUsers.html'
   },
];

const _getLinks = () => {
   let links = '';
   const activeRute = window.location.pathname.split('HTML/')[0];
   menuList.forEach(elem => {
      links += `
         <li class="nav-item">
               <a class="nav-link ${activeRute === elem.url ? 'active' : 'inactive'}" aria-current="page" href="${elem.url}">${elem.nombre}</a>
         </li>
         `
   });
   return links
};

const _renderNavBar = () =>{
   const structurNavBar = `
   <nav id="navbar-structur" class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
         <a id="titulo-nav" class="navbar-brand" href="http://localhost/movieBooster/views/">movieBooster</a>
      
         <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
               ${_getLinks()}
            </ul>
         </div>
      </div>
   </nav>

   `;
   bodyUI.insertAdjacentHTML('afterbegin', structurNavBar);
};
_renderNavBar();


{/* <form class="d-flex">
   <input class="form-control me-sm-2" type="text" placeholder="Search">
   <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
</form> */}