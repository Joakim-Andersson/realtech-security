import { React, useState, useEffect } from "react";

import "./Produkter.css"

const query = `
{
    articleListCollection {
      items {
       table 
      }
    }
  }`
  

function Produkter({spaceID, deliveryID}) {
    const [tableOfProducts, setTableOfProducts] = useState(null);


    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceID}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authenticate the request
                    Authorization: `Bearer ${deliveryID}`,
                },
                // send the GraphQL query
                body: JSON.stringify({ query }),
            })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }

                // rerender the entire component with new data
                setTableOfProducts(data.articleListCollection.items[0].table.tableData);
            });
    }, []);


    return (
        <div>
            {tableOfProducts}
        </div>

    )
}

export default Produkter
