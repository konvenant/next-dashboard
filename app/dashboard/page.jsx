import React from 'react'
import styles from "./dashboard.module.css"
import Card from "../ui/dashboard/card/card"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Transactions from "../ui/dashboard/transaction/transaction"
import Chart from "../ui/dashboard/chart/chart"

const DashboardPage = () => {
  return (
    <div>
      <div className={styles.wrapper} >
        <div className={styles.main}>
        <div className={styles.card}>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Transactions/>
      <Chart />
        </div>
        <div className={styles.side}>
           <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage