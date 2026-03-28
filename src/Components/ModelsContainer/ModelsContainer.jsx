import React, { use, useState } from "react";
import "./ModelsContainer.css";
import ModelCard from "./ModelCard/ModelCard";

const ModelsContainer = ({ modelDataPromise }) => {
  const modelData = use(modelDataPromise);
  console.log(modelData);

  const [tabName, setTabName] = useState("model");

  const handleTabBtn = (tab) => {
    setTabName(tab);
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
                Cart <span>(0)</span>
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
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            </div>
          )}

          {/* empty dashboard */}
          {
            tabName === 'cart' && (
              <div className="py-20">
                <p className="text-4xl text-zinc-400 text-center">Your cart is empty</p>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default ModelsContainer;
