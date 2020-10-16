import React from "react";

export default function Table( ) {
  return (
    <>
      <tr>
        <td>Aula de React</td>
        <td>21/10</td>
        <td>20h</td>
        <td>01/10</td>
        <td>
          <button className="btn btn btn-outline-primary ml-1" type="button">
            Entrar
          </button>
          <button className="btn btn btn-outline-primary ml-1" type="button">
            Editar
          </button>
        </td>
      </tr>
    </>
  );
}
