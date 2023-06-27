const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="/public/build/tailwind_output.css">
    
    <div class="flex flex-col bg-white rounded-2xl overflow-hidden md:flex-row">
    <div class="h-[150px] sm:h-[200px] overflow-hidden">
      <img
        class="h-full object-cover rounded-t-2xl bg-gray-500 md:rounded-none md:w-[600px] w-full"
        src=""
        alt=""
      />
    </div>
    <div
      class="gap-y-4 flex flex-col justify-between items-center overflow-hidden mx-4 py-3"
    >
      <h1 class="text-slate-800 font-semibold md:text-xl mt-2">رنگ های شاد ترند امسال نایک</h1>
      <p class="text-slate-800">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است...
      </p>
      <div class="w-full text-left">
        <a class="text-secondary cursor-pointer" href="#">ادامه مطلب</a>
      </div>
    </div>
  </div>
`

class Weblog extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

   
     
    connectedCallback () {
        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('cover'))
    }

}

export { Weblog }