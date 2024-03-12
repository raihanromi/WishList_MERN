import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { backend_url } from "../App";
import { AuthContext } from "../context/authContext";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backend_url}/products/`);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(user);
    getProducts();
  }, []);

  return (
    <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {isLoading ? (
        "Loding"
      ) : (
        <>
          {products.length > 0 ? (
            <>
              {products.map((product, index) => {
                return (
                  <Product
                    key={index}
                    product={product}
                    getProducts={getProducts}
                  />
                );
              })}
            </>
          ) : (
            <div>There is no Product</div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
