import React, { useState, useEffect } from "react";
import ImageListe from "./ImageListe";
import Inputbox from "./Input";
import "../App.css";

const Allrobot = () => {
  const [Image, setImage] = useState([]);
  const [ListImage, setListImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let robot = "https://robohash.org/";
  let requete = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    try {
      fetch(requete).then(function (res) {
        res.json().then(function (data) {
          let newImage = data.map((user) => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: robot + 2 + user.id,
              address: user.address,
              phone: user.phone,
              website: user.website,
              company: user.company,
            };
          });
          setImage(newImage);
          setListImage(newImage);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  let handleChange = (input) => {
    try {
      let valeur = input.target.value.toLowerCase();
      findImage(valeur);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let findImage = (value) => {
    try {
      let regexp = new RegExp(value, "");
      let newImageFilter = Image.filter((element) => {
        return regexp.test(element.name.toLowerCase());
      });
      setListImage(newImageFilter);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container container-fluid">
      <Inputbox onChange={handleChange} />
      <ImageListe ListImage={ListImage} isLoading={isLoading} />
    </div>
  );
};

export default Allrobot;
