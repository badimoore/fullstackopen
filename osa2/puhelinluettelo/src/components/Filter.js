import React from "react";

const Filter = ({ filter, setFilter, text }) => (
    <div>
        {text} <input value={filter} onChange={evt => setFilter(evt.target.value)} />
    </div>
)

export default Filter