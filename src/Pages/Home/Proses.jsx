import React from "react";
import './Proses.css';

export default function ProsesPesanan() {
  return (
    <section className="proses-pesanan">
      <div className="konten-pesanan">
        <h2>Pesanan Sedang Diproses</h2>
        <p>Terima kasih atas pesanan Anda di Hi Clean Laundry. Pesanan Anda saat ini sedang diproses.</p>
        <div className="detail-proses">
          <p>Nomor Pesanan: <strong>#123456</strong></p>
          <p>Status: <strong>Sedang Diproses</strong></p>
          {/* Tambahkan detail pesanan lainnya di sini */}
        </div>
        <p>Silakan tunggu konfirmasi lebih lanjut dari kami.</p>
      </div>
    </section>
  );
}
