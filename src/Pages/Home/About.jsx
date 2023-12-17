import React from "react";

export default function About() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/cuci.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">Hi Clean Laundry</h1>
          <p className="hero--section-description">
            Hi Clean Laundry adalah sistem layanan antar jemput laundry tepercaya.
            Anda dalam menjaga pakaian dan tekstil tetap bersih, segar, dan terawat. Kami menawarkan layanan laundry profesional menggunakan teknologi modern dan perhatian terhadap kebersihan dan keamanan.
            Dengan komitmen pada kepuasan pelanggan dan kemudahan penggunaan, Hi Clean Laundry siap membantu Anda menjaga dan mengantarkan pakaian Anda tetap dalam kondisi terbaik.
            Tentukanlah gaya Anda dan biarkan Hi Clean Laundry mengurus sisanya. Dengan pelayanan pelanggan yang ramah dan fleksibel, serta layanan pengambilan dan pengiriman yang memudahkan Anda, Hi Clean Laundry adalah pilihan utama bagi mereka yang menginginkan pakaian yang terjaga dan kualitas layanan terbaik. Terima kasih telah mempercayakan pakaian Anda pada kami, Hi Clean Laundry hadir untuk menjadikan hidup Anda lebih praktis dan nyaman. Terima kasih telah memilih Hi Clean Laundry!
          </p>
          <p className="hero--section-description">
            Selain itu, Hi Clean Laundry menawarkan beberapa fitur unggulan, antara lain:
          </p>
          <div className="about--features-container">
            <div className="about--feature">
              <img src="./img/antar1.png" alt="Feature 1" />
              <p>Layanan Antaran Jemput yang Fleksibel</p>
            </div>
            <div className="about--feature">
              <img src="./img/cuci1.png" alt="Feature 2" />
              <p>Pewangi Khusus</p>
            </div>
            {/* Tambahkan fitur lainnya di sini */}
          </div>
          <p className="hero--section-description">
            Hi Clean Laundry berkomitmen memberikan layanan laundry terbaik dengan nilai tambah untuk kenyamanan dan kepuasan Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
