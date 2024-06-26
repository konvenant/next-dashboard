import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/pagination'
import styles from "../../dashboard/products/products.module.css"
import { fetchProducts } from "../../lib/data";
import { deleteProduct } from '../../lib/actions'


const ProductsPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
const page = searchParams?.page || 1;
  const {count,products} = await fetchProducts(q,page);
  console.log("products",products);
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a product..."/>
     <Link href="/dashboard/products/add" >
      <button className={styles.addButton} >Add New</button>
     </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
       {products.map((product) => (
         <tr key={product.id}>
         <td>
           <div className={styles.product}>
           <Image 
           src={products.img || "/noproduct.jpg"}
           alt=''
           width={40}
           height={40}
           className={styles.productImage}
           />
           {product.title}
           </div>
         </td>
         <td>{product.desc}</td>
         <td>{product.price}</td>
         <td>{product.createdAt && product.createdAt.toString().slice(4,16)}</td>
         <td>{product.stock}</td>
         <td>
          <div className={styles.buttons}>
          <Link href={`/dashboard/products/${product.id}`}>
             <button className={`${styles.button} ${styles.view}`}>View</button>
           </Link>
           <form action={deleteProduct} >
            <input type="hidden" value={product.id} name="id" />
           <button type="submit" className={`${styles.button} ${styles.delete}`}>Delete</button>
           </form>
           
          </div>
         </td>
         </tr>
       ))}
      </tbody>
    </table>
    <Pagination count={count} />

  </div>
  )
}

export default ProductsPage
