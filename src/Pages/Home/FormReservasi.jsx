import React from 'react';
import './FormReservasi.css';

class FormReservasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      tanggal: '',
      layanan: '',
      metodePembayaran: '',
      isSubmitted: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    this.setState({ isSubmitted: true });
    // Simulate successful submission for demonstration purposes
    alert('Pesanan telah ditambahkan');

    // Redirect to /Proses after submission
    window.location.href = '/Proses';
  }

  render() {
    return (
      <div>
        {this.state.isSubmitted ? (
          <div className="confirmation-message">
            <h2>Konfirmasi Pesanan</h2>
            <p>Terima kasih, {this.state.username}! Pesanan Anda berhasil disimpan.</p>
          </div>
        ) : null}
        <form className="form-reservasi" onSubmit={this.handleSubmit}>
          <h2>Konfirmasi Pesanan</h2>
          <label>
            Nama:
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <label>
            Tanggal:
            <input type="date" name="tanggal" onChange={this.handleChange} />
          </label>
          <label>
            Layanan:
            <select name="layanan" onChange={this.handleChange}>
              <option value="">--Pilih Layanan--</option>
              <option value="refleksiologi">Paket Reguler</option>
              <option value="hydrotherapy">Paket Kilat</option>
              <option value="babyMassage">Paket Setrika</option>
              <option value="babyYoga">Paket Antar Jemput</option>
            </select>
          </label>
          <label>
            Metode Pembayaran:
            <select name="metodePembayaran" onChange={this.handleChange}>
              <option value="">--Pilih Metode Pembayaran--</option>
              <option value="kartuKredit">Cash</option>
              <option value="transferBank">Danak</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormReservasi;
