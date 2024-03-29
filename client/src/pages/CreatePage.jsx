import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { backend_url } from "../App";
import { AuthContext } from "../context/authContext";


const CreatePage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {user} = useContext(AuthContext)

  const saveProduct = async (e) => {
    e.preventDefault();
    if (name === "" || quantity === "" || price === "" || image === "") {
      alert("fill up all the input filed");
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${backend_url}/products/addproduct`,
        {
          name: name,
          quantity: quantity,
          price: price,
          image: image,
          userId:user._id
        }
      );
      toast.success(`Save ${response.data.name}`);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Create a product for the wishlist
      </h2>
      <form onSubmit={saveProduct}>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Quantity"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Price"
            />
          </div>
          <div>
            <label>Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Image"
            />
          </div>
          <div>
            {!isLoading && (
              <button className="block w-full mt-6 bg-blue-700 text-white rounded px-4 py-2 font-bold hover:bg-blue-600 hover:cursor">
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
