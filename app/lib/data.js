import { Product, User } from "./models"
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page) => {

    const regex = new RegExp(q,"i")

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB()
        const count = await User.find({username: {$regex: regex} }).count();
        const users = await User.find({username: {$regex: regex} }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE *(page-1));
        return {count,users}
    } catch (error) {
        console.log("error that occurred:",error.message)
        throw new Error("failed to fetch users")
    }
}

export const addProducts = async() =>{
    const products = [
        {
          "title": "Red T-Shirt",
          "desc": "A stylish red t-shirt made of 100% cotton.",
          "price": 19.99,
          "stock": 50,
          "img": "https://example.com/images/red-tshirt.jpg",
          "color": "Red",
          "size": "M"
        },
        {
          "title": "Blue Jeans",
          "desc": "Comfortable blue jeans with a modern fit.",
          "price": 49.99,
          "stock": 30,
          "img": "https://example.com/images/blue-jeans.jpg",
          "color": "Blue",
          "size": "L"
        },
        {
          "title": "Black Hoodie",
          "desc": "Warm and cozy black hoodie with a front pocket.",
          "price": 39.99,
          "stock": 20,
          "img": "https://example.com/images/black-hoodie.jpg",
          "color": "Black",
          "size": "S"
        },
        {
          "title": "White Sneakers",
          "desc": "Classic white sneakers with a comfortable fit.",
          "price": 59.99,
          "stock": 25,
          "img": "https://example.com/images/white-sneakers.jpg",
          "color": "White",
          "size": "10"
        },
        {
          "title": "Green Cap",
          "desc": "Adjustable green cap made of breathable material.",
          "price": 14.99,
          "stock": 40,
          "img": "https://example.com/images/green-cap.jpg",
          "color": "Green",
          "size": "One Size"
        },
        {
          "title": "Yellow Dress",
          "desc": "Elegant yellow dress perfect for summer outings.",
          "price": 79.99,
          "stock": 15,
          "img": "https://example.com/images/yellow-dress.jpg",
          "color": "Yellow",
          "size": "M"
        }
      ]

      try {
        Product.insertMany(products)
        console.log("done ");
      } catch (error) {
        console.log("error adding products:",error);
      }
}

export const fetchProducts = async (q,page) => {

    const regex = new RegExp(q,"i")

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB()
        const count = await Product.find({title: {$regex: regex} }).count();
        const products = await Product.find({title: {$regex: regex} }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE *(page-1));
        return {count,products}
    } catch (error) {
        console.log("error that occurred:",error.message)
        throw new Error("failed to fetch products")
    }
}

export const fetchUser = async (id) => {
  try {
      connectToDB()
     const user = await User.findById(id);
     return user;
  } catch (error) {
      console.log("error that occurred:",error.message)
      throw new Error("failed to fetch user!")
  }
}

export const fetchProduct = async (id) => {
  try {
      connectToDB()
     const product = await Product.findById(id);
     return product;
  } catch (error) {
      console.log("error that occurred:",error.message)
      throw new Error("failed to fetch product!")
  }
}