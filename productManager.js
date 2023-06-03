class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('All fields are required');
            return;
        }

        if (this.products.some(p => p.code === code)) {
            console.error('Product with the same code already exists');
            return;
        }

        const product = {
            id: this.nextProductId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        console.log(`Product ${product.id} has been added`);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error('The product is not found');
        }
        return product;
    }
}

const manager = new ProductManager();

manager.addProduct('Product 1', 'Description 1', 10, 'thumbnail1.jpg', 'code1', 5);
manager.addProduct('Product 2', 'Description 2', 20, 'thumbnail2.jpg', 'code2', 10);

const products = manager.getProducts();
console.log(products);

const product = manager.getProductById(1);
console.log(product);

const nonExistingProduct = manager.getProductById(3);
console.log(nonExistingProduct);
