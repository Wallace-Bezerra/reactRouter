
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const url = "http://localhost:3000/products";
  const { data, error, loading } = useFetch(url);
  console.log(data);
  return (
    <div>
      <h1>Produtos</h1>
      {/* {error && <p>{error}</p>} */}
      <ul className="products">
        {data &&
          data.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
              />
            );
          })}
      </ul>
    </div>
  );
};
