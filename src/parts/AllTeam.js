/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

export default function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-32 sm:gap-14 lg:gap-50 mx-20 justify-items-center">
        {
                    data.map((item, index) => (
                      <Fade bottom delay={200 * index}>
                        <div>
                          <div className="flex flex-col w-100 h-100 sm:w-100 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105">
                            <div className="flex justify-center xl:mb-5">
                              <img src={item.imageUrl} alt="Team Member" className="flex w-100 h-100" />
                            </div>
                            <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                            <p className="font-light text-gray-500 text-center mb-3">{item.position}</p>
                          </div>
                        </div>
                      </Fade>
                    ))
                }
      </div>
    </section>
  );
}
