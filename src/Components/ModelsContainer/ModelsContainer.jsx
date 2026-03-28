import React from 'react';
import "./ModelsContainer.css";

const ModelsContainer = () => {
  return (
    <section className='mb-20 container mx-auto px-5 border-t border-[gray]/10 rounded-t-xl p-2'>
      <div>
        <div>
          {/* tab btn */}
          <div className='mb-15 flex justify-center'>
            <div className='space-x-10'>
              <button className={`
                  tab-active
                `}>
                Models
              </button>
              <button className={`
                  tab-inactive
                `}>
                Cart <span>(0)</span>
              </button>
            </div>
          </div>

          {/* title */}
          <div>
            <div className='mb-16 text-center'>
              <h2 className='mb-4 text-5xl font-bold'>Choose Your AI Model</h2>
              <p className='text-xl text-zinc-400'>One subscription gives you access to all frontier AI models</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsContainer;