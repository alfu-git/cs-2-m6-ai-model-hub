import React, { use, useState } from "react";
import "./ModelsContainer.css";
import ModelCard from "./ModelCard/ModelCard";
import List from "./ListContainer/List";
import { toast } from "react-toastify";

const ModelsContainer = ({ modelDataPromise }) => {
  const modelData = use(modelDataPromise);

  const [tabName, setTabName] = useState("model");
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleTabBtn = (tab) => {
    setTabName(tab);
  };

  const getSelectedCard = (model) => {
    setCartList([...cartList, model]);
    setTotalAmount(totalAmount + model.price);
  };

  const handlePaymentBtn = () => {
    setCartList([]);

    toast(
      <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
        Payment Successful!
      </span>,
    );
  };

  return (
    <section className="mb-20 container mx-auto px-5 border-t border-[gray]/10 rounded-t-xl p-2">
      <div>
        <div>
          {/* tab btn */}
          <div className="mb-7 sm:mb-15 flex justify-center">
            <div className="flex">
              <button
                className={`
                  btn w-25 sm:w-50
                  ${tabName === "model" ? "tab-active" : "tab-inactive"}
                `}
                onClick={() => handleTabBtn("model")}
              >
                Models
              </button>

              <button
                className={`
                  btn w-25 sm:w-50
                  ${tabName === "cart" ? "tab-active" : "tab-inactive"}
                `}
                onClick={() => handleTabBtn("cart")}
              >
                Cart <span>({cartList.length})</span>
              </button>
            </div>
          </div>

          {/* title and card section */}
          {tabName === "model" && (
            <div>
              {/* title */}
              <div>
                <div className="mb-16 text-center">
                  <h2 className="mb-4 text-4xl sm:text-5xl font-bold">
                    Choose Your AI Model
                  </h2>
                  <p className="text-lg sm:text-xl text-zinc-400">
                    One subscription gives you access to all frontier AI models
                  </p>
                </div>
              </div>

              {/* card section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {modelData.map((model) => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    cartList={cartList}
                    getSelectedCard={getSelectedCard}
                  />
                ))}
              </div>
            </div>
          )}

          {/* empty dashboard */}
          {tabName === "cart" && cartList.length === 0 && (
            <div className="py-20">
              <p className="text-4xl text-zinc-400 text-center">
                Your cart is empty
              </p>
            </div>
          )}

          {/* list container */}
          {tabName === "cart" && cartList.length !== 0 && (
            <div className="max-w-4xl mx-auto md:px-6">
              <div>
                <h2 className="mb-10 text-5xl font-bold">Your Cart</h2>

                <div className="space-y-6">
                  {cartList.map((list) => (
                    <List
                      key={list.id}
                      list={list}
                      cartList={cartList}
                      setCartList={setCartList}
                      totalAmount={totalAmount}
                      setTotalAmount={setTotalAmount}
                    />
                  ))}
                </div>

                <div className="mt-12 mb-6 p-8 bg-[#18181B] border border-zinc-700 rounded-3xl flex justify-between">
                  <span className="text-3xl font-bold text-base-100">
                    Total
                  </span>
                  <span className="text-3xl text-red-400 font-bold">
                    ${totalAmount}
                  </span>
                </div>

                <button
                  onClick={handlePaymentBtn}
                  className="btn mt-8 py-9 w-full rounded-2xl bg-red-600 hover:bg-red-500 active:bg-red-700 shadow-xl shadow-red-500/30 text-base-100 text-2xl font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModelsContainer;
