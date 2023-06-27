import { Header } from "./components/header.js";
import { FooterMobile } from "./components/footer-mobile.js";
import { FooterDesktop } from "./components/footer-desktop.js";
import { Weblog } from "./components/weblog.js";
import { CartProduct } from "./components/cart-product.js";
import { ShoeBox } from "./components/shoe-box.js";

window.customElements.define('nikeshop-header', Header)
window.customElements.define('nikeshop-footermobile', FooterMobile)
window.customElements.define('nikeshop-footerdesktop', FooterDesktop)
window.customElements.define('nikeshop-weblogitem', Weblog)
window.customElements.define('nikeshop-cartproduct', CartProduct)
window.customElements.define('nikeshop-shoebox', ShoeBox)