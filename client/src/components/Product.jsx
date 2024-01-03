import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {backend_url} from "../App"

const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Do you want to delete the product?",
      showCancelButton: true,
      icon: "warning",
      confirmButtonColor: "#5cb85c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${backend_url}/products/${id}`);
        toast.success("Deleted the product");
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={product.image} className="w-full h-28 object-cover" />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">{product.name}</h2>
        <div className="text-sm">Quantity:{product.quantity}</div>
        <div className="text-sm">Price $ {product.price}</div>

        <div className="mt-2 flex gap-4">
          <Link
            to={`/edit/${[product._id]}`}
            className="inline-block w-full text-center shadow-md bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="inline-block w-full text-center shadow-md bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-500 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
