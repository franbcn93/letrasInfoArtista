import React, { useState, useEffect, Fragment } from "react";
import { Formulario } from "./components/Formulario";
import { Cancion } from "./components/Cancion";
import { Info } from "./components/Info";
import axios from "axios";

function App() {
  // Definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarAPILetra = async () => {
      const { artista, cancion } = busquedaLetra;

      // La API url está apuntando a una canción de Sabina,
      // ya que me pide id_artist, id_album i id_track
      // const url = `https://api.happi.dev/v1/music/artists/5244/albums/782880/tracks/13244206/lyrics?apikey=0a42d6kmXpNGFR3I76mDvapwXAS9jUPQpBVmi32irHFdSvBsj5LOMB4F`;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      // const resultado = await axios(url);
      // console.log(resultado.data.result.lyrics);
      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);

      // guardarLetra(letra.data.result);
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

      console.log(letra);
      console.log(informacion);

      // guardarLetra(resultado.data.lyrics);
      // b274c7b9e18d3ccaba2277ed04bd52c0
    };
    consultarAPILetra();
  }, [busquedaLetra]);
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
