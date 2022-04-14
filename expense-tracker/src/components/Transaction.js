import React from 'react'

export const Transaction = ( transaction ) => {
    console.log(transaction)
    return (
        <li className="minus">
            {transaction.text} <span>-$400</span><button class="delete-btn">x</button>
        </li>
    )
}
