class ProductManager{
    constructor(){
        this.products = []
    }
    getProducts(){
        return this.products
    }
    addProduct = (title,description,price,thumbnail,code,stock) =>{
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.length === 0 ? product.code = 0 : product.code = this.products.length
        this.products.push()
    }
    getProductsById(){
        return products.forEach(element => console.log(element.code));
    }
}

const product1 = new ProductManager()
console.log(product1)