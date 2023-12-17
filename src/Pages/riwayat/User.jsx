import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../riwayat/riwayat.css';
import { Modal, Form, Button } from 'react-bootstrap';

function Home() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ABC1E2",
  };

  const navLinkStyle = {
    color: "#000000",
    fontSize: "25px",
    lineHeight: "70px",
    textDecoration: "none",
    padding: "0 20px",
  };





  const footerStyle = {
    backgroundColor: "#ABC1E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
  };

  const footerTextStyle = {
    fontSize: "18px",
    color: "#FFFFFF",
  };

  // Create media query for smaller screens
  const mediaQuery = `@media (max-width: 768px) {
    img {
      max-width: 80%; // Adjust the maximum width as needed
    }
  }`;

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  },[]);

  const getUser = async () => {
    const userData = await axios.get('http://localhost:8080/user');
    setUser(userData.data);
  }

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus pengguna?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/Delete/user/${id}`);
      getUser();
    }
  }
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
        `http://localhost:8080/Update/user/${id}`,
        {
          riwayat: riwayat,
          tanggal: tanggal
        }
      );

      alert(putData.data.messages.success);
      window.location.reload();
    } catch (error) {
      setError("Data Gagal diubah");
    } finally {
      setLoading(false);
    }
  };
  const showModal = (data) => {
    setId(data.id);
    setRiwayat(data.riwayat);
    setTanggal(data.tanggal);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setRiwayat("");
    setTanggal("");
    setShow(false);
    setError(null);
  };

  return (
    <div style={containerStyle}>

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


      <div>
         <caption className="table-caption">Riwayat Pembersihan</caption>
         <Link to ={'/AddUser'} className='custom-button'> Tambah Data </Link>
        <table className="table-container">
        <thead>
            <tr>
              <th>No</th>
              <th>Riwayat</th>
              <th>Tanggal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userData, index) => (
              <tr key={userData.id}>
                <td>{index + 1}</td>
                <td>{userData.riwayat}</td>
                <td>{userData.tanggal}</td>
                <td>
                  <button onClick={() => showModal(userData)} className='custom-button'>edit</button>
                  <button onClick={() => deleteUser(userData.id)} className='custom-button'>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{mediaQuery}</style>
    </div>
  );
}

export default Home;