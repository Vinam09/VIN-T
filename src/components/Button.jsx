import React from 'react'

function Button(props) {
    return (
        <div>
            <a href={props.link} ><button className=" shadow-lg rounded border-dashed border-2 border-hovercolor
             text-secondary bg-hovercolor px-6 py-2 mr-6 hover:text-hovercolor
              hover:bg-secondary transition ease-in" type="button" name={props.name}>{props.name}</button></a>
        </div>
    )
}

export default Button;
