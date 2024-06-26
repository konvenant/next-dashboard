import React from 'react'
import Image from 'next/image'
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { fetchProduct } from '../../../lib/data';
import { updateProduct } from '../../../lib/actions';

const SingleProductPage = async ({params}) => {
  const {id} = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer} >
      <div className={styles.imgContainer} >
        <Image src={product.img || "/noavatar.png"} alt="" fill />
      </div>
      {product.title}
      </div>
      <div className={styles.formContainer} >
       <form className={styles.form} action={updateProduct}>
       <input type="hidden" name="id" value={product.id} />
         <label>Title</label>
        <input type="text" name='title' placeholder={product.title} />
        <label>Price</label>
        <input type="number" name='price' placeholder={product.price} />
        <label>Stock</label>
        <input type="number" name='stock' placeholder={product.stock}  />
        <label>Color</label>
        <input type="text" name='color' placeholder={product.color} />
        <label>Size</label>
       <textarea type="number" name='size' placeholder={product.size} />
              <label>Category</label>
              <select name='cat' id='cat' >
                <option value="kitchen" selected={product.cat === "kitchen"}>Kitchen</option>
                <option value="computers" selected={product.cat === "computers"}>Computers</option>
              </select>

              <label>Description</label>
              <textarea type="text" name='desc' placeholder={product.desc}   rows="10" id="desc" />
              <button type="submit" >Update</button>
       </form>
            
              </div>
    </div>
  )
}

export default SingleProductPage
