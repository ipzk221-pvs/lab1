import React, {useState} from 'react';

function State(props) {
    const [color, setColor] = useState("red");

    return (<div>
        <p>I am a {color} Product!</p>
        <select onChange={(e) => setColor(e.target.value)}>
            {props.color.map((colors) => (<option key={colors.id} value={colors.name}
            >{colors.color}
            </option>))}
        </select>
    </div>)
}

export default State;