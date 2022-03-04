import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../Main/styles";

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Main() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState<Address>();

  function handleValidateZipCode() {
    axios.get(`https://viacep.com.br/ws/${zipCode}/json/`).then(response => {
      setAddress(response.data);
    });
  }

  return (
    <Container>
      <label htmlFor="">
        <h2>Insira o CEP</h2>
        <input
          value={zipCode}
          name="input-cep"
          id="input-cep"
          type="text"
          onChange={event => setZipCode(event.target.value)}
          onBlur={handleValidateZipCode}
        />
      </label>
      <label htmlFor="">
        <input type="text" defaultValue={address?.logradouro} />
      </label>
      <label htmlFor="">
        <input type="text" defaultValue={address?.bairro} />
      </label>
      <label htmlFor="">
        <input type="text" defaultValue={address?.localidade} />
      </label>
      <label htmlFor="">
        <input type="text" defaultValue={address?.uf} />
      </label>
    </Container>
  );
}
