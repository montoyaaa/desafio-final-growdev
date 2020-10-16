import React from "react";

export default function AdminItemTable( ) {
  return (
    <>
      <tr>
        <td>Dirceu Jr</td>
        <td>A</td>
        <td>
          <button className="btn btn btn-outline-primary ml-1" type="button">
            Editar
          </button>
          <button className="btn btn btn-outline-primary ml-1" type="button">
            Excluir
          </button>
        </td>
      </tr>
    </>
  );
}
