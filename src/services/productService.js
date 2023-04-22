import axios from 'axios';

var data = [
    {
        id: "123475856",
        code:"tee1",
        image: "black-tee.jpg",
        title: "t-shirt",
        price: 10.09,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"t-shirts",
    },
    {
        
        id: "1234583256",
        code:"shorts1",
        image: "bskt-short.jpg",
        title: "shorts",
        price: 20.39,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"shorts",
    },
    {
        
        id: "1256",
        code:"shorts2",
        image: "bskt-shorts-2.jpg",
        title: "shorts",
        price: 20.79,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"shorts",
    },
    {
        
        id: "12388456",
        code:"pants1",
        image: "cargo-pants.jpg",
        title: "pants",
        price: 30.49,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"pants",
    },
    {
        
        id: "12583456",
        code:"shorts3",
        image: "cargo-shorts.jpg",
        title: "shorts",
        price: 20.99,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"shorts",
    },
    {
        
        id: "121113456",
        code:"shorts4",
        image: "shorts.jpg",
        title: "shorts",
        price: 25.09,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"shorts",
    },
    {
        
        id: '123228456',
        code:"tee2",
        image: "images-tee-1.jpg",
        title: "t-shirt",
        price: 25.19,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"t-shirts",
    },
    {
        
        id: "123456ghjdtyj",
        code:"tee3",
        image: "images-tee-2.jpg",
        title: "t-shirt",
        price: 25.99,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"t-shirts",
    },
    {
        
        id: "54rj6ey5yj",
        code:"pants2",
        image: "slacks.jpg",
        title: "pants",
        price: 35.49,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"pants",
    },
    {
        
        id: "5+hj4h5m4sh",
        code:"pants3",
        image: "slacks-2.jpg",
        title: "pants",
        price: 35.25,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"pants",
    },
    {
        
        id: "123456gnrn54",
        code:"tee4",
        image: "turq-tee.jpg",
        title: "t-shirt",
        price: 10.88,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"t-shirts",
    },
    {
        
        id: "123456dfbaeb",
        code:"tee5",
        image: "white-tee.jpg",
        title: "t-shirt",
        price: 10.65,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"t-shirts",
    },
    {
        
        id: "12456++h",
        code:"pants4",
        image: "wrk-pants.jpg",
        title: "pants",
        price: 35.98,
        minimun: 1,
        stock: 10,
        discount: 10,
        category:"pants",
    },
];

/**
 * server endpoint
 * get
 * /api/products => get everyones products
 * /api/products/<yourname>  =>  get your products 
 * post
 * /api/products => save products onto the DB
 * delete
 * /api/products/clear/<yourname> => delete your prods from the DB
 */
class ProductService {
    serverUrl = "https://fauxmerch-c0165fvdx-chriscod91.vercel.app";

    async getCatalog(){
        
        let response = await axios.get(this.serverUrl +"/api/products/chris");
        return response.data;
        //todo: logic to connect to server and retrieve the catalog
        
    }

    async seedData() {
        // send data from the array on the top to the server
        for(let i=0; i <data.length; i++){
            let prod = data[i];
            prod.name = "chris";
        await axios.post(this.serverUrl + "/api/products", prod);
        }
    }
}

export default ProductService;