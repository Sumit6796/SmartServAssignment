import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://s3.amazonaws.com/open-to-cors/assignment.json"
      );
      setData(res.data.products);
    }

    getData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Product List</h1>
      {data &&
        Object.values(data)
          .sort((a, b) => b.popularity - a.popularity)
          .map((product, i) => {
            return (
              <ul
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "3px solid black",
                  padding: "10px"
                }}
              >
                <div>
                  <h2>{product.title}</h2>
                  <h5>Price: ${product.price}</h5>
                  <h6>Category: {product.subcategory}</h6>
                </div>
              </ul>
            );
          })}
    </div>
  );
}
