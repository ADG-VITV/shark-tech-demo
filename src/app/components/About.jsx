import React from 'react';
import Card from './Card';
const About = () => {
  return (
    <div className="min-h-screen bg-pink flex flex-col pl-16 p-8">
      <div className=" mb-8 mr-24 ml-24">
        <h1 className="text-5xl text-white mt-4 font-inter font-xl font-bold">Why us?</h1>
      </div>

      <div className="flex flex-row justify-between ml-24 mr-24">
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="mt-12 mr-24 ml-24">
        <h2 className="text-6xl font-inter font-bold text-white ">Lorem ipsum dolor sit amet</h2>
        <p className="text-white text-xl mt-4 font-inter">
          Lorem ipsum dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus eos velit veritatis modi optio aliquam at officiis non rem quidem aspernatur facere asperiores nisi, sit eum et temporibus voluptatem. sit amet consectetur adipisicing elit. Quam nisi rerum consequatur eius alias, facilis veniam sunt sequi. Qui laboriosam vitae numquam sunt esse provident assumenda dolores hic et fuga!
        </p>
      </div>
    </div>
  );
};

export default About;
