import { X } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const List = ({ list, cartList, setCartList, totalAmount, setTotalAmount }) => {
  const handleListRemoveBtn = (list) => {
    const removeList = cartList.filter((l) => l.title !== list.title);
    setCartList(removeList);
    setTotalAmount(totalAmount - list.price);

    toast.error(
      <div>
        <p>
          <span className="text-red-600 font-bold">{list.title}</span> removed
          from the cart!
        </p>
      </div>,
    );
  };

  return (
    <div className="p-3 bg-zinc-100 border border-zinc-300 hover:border-red-600/50 rounded-3xl ">
      <div className="flex justify-between md:items-center gap-5">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="p-3 bg-base-100 rounded-2xl flex items-center justify-center">
            <img className="w-20" src={list.image} />
          </div>

          <div>
            <h5 className="text-2xl font-semibold">{list.title}</h5>
            <p className="mt-1 max-w-120 md:max-w-100 lg:max-w-140 xl:max-w-120 text-zinc-400 text-sm">
              {list.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start lg:items-center md:gap-y-0 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">${list.price}</span>
            <span className="text-zinc-500 text-sm text-center">per month</span>
          </div>

          <button
            onClick={() => handleListRemoveBtn(list)}
            className="btn p-0 bg-zinc-100 border-none shadow-none hover:shadow-none text-zinc-500 hover:text-red-500"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
