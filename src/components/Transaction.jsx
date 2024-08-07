import React from 'react'
import TransactionItems from './TransactionItems'

const Transaction = ({ transactions,searchText }) => {
  return (
    <div  className=' flex justify-center text-center    '>
    <table className=' shadow-2xl  rounded-lg p-8 m-4 max-w-800  '>
        <thead >
       <tr className=" bg-orange-500">
        <th className=' p-4 border-2'>Description</th>
        <th className=' p-4 border-2'>Category</th>
        <th className=' p-4 border-2'>Amount</th>
        <th className=' p-4 border-2'>Date</th>
        </tr>
        </thead>
      {transactions
       .filter((transaction) =>
        searchText === '' || transaction.description.toLowerCase().includes(searchText.toLowerCase())
      )
      .map(transaction=> <TransactionItems

       key={transaction.id}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
        date={transaction.date}
        />


      )}  
    
    </table>
    </div>
  )
}

export default Transaction