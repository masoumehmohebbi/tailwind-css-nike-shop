const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="/public/build/tailwind_output.css">
 
    <article
    class="bg-white  shadow-md px-5 py-3 sm:justify-around border border-[#c4c4c4] rounded-2xl flex -xs:flex-col flex-row items-center"
  >
    <div class="md:h-[150px]">
      <img
        class="rounded-lg object-cover h-full"
        src=""
        alt="product"
      />
    </div>
    <div
      class="-xs:h-[1px] -xs:w-full -xs:my-2 w-[1px] h-40 bg-[#c4c4c4] mx-2"
    ></div>
    <div class="flex flex-col gap-y-6 items-center text-base">
      <span class="flex text-sm sm:text-base">
        <h1 class="font-black text-slate-800">کفش نایکی مدل Air max CSS</h1>
      </span>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <span class="flex gap-x-2 items-center col-span-1">
          <h1 class="text-slate-800">سایز:</h1>
          <input
            class="w-9 h-7 rounded-xl text-slate-800 border border-[#c4c4c4] text-center"
            type="text"
            value="38"
          />
        </span>
        <span class="flex gap-x-2 items-center col-span-1">
          <h1 class="text-slate-800">تعداد:</h1>
          <input
            class="w-9 h-7 text-slate-800 rounded-xl border border-[#c4c4c4] text-center"
            type="text"
            value="1"
          />
          <span class="flex md:flex-col md:ml-3 gap-x-1 md:gap-x-0">
            <ion-icon
              class="cursor-pointer text-secondary text-lg"
              name="add-circle-outline"
            ></ion-icon>
            <ion-icon
              class="cursor-pointer text-lg"
              name="remove-circle-outline"
            ></ion-icon>
          </span>
        </span>
        <span class="flex gap-x-2 items-center col-span-1">
          <h1 class="text-slate-800">رنگ:</h1>
          <span class="text-slate-800">آبی</span>
        </span>
        <span class="flex gap-x-2 items-center col-span-1">
          <h1 class="text-slate-800">قیمت:</h1>
          <span class="text-slate-800">120$</span>
        </span>
      </div>
    </div>
  </article>
`

class CartProduct extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

   
     
    connectedCallback () {
        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('cover')) 
    }

}

export { CartProduct }