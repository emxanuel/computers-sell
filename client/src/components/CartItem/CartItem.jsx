import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/features/cart/cartSlice";

export default function CartItem({ item, onRemove }) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center space-x-4 relative">
                <div className="w-32 h-32 md:w-16 md:h-16 flex items-center justify-center">
                    <img
                        className="object-cover rounded-lg mix-blend-multiply"
                        src={item.image}
                        alt={item.name}
                    />
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold">
                            {item.name} x {item.quantity}
                        </h3>
                        <Button
                            onClick={() => dispatch(addToCart(item))}
                            className="h-6 md:h-7 p-0 rounded-md w-8 md:w-7 min-w-0"
                            variant="bordered"
                            color="success"
                        >
                            +
                        </Button>
                        <Button
                            onClick={() => dispatch(removeFromCart(item))}
                            className="h-6 md:h-7 p-0 rounded-md w-8 md:w-7 min-w-0"
                            variant="bordered"
                            color="danger"
                        >
                            -
                        </Button>
                    </div>
                    <p className="text-gray-500">${item.price}</p>
                </div>
            </div>
            <button className="text-red-500 hidden md:block" onClick={onRemove}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
}
