const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="/build/css/style.css">

    <nav
    class="md:flex md:items-center md:justify-between px-5 pb-7 pt-5 md:bg-[#E5E5E5]"
  >
    <span class="hidden md:flex">
    <a href="/public/index.html" class="cursor-pointer">
    <img src="../assets/images/nike-logo-black.png" alt="nike-shop-logo" />
    </a>
    </span>
    <ul
      class="sidebar pt-[3.6rem] transition-[left] duration-[0.5s] z-10 h-screen md:h-0 top-0 -left-[40rem] md:left-0 md:flex bg-white md:bg-transparent md:items-center md:z-auto fixed md:static -sm:w-48 w-[300px] md:w-auto md:py-0 py-4 md:pl-0 text-center"
    >
      <li class="w-full my-6 md:my-0 md:px-7 md:mx-1 font-medium cursor-pointer mt-6">
        <a class="text-lg text-slate-800 md:text-xl hover:text-primary duration-500"><slot name="item_1"></slot></a>
      </li>
      <li class="w-full my-6 md:my-0 md:px-7 md:mx-1 font-medium cursor-pointer">
        <a class="text-lg text-slate-800 md:text-xl hover:text-primary duration-500"><slot name="item_2"></slot></a>
      </li>
      <li class="w-full my-6 md:my-0 md:px-7 md:mx-1 font-medium cursor-pointer">
        <a  class="text-lg text-slate-800 md:text-xl hover:text-primary duration-500"><slot name="item_3"></slot></a>
      </li>
      <li class="w-full my-6 md:my-0 md:px-7 md:mx-1 font-medium cursor-pointer">
        <a class="text-lg text-slate-800 md:text-xl hover:text-primary duration-500"><slot name="item_4"></slot></a>
      </li>
    </ul>
    <div class="md:justify-between md:flex grid grid-cols-3 md:items-center ">
     <article class="col-span-1 grid justify-start">
     <div class="text-2xl ">
     <a href="/public/shoppingCart.html">
     <span
       class="text-2xl p-1 border-[rgba(55, 73, 87, 0.2)] border-2 md:border-none rounded-lg flex items-center justify-center"
     >
       <svg
         class="cursor-pointer fill-slate-800"
         width="24"
         height="24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M16.49 22.75H7.5c-1.72 0-3.01-.46-3.81-1.37-.8-.91-1.11-2.23-.9-3.94l.9-7.5c.26-2.21.82-4.19 4.72-4.19h7.2c3.89 0 4.45 1.98 4.72 4.19l.9 7.5c.2 1.71-.1 3.04-.9 3.94-.83.91-2.11 1.37-3.84 1.37ZM8.4 7.25c-2.88 0-3.02 1.14-3.23 2.86l-.9 7.5c-.15 1.27.03 2.2.54 2.77.51.57 1.41.86 2.69.86h8.99c1.28 0 2.18-.29 2.69-.86.51-.57.69-1.5.54-2.77l-.9-7.5c-.21-1.73-.34-2.86-3.23-2.86H8.4Z"
          
         />
         <path
           d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75Z"
          
         />
       </svg>
     </span>
     </a>
   </div>
     </article>
      <span class="hidden md:flex md:p-1 md:mx-3 md:items-center md:justify-center">
        <svg
          class="cursor-pointer fill-slate-800"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
          ></path>
        </svg>
      </span>
      <a href="/public/products.html" class="hidden md:flex md:p-1  md:items-center md:justify-center">
        <svg
          class="cursor-pointer "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #1e293b"
        >
          <path
            d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
          ></path>
        </svg>
      </a>
      <span class="md:hidden  col-span-1 grid justify-center">
      <a href="/public/index.html" class="cursor-pointer ">
      <img src="../assets/images/nike-logo-black.png" alt="nike-shop-logo" />
      </a>
    </span>
     <article class="col-span-1 grid justify-end">
  

   <span
     class="text-xl cursor-pointer  md:hidden md:absolute left-5 md:right-0"
   >
     <div
       id="hamburger-icon"
       class="p-1 flex justify-center items-center border-[rgba(55, 73, 87, 0.2)] border-2 rounded-lg"
     >
       <ion-icon id="menu" name="menu"></ion-icon>
     </div>
   </span>
     </article>
    </div>
  </nav>
`

class Header extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    Menu = (e) =>{
        e.name === 'menu' ? (e.name = 'close') : (e.name = 'menu');

      }
     
    connectedCallback () {
     
        const body = document.querySelector('.body');
        this.shadowRoot.querySelector('#menu').addEventListener('click', (e) => {
            this.Menu(e.target)
            body.classList.toggle('body-blur');
            this.shadowRoot.querySelector('.sidebar').classList.toggle('change-sidebar');
            this.shadowRoot.querySelector('#hamburger-icon').classList.toggle('change-hamburger-icon');
        });
        
    }

}

export { Header }