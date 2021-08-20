import React, { Fragment } from "react";

export const Cancion = ({ letra }) => {
  if (letra.length === 0) return null;

  const { lyrics, album } = letra;

  return (
    <Fragment>
      <h2 className="card-text">Letra Canción</h2>
      <div className="card-text" style={{ paddingBottom: "20px" }}>
        <strong>Album: </strong> {album}
      </div>
      <p className="card-text letra">{lyrics}</p>
    </Fragment>
  );
};
