import React, { useEffect, useState } from "react";

const ImgGallary = () => {
  const [foto, setfoto] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setfoto(data));
  }, []);
  return (
    <div>
      {/* {foto
        ? foto.map((foto) => {
            return (
              <div key={foto.id}>
                <h4>{foto.title}</h4>
                <p>{foto.id}</p>
              </div>
            );
          })
        : "no thing"} */}
    </div>
  );
};

export default ImgGallary;
