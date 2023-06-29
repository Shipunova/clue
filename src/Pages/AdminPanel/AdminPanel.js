import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './AdminPanel.css'
import CreateBrand from '../../Components/Modals/CreateBrand';
import CreateType from '../../Components/Modals/CreateType';
import CreateProduct from '../../Components/Modals/CreateProduct';


const AdminPanel = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
      <div className='adminPanel_container'>
        <Button variant='outline-dark' className="mt-3" onClick={()=>setTypeVisible(true)}>Добавить тип</Button>
        <Button variant='outline-dark' className="mt-3" onClick={()=>setBrandVisible(true)}>Добавить бренд</Button>
        <Button variant='outline-dark' className="mt-3" onClick={()=>setProductVisible(true)}>Добавить новый продукт</Button>
        <CreateBrand show={brandVisible} onHide={() =>setBrandVisible(false)}/>
        <CreateType show={typeVisible} onHide={() =>setTypeVisible(false)}/>
        <CreateProduct show={productVisible} onHide={() =>setProductVisible(false)}/>
    </div>
    );
}

export default AdminPanel;