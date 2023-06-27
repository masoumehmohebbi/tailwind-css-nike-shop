const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="/public/build/tailwind_output.css">
    
    <div class="w-full p-2 rounded-2xl bg-white shadow-md flex flex-col">
    <div class="relative">
      <svg
        class="absolute left-0 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 1)"
      >
        <path
          d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"
        ></path>
      </svg>
    </div>
    <div class="object-cover w-5/6 mb-6 mx-auto">
      <img
        class="h-full w-full object-cover"
        src=""
        alt=""
      />
    </div>
    <div class="flex flex-col">
      <span class="font-extrabold text-sm text-slate-800">مدل Air Max 97</span>
      <div class="flex items-center justify-between">
        <span class="font-bold text-sm text-primary">$20.99</span>
        <span class="flex items-center justify-center cursor-pointer">
          <a href="../public/productDetails.html" class="text-secondary text-lg"
            >خرید</a
          >
          <svg
            class="fill-secondary stroke-secondary"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 0 1 0-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
`

class ShoeBox extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

   
     
    connectedCallback () {
        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('cover'))
    }

}

export { ShoeBox }