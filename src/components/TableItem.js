import React from 'react';

export default function Table({ classItem, deleteLessonUser }) {
    return (
        <>
            <tr>
                <td>{classItem.title}</td>
                <td>
                    {classItem.day}/{classItem.month}
                </td>
                <td>{classItem.hour}</td>
                <td>{classItem.entries}</td>
                <td>
                    <button
                        onClick={() => {
                            deleteLessonUser(classItem.id);
                        }}
                        className="btn btn btn-outline-primary ml-1"
                        type="button"
                    >
                        Excluir
                    </button>
                </td>
            </tr>
        </>
    );
}
