import React from 'react';
import './Harga.css'; // Pastikan file CSS Anda bernama HargaLaundry.css

const HargaLaundryMatahari = () => {
  return (
    <div className="harga-laundry-container">
      <h1>DAFTAR HARGA TERBARU </h1>

      <h2>Reguler</h2>
      <table className="harga-table">
        <thead>
          <tr>
            <th>Cuci Kering Lipat (3 KG)</th>
            <th>25.000</th>
          </tr>
          <tr>
            <th>Cuci Kering Lipat (5 KG)</th>
            <th>35.000</th>
          </tr>
        </thead>
        <tbody>
          {/* Isi dengan data untuk Kilo Laundry Premium */}
        </tbody>
      </table>

      <h2>Setrika</h2>
      <table className="harga-table">
        <thead>
        <tr>
            <th>Setrika (3 KG)</th>
            <th>20.000</th>
          </tr>
        <tr>
            <th>Setrika (5 KG)</th>
            <th>35.000</th>
          </tr>
        </thead>
        <tbody>
          {/* Isi dengan data untuk Laundry Baju Satuan */}
        </tbody>
      </table>

      <h2>Kilat</h2>
      <table className="harga-table">
        <thead>
          <tr>
            <th>Kilat Reguler (3 KG)</th>
            <th>30.000</th>
          </tr>
          <tr>
            <th>Kilat Reguler (5 KG)</th>
            <th>45.000</th>
          </tr>
          <tr>
            <th>Kilat Setrika (3 KG)</th>
            <th>30.000</th>
          </tr>
          <tr>
            <th>Kilat Setrika (5 KG)</th>
            <th>40.000</th>
          </tr>
        </thead>
        <tbody>
          {/* Isi dengan data untuk Laundry/Cuci Karpet */}
        </tbody>
      </table>

      <h2>Laundry Satuan</h2>
      <table className="harga-table">
        <thead>
          <tr>
            <th>Bed Cover</th>
            <th>35.000</th>
          </tr>
          <tr>
            <th>Bed Cover Jumbo</th>
            <th>45.000</th>
          </tr>
          <tr>
            <th>Selimut</th>
            <th>25.000</th>
          </tr>
          <tr>
            <th>Baju Muslim</th>
            <th>25.000</th>
          </tr>
          <tr>
            <th>Bantal / Guling Dewasa</th>
            <th>50.000</th>
          </tr>
          <tr>
            <th>Kemeja</th>
            <th>20.000</th>
          </tr>
          <tr>
            <th>Jas</th>
            <th>30.000</th>
          </tr>
        </thead>
        <tbody>
          {/* Isi dengan data untuk Laundry Sepatu */}
        </tbody>
      </table>
      
    </div>
  );
};

export default HargaLaundryMatahari;
