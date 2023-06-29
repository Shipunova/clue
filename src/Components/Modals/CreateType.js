import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../http/productApi';

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addType = () => {
    createType({name: value}).then(data => setValue(''))
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
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Введите название типа"}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' onClick={addType}>Добавить</Button>
        <Button variant='outline-dark' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}

export default CreateType
