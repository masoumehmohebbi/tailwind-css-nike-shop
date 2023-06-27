const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="/public/build/tailwind_output.css">

    <div
    class="fixed bottom-0 z-50 left-0 right-0 flex w-full items-center rounded-tr-md rounded-tl-md border border-t-2 bg-white px-2 shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] md:hidden"
  >
    <div class="w-full">
      <ul
        id="bottom-navigation"
        class="flex w-full items-center justify-between gap-x-2"
      >
        <li class="flex-auto text-xs font-bold">
          <a href="/public/index.html" class="flex w-full items-center justify-center py-4" href="#">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.79 22.75H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2C10.18 1 12.77.94 14.45 2.12l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96zM9.48 3.44l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09z"
                />
                <path
                  d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"
                />
              </svg>
            </span>
            <span class="mr-1 text-slate-800">خانه</span>
          </a>
        </li>
        <li class="flex-auto text-xs font-bold">
          <a class="flex w-full items-center justify-center py-4" href="#">
            <span class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16.49 22.75H7.5c-1.72 0-3.01-.46-3.81-1.37-.8-.91-1.11-2.23-.9-3.94l.9-7.5c.26-2.21.82-4.19 4.72-4.19h7.2c3.89 0 4.45 1.98 4.72 4.19l.9 7.5c.2 1.71-.1 3.04-.9 3.94-.83.91-2.11 1.37-3.84 1.37ZM8.4 7.25c-2.88 0-3.02 1.14-3.23 2.86l-.9 7.5c-.15 1.27.03 2.2.54 2.77.51.57 1.41.86 2.69.86h8.99c1.28 0 2.18-.29 2.69-.86.51-.57.69-1.5.54-2.77l-.9-7.5c-.21-1.73-.34-2.86-3.23-2.86H8.4Z"
                ></path>
                <path
                  d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75Z"
                ></path>
              </svg>
            </span>
            <h1 class="mr-1 text-slate-800" style="display: none">سبد خرید</h1>
          </a>
        </li>
        <li class="flex-auto text-xs font-bold">
          <a class="flex w-full items-center justify-center py-4" href="#">
            <span class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                ></path>
              </svg>
            </span>
            <span class="mr-1 text-slate-800"  style="display: none">دسته بندی</span>
          </a>
        </li>
        <li class="flex-auto text-xs font-bold">
          <a class="flex w-full items-center justify-center py-4" href="#">
            <span class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"
                ></path>
              </svg>
            </span>
            <span class="mr-1 text-slate-800" style="display: none">علاقه مندی ها</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
`

class FooterMobile extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

   
     
    connectedCallback () {
        const bottonNav = this.shadowRoot.querySelector('#bottom-navigation');

        for (let i = 0; i < bottonNav.children.length; i++) {
          bottonNav.children[i].addEventListener('click', function (e) {
            for (const tab of bottonNav.children) {
              tab.children[0].children[1].style.display = 'none';
              tab.children[0].children[0].classList.add('text-gray-400');
            }
            this.children[0].children[1].style.display = 'block';
            this.children[0].children[0].classList.remove('text-gray-400');
          });
        }
      
        
    }

}

export { FooterMobile }