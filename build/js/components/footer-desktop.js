const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="/build/css/style.css">
    <footer class="relative bottom-0 right-0 left-0 mt-48 md:mt-[150px] md:flex md:flex-row">
      <div
        class="bg-primary w-full -md:h-60 flex items-center justify-center md:inline-block"
      >
        <section class="flex justify-evenly items-start">
          <div class="w-full flex justify-center">
            <div
              class="px-5 md:px-9 shadow-lg py-11 bg-white rounded-2xl absolute bottom-24 flex flex-col justify-between"
            >
              <div class="flex justify-between">
                <a href="https://github.com/masoumemohebbi">
                  <ion-icon
                    class="w-7 h-7 text-primary cursor-pointer"
                    name="logo-github"
                  ></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/masoume-mohebbi-838058227">
                  <ion-icon
                    class="w-7 h-7 text-primary cursor-pointer"
                    name="logo-linkedin"
                  ></ion-icon>
                </a>
                <span>
                  <ion-icon
                    class="w-7 h-7 text-primary cursor-pointer"
                    name="logo-whatsapp"
                  ></ion-icon>
                </span>
              </div>

              <div class="flex flex-col mt-8">
                <div class="flex flex-col gap-y-3">
                  <span class="text-slate-800 text-sm sm:text-base ">وب دیزاینر: شقایق</span>
                  <div class="flex gap-x-2">
                    <span class="text-slate-800 text-sm sm:text-base">آدرس لینکدین:</span>
                    <a href="https://www.linkedin.com/in/shaghayegh-safavi-957918203" class="text-slate-800 text-sm sm:text-base" dir="rtl">.../linkdin.com</a>
                  </div>
                </div>
                <hr class="my-5" />
                <div class="flex flex-col gap-y-3 ">
                  <span class="text-slate-800 text-sm sm:text-base ">وب دولوپر-فرانت‌اند: معصومه </span>
                  <div class="flex gap-x-2">
                    <span class="text-slate-800 text-sm sm:text-base ">لینک گیتهاب:</span>
                    <a class="text-slate-800 text-sm sm:text-base " href="https://github.com/masoumemohebbi">.../github.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden md:flex h-full md:items-end md:flex-col text-white text-lg pl-2 pt-12"
          >
            <div
              class="flex flex-col items-center justify-center w-[200px] p-6 md:gap-y-11"
            >
              <ul class="gap-y-4 flex flex-col items-center">
                <li><a href="/public/weblog.html">وبلاگ</a></li>
                <li><a href="/public/products.html">خانم‌ها</a></li>
                <li><a href="/public/products.html">آقایان</a></li>
                <li><a href="/public/products.html">کودک</a></li>
              </ul>
              <p>All rights reserved</p>
            </div>
          </div>
        </section>
      </div>
      <!-- ?map -->
      <iframe
        class="md:w-1/2 h-[21rem] hidden md:block"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203278.11906602164!2d49.439998396736506!3d37.24247293938974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff5620d43f15675%3A0x41dd40f9931cfbf6!2sRasht%2C%20Gilan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1685619398371!5m2!1sen!2s"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
`

class FooterDesktop extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

   
     
    connectedCallback () {
             
    }

}

export { FooterDesktop }
