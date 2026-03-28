import React from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, getSelectedCard, cartList }) => {
  const isSelected = cartList.find((m) => m.title === model.title);

  const handleSubscribeBtn = (model) => {
    if (!isSelected) {
      getSelectedCard(model);

      toast.success(
        <div>
          <p>
            <span className="text-fuchsia-500 font-bold">{model.title}</span>{" "}
            added to cart!
          </p>
        </div>,
      );
    } else {
      toast.warning(
        <div>
          <p>
            <span className="text-gray-400 font-bold">{model.title}</span>{" "}
            already in cart!
          </p>
        </div>
      );
    }
  };

  return (
    <div className="border border-zinc-300 rounded-3xl shadow-lg overflow-hidden group">
      <div className="relative h-56 bg-zinc-200 overflow-hidden flex justify-center items-center">
        <div>
          <img
            width={160}
            height={160}
            src={model.image}
            className={`
              ${model.title !== "Qwen" ? "transition-transform duration-300 group-hover:scale-110" : ""}
              `}
          />
        </div>

        <div
          className={`
            px-3 py-1 text-base-100 text-sm font-semibold rounded-full flex gap-0.5 items-center absolute top-4 right-4
            ${
              model.status === "popular"
                ? "bg-red-600"
                : model.status === "favourite"
                  ? "bg-[#FF6900]"
                  : "bg-[#FE9A00]"
            }
            `}
        >
          <span>
            {model.status === "popular"
              ? "🔥"
              : model.status === "favourite"
                ? "❤️"
                : "⭐"}
          </span>
          <span>
            {model.status === "popular"
              ? "POPULAR"
              : model.status === "favourite"
                ? "FAVOURITE"
                : "MOST WANTED"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold">{model.title}</h3>
        <p className="mb-6 text-sm text-zinc-400 line-clamp-2">
          {model.description}
        </p>

        <div className="mb-6 flex gap-1 items-baseline">
          <span
            className={`
              text-3xl font-bold
              ${model.price === 0 ? "text-emerald-400" : ""}
            `}
          >
            {model.price !== 0 && "$"}
            {model.price === 0 ? "Free" : model.price}
          </span>

          <span className="text-zinc-500">
            {model.price !== 0 ? "/month" : ""}
          </span>
        </div>

        <button
          onClick={() => handleSubscribeBtn(model)}
          className={`
            btn mt-auto py-7 w-full rounded-2xl text-lg font-semibold
            ${
              isSelected
                ? "bg-zinc-500 hover:bg-zinc-400"
                : "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-500/30 text-base-100"
            }
            `}
        >
          {isSelected ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
