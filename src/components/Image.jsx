import { Routes, Route, Link } from "react-router-dom";

const Image = ({ user }) => {
  const target = "#detailImage" + user.id;
  return (
    <Link to={`/detail/${user.id}`}>
      <div
        className="col mt-3"
        data-mdb-toggle="modal"
        data-mdb-target={target}>
        <div className="card bg-green">
          <img src={user.image} className="card-img-top" alt={user.name} />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{user.name} </h5>
            <p className="card-text"> {user.email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Image;
