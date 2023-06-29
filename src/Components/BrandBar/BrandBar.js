import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../"
import './BrandBar.css'

const BrandBar = observer(() => {
    const {product} = useContext(Context)
    console.log(product)
    return (
        <ul className='branBar_ul'>
            {product.brands.map(brand =>
                <li className='branBar_li'
                onClick={() => product.setSelectedType(brand)} key={brand.id}>
                    {brand.name}</li>)}
        </ul>
    );
});

export default BrandBar;