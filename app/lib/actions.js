 "use server"

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import {signIn} from "../auth"

export const addUser = async(formData) => {
   
    const {username, email, password,phone, address,isAdmin,isActive} = Object.fromEntries(formData);

    try {
        connectToDB()
        const newUser = new User({
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
        });
        await newUser.save();
        console.log("done adding");
    } catch (error) {
        console.log("failed to create user:",error);
    }

    revalidatePath("/dashboard/users/")
    redirect("/dashboard/users/")
}


export const addProduct = async(formData) => {
   
    const {title,desc,price,stock,color,size} = Object.fromEntries(formData);

    try {
        connectToDB()
        const newProduct = new Product({
           title,
           desc,
           price,
           stock,
           color,
           size
        });
        await newProduct.save();
        console.log("done adding");
    } catch (error) {
        console.log("failed to create product:",error);
    }

    revalidatePath("/dashboard/products/")
    redirect("/dashboard/products/")
}


export const deleteProduct = async(formData) => {
   
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
        console.log("done deleting");
    } catch (error) {
        console.log("failed to delete product:",error);
    }

    revalidatePath("/dashboard/products/")
}

export const deleteUser = async(formData) => {
   
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB()
        await User.findByIdAndDelete(id)
        console.log("done deleting");
    } catch (error) {
        console.log("failed to delete user:",error);
    }

    revalidatePath("/dashboard/users/")
}


export const updateUser = async(formData) => {
   
    const {id,username, email, password,phone, address,isAdmin,isActive} = 
    Object.fromEntries(formData);

    try {
        connectToDB()
        const updateFields ={
            username, email, password,phone, address,isAdmin,isActive
        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
        
        console.log("fields to update:",updateFields);

        await User.findByIdAndUpdate(id,updateFields)
        console.log("done updating user");
    } catch (error) {
        console.log("failed to update user:",error);
    }

    revalidatePath("/dashboard/users/")
    redirect("/dashboard/users/")
}


export const updateProduct = async(formData) => {
   
    const {id,title,desc,price,stock,color,size} = Object.fromEntries(formData);

    try {
        connectToDB()
        const updateFields ={
            title,desc,price,stock,color,size
        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
        console.log("fields to update:",updateFields);
        await Product.findByIdAndUpdate(id,updateFields)
        console.log("done updating product");
    } catch (error) {
        console.log("failed to create product:",error);
    }

    revalidatePath("/dashboard/products/")
    redirect("/dashboard/products/")
}

export const authenticate = async(formData) => {
    const {username,password} = Object.fromEntries(formData)

        try {
            await signIn("credentials",{username,password})
        } catch (error) {
            console.log(error);
            return{error:"Wrong Credentials!"}
        }
    
}