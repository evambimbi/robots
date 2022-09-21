import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageListe from "./ImageListe";
import "../App.css";

const Onerobot = () => {
  const [robot, setRobot] = useState({});
  const { id } = useParams();
  let image = `https://robohash.org/${id}`;
  let requete = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    fetch(requete).then((res) => {
      res
        .json()

        .then((user) => {
          setRobot({
            id: user.id,
            name: user.name,
            email: user.email,
            image: image + user.id,
            address: user.address,
            phone: user.phone,
            website: user.website,
            company: user.company,
          });
        });
    });
  }, []);

  return (
    <div className="card detailRobot">
      <img src={robot.image} className="card-img-top" alt={robot.name} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{robot.name}</h5>
        <p className="card-text">{robot.email}</p>
        <p className="card-text">Adress: {robot.address?.suite}</p>
        <p className="card-text">Company: {robot.company?.name}</p>
        <p className="card-text">Website: {robot.website}</p>
      </div>
    </div>
  );
};

export default Onerobot;
