import './ResultsTable.css'
import React from 'react'

export default function ResultsTable({ results }) {
    let table = results.map((value, index) =>
        <tr key={index}>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.dietaryRestriction}</td>
            <td>{value.city}</td>
            <td>{value.province}</td>
            <td>{value.paymentType}</td>
        </tr>
    )
    return <table>
        <thead><tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Dietary Restriction</th>
            <th>City</th>
            <th>Province</th>
            <th>Payment Method</th>
        </tr>
        </thead>
        <tbody>
            {table}
        </tbody>
    </table>
}
