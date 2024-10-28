import React from "react";

const Partner = () => {
  const images = [
    "https://i.postimg.cc/y6QcYhqj/Adidas-logo-1991-1-600x319.png",
    "https://i.postimg.cc/MGSjrdR6/c9024bfa05b9b452ae28ac916cd3a267.png",
    "https://i.postimg.cc/4NjcpJxh/images.png",
    "https://i.postimg.cc/vmt6RfLW/tommy-hilfiger3583-logowik-com.webp",
    "https://i.postimg.cc/MpRQDhn3/TOM-TAILOR-Logo.png",
  ];
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold">Our Partners</h2>
          <p className="text-lg">Take a look of our exclusive partner</p>
        </div>
        <div className="flex justify-between gap-5 items-center ">
          {images.map((image, index) => (
            <div key={index} className="">
              <img src={image} alt={`Partner Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
