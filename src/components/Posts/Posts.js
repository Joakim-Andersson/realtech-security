import { React, useState, useEffect } from "react";
import Blogitem from "./Blogitem"

import "./Posts.css"

const query = `
{
  blogpostCollection {
    items {
      title
      blogtext
      photo {
        url
      }
    }
  }
}
`

function Posts() {
    const [blogpost, setBlogpost] = useState(null);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/agah5t541uqs/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authenticate the request
                    Authorization: "Bearer PfsXvqWOP81opil_y9IZUajRi4tRiGr5rJrsAenAxeg",
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
                setBlogpost(data.blogpostCollection.items);
            });
    }, []);

    if (!blogpost) {
        return "Loading...";
    }

    return (
        <div className="blogposts">
            <header className="blogpost-header">
                <h1>Artiklar</h1>
            </header>
            {blogpost.length === 0 ? (<div className="no-blogposts-line"> <h3 className="no-blogposts" >New articles coming soon!</h3> </div>) : (
                <section className="blogsection"> {blogpost.map(
                    post => (<Blogitem title={post.title} imageURL={post.photo.url} text={post.blogtext} />))}
                </section>
            )}
        </div>
    );
}

export default Posts
