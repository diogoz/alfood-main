import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../interfaces/IRestaurante";

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const parametros = useParams();
  useEffect(() => {
    if (parametros.id) {
      axios
        .get<IRestaurante>(
          `http://localhost:8000/api/v2/restaurantes/${parametros.id}/`
        )
        .then((resposta) => setNomeRestaurante(resposta.data.nome));
    } else {
    }
  }, [parametros]);

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (parametros.id) {
      axios
        .put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante Atualizado com Sucesso");
        });
    } else {
      axios
        .post("http://localhost:8000/api/v2/restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante Cadastrado com Sucesso");
        });
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component={"h1"} variant="h6">
        Formulário de Restaurantes
      </Typography>
      <Box component={"form"} onSubmit={aoSubmeterForm}>
        <TextField
          id="standard-basic"
          label="Nome do Restaurante"
          variant="standard"
          value={nomeRestaurante}
          onChange={(evento) => setNomeRestaurante(evento.target.value)}
          required
          fullWidth
        />
        <Button
          sx={{ marginTop: 1 }}
          type="submit"
          variant="outlined"
          fullWidth
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioRestaurante;
