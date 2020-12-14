import React from 'react'

import "./Produkter.css"

function Produkter() {
    return (
        <container>
            <h2>Produkter och priser</h2>
            <table>
                <tr>
                    <th>Produkt/Service</th>
                    <th>Pris (inkl mva)</th>
                </tr>
                <tr>
                    <td>Installation</td>
                    <td>4000 kr</td>
                </tr>
                <tr>
                    <td>Kamera</td>
                    <td>2000 kr</td>
                </tr>
                <tr>
                    <td>Fiber</td>
                    <td>9000 kr</td>
                </tr>
            </table>
        </container>

    )
}

export default Produkter
