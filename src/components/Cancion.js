import React, { Fragment, useState } from "react";

export const Cancion = ({ letra }) => {
  return (
    <Fragment>
      <h2>
        <p className="letra">{letra}</p>
      </h2>
    </Fragment>
  );
};
