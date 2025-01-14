import React from 'react'
import Image from 'next/image'
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import { fetchUser } from '../../../lib/data';
import { updateUser } from '../../../lib/actions';

const SingleUserPage = async ({params}) => {

  const {id} = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer} >
      <div className={styles.imgContainer} >
        <Image src={user.img || "/noavatar.png"} alt="user image" fill />
      </div>
      {user.username}
      </div>
      <div className={styles.formContainer} >
       <form className={styles.form} action={updateUser}>
        <input type="hidden" name="id" value={user.id} />
         <label>UserName</label>
        <input type="text" name='username' placeholder={user.username} />
        <label>Email</label>
        <input type="email" name='email' placeholder={user.email} />
        <label>Password</label>
        <input type="password" name='password'  />
        <label>Phone</label>
        <input type="phone" name='phone' placeholder={user.phone} />
        <label>Address</label>
       <textarea type="text" name='address' placeholder={user.address} />
              <label>Is Admin?</label>
              <select name='isAdmin' id='isAdmin' >
                <option value={true} selected={user.isAdmin} >Yes</option>
                <option value={false} selected={!user.isAdmin} >No</option>
              </select>

              <label>Is Active?</label>
              <select name='isActive' id='isActive'  >
                <option value={true} selected={user.isActive} >Yes</option>
                <option value={false} selected={!user.isActive} >No</option>
              </select>
              <button type="submit" >Update</button>
       </form>
            
              </div>
    </div>
  )
}

export default SingleUserPage
