import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    axios
      .post("http://localhost:8000/api/v2/restaurantes/", {
        nome: nomeRestaurante,
      })
      .then(() => {
        alert("Restaurante Cadastrado com Sucesso");
      });
  };

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        id="standard-basic"
        label="Nome do Restaurante"
        variant="standard"
        value={nomeRestaurante}
        onChange={(evento) => setNomeRestaurante(evento.target.value)}
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default FormularioRestaurante;
