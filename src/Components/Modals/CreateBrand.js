import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/productApi';

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({name: value}).then(data => setValue(''))
    onHide()
  }
  return (
    <div>
        <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Введите название бренда"}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' onClick={addBrand}>Добавить</Button>
        <Button  variant='outline-dark'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}

export default CreateBrand
