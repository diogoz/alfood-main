import axios from "axios";
import { useEffect, useState } from "react";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    //obter restaurantes
    axios.get("http://localhost:8000/api/v1/restaurantes/").then((response) => {
      const { data } = response;
      console.log(response.data.results);
      setRestaurantes(data.results);
    });
  }, []);

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
    </section>
  );
};

export default ListaRestaurantes;