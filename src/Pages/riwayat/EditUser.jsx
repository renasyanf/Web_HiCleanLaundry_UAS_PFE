import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState("");
  const [riwayat, setRiwayat] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const putData = await axios.put(
        'http://localhost:8080/Edit/user/${id}',
        {
          riwayat: riwayat,
          tanggal: tanggal
        }
      );

      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      setError("Data Gagal diubah");
    } finally {
      setLoading(false);
    }
  };
  

  const closeModal = () => {
    setId("");
    setRiwayat("");
    setTanggal("");
    setShow(false);
    setError(null);
  };

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateUser}>
            <Form.Group className="mb-3" controlId="formRiwayat">
              <Form.Label>Riwayat</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setRiwayat(e.target.value)}
                value={riwayat}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTanggal">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setTanggal(e.target.value)}
                value={tanggal}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="px-4" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </Button>
            {error && <p className="text-danger">{error}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal} disabled={loading}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Update;