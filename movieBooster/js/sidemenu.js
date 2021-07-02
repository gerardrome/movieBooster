
const headUI = document.querySelector('header');   


const _renderSidemenu = () =>{
   const structurSidemenu = `
      <div id="side-menu" class="menu-collapsed">
         <div id="header">
            <span id="title">movieBooster</span>
            <div id="menu-btn">
               <i class="bi bi-list"></i>
            </div>
         </div>

         <div id="profile">
            <div id="photo"><img src="" alt=""></div>
            <div id="user-name"><span> Gerardo R.</span></div>
         </div>

         <div id="menu-items">
            <div class="item">
                  <a href="#" class="">
                     <div class="icon"><i class="bi bi-heart-fill"></i></i></div>
                     <div class="title"><span>FAVORITES</span></div>
                  </a>
            </div>

            <div class="item-separator">
            </div>
         </div>
      </div>

   `;
   headUI.insertAdjacentHTML('afterbegin', structurSidemenu);
};
_renderSidemenu()
const btnUI = document.querySelector('#menu-btn');
const menuUI = document.querySelector('#side-menu');

btnUI.addEventListener('click', e =>{
   menuUI.classList.toggle('menu-expanded')
   menuUI.classList.toggle('menu-collapsed')
   document.querySelector('body').classList.toggle('body-expanded')
});