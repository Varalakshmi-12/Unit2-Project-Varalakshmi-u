import React from "react";
import "./DataTable.css";

export default function DataTable({ data, columns }) {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {columns.map(col => (
                            <td key={col.accessor}>{row[col.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
