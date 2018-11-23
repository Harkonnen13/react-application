import EventEmitter from 'events';

let instance;

class CartManager extends EventEmitter {

    static get instance(){
        return instance || (instance = new CartManager());
    }

    static get events() { 
        return {
            cartChanged: 'cartChanged'
        }; 
    }

    constructor(){
        super();
        if(instance)
            return instance;
        this.cartKey = 'lp-cart';
        this.cart = this.getCart();
        instance = this;
    }

    getCart(){
        let newCart = { };
        try{
            let cart = JSON.parse(window.sessionStorage.getItem(this.cartKey));
            if(!cart){
                cart = newCart;
                this.setCart(cart);
            }
            return cart;  
        }
        catch{
            this.setCart(newCart);
            return newCart; 
        }
    }

    setCart(cart){
        window.sessionStorage.setItem(this.cartKey, JSON.stringify(cart));
    }

    addProduct = (product) => {
        if(this.cart[product.id])
            this.cart[product.id].count++;
        else
            this.cart[product.id] = { data: product, count: 1 };
        this.setCart(this.cart);
        this.emit(CartManager.events.cartChanged, this.cart);
    }

    changeProduct = (product, count) =>{
        this.cart[product.id].count = count;
        this.setCart(this.cart);
        this.emit(CartManager.events.cartChanged, this.cart);
    }

    deleteProduct = (product) => {
        if(this.cart[product.id])
            this.cart[product.id] = null;
        this.setCart(this.cart);
        this.emit(CartManager.events.cartChanged, this.cart);
    }
}

export default CartManager;