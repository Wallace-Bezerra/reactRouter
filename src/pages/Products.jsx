import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";

function Products() {
  const url = "http://localhost:3000/products";
  const { id } = useParams();
  const { data: item } = useFetch(`${url}/${id}`);
  // console.log(data, "fetch");

  return (
    <>
      <h1>Products</h1>
      <h2>Id do Produto: {id}</h2>
      {item && (
        <Card key={item.id} id={item.id} name={item.name} price={item.price} />
      )}
    </>
  );
}

export default Products;
