import React from 'react';

export default function Table(props) {
    return (
        <>
            <tr>
                <td>{props.classes.name}</td>
                <td>{props.classes.entries}</td>
                <td>{props.classes.shift}</td>
                <td>{props.classes.id}</td>
                <td>
                    <a
                        onClick={() => {
                            props.deleteClassUser(props.classes.id);
                        }}
                        className="btn btn btn-outline-primary ml-1"
                        type="button"
                    >
                        Excluir
                    </a>
                </td>
            </tr>
        </>
    );
}
