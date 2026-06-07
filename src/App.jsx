import React, { useState } from "react";
import { Form, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ModalCepNaoEncontrado from "./components/ModalCepNaoEncontrado";
import ModalCepIncompleto from "./components/ModalCepIncompleto";

function App() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showModalIncompleto, setShowModalIncompleto] = useState(false);

  const buscarEndereco = () => {
  if (cep.length !== 8) {

    alert("Digite o CEP com 8 dígitos para pesquisa");

    setShowModalIncompleto(true);

    setEndereco({
      logradouro: "",
      bairro: "",
      localidade: "",
      uf: "",
    });

    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.erro) {
        setEndereco({
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
        });
      } else {
        setShowModal(true);
      }
    });
};

  const handleChangeCep = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setCep(valor);
  }

 return (
  <div className="app-background">
    <Container className="consulta-card">
      <h1 className="titulo">Consulta de CEP</h1>
      <p className="subtitulo">
        Consulte rapidamente informações de endereço através do CEP.
      </p>

      <Form>
        <Form.Group className="mb-4" controlId="formCep">
          <Form.Label>CEP</Form.Label>

          <div className="d-flex align-items-center gap-2">
            <Form.Control
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={handleChangeCep}
              maxLength={8}
            />

            <Button
              className="btn-buscar"
              onClick={buscarEndereco}
            >
              Buscar
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control
            type="text"
            value={endereco.logradouro}
            onChange={(e) =>
              setEndereco({
                ...endereco,
                logradouro: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            type="text"
            value={endereco.bairro}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            value={endereco.localidade}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            value={endereco.uf}
            readOnly
          />
        </Form.Group>
      </Form>

      <ModalCepNaoEncontrado
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      <ModalCepIncompleto
        show={showModalIncompleto}
        onClose={() => setShowModalIncompleto(false)}
      />
    </Container>
  </div>
);
}
export default App;