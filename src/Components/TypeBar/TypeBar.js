import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../"
import './TypeBar.css'

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    console.log(product)
    return (
        <ul className='typebar_ul'>
            {product.types.map(type =>
                <li className='typebar_li' active = {type.id === product.setSelectedType}
                onClick={() => product.setSelectedType(type)} key={type.id}>
                    {type.name}
                    </li>)}
        </ul>
    );
});

export default TypeBar;