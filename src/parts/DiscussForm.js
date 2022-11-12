/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'elements/Form';
import Button from 'elements/Button';

export default function DiscussForm(props) {
  const { data, resetForm } = props;

  const submitEmail = () => {
    const {
      name, lname, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${lname} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (
      name !== ''
            && lname !== ''
            && email !== ''
            && phone !== ''
            && projectIdea !== ''
    ) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success('Terimakasih sudah mengisi, sampai jumpa!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Gagal, ayo coba lagi.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade bottom>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Yuk Kenalan</h1>

        <p className="font-light text-lg text-gray-400 text-center mb-12">          
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Isi sesuai dengan data yang valid.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="First name"
              className=""
              onChange={props.onChange}
            />
            <Form
              id="lname"
              name="lname"
              type="text"
              value={data.lname}
              placeholder="Last Name"
              className=""
              onChange={props.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={props.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={props.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Tuliskan Pesan"
              className=""
              onChange={props.onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-blue text-white rounded-full border-2 border-theme-blue hover:bg-dark-theme-blue border-blue-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
}
