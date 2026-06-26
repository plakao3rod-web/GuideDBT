export default function AI() {
  return (
    <div className="page">
      <div className="ai-header">
        <h1>🤖 AI แนะนำวิชา</h1>
        <p>เลือกความสนใจของคุณ แล้วดูว่าวิชาไหนเหมาะกับคุณที่สุด</p>
      </div>

      <div className="ai-box">
        <h2>คุณสนใจด้านไหน ?</h2>

        <div className="interest-grid">
          <button className="interest-btn">💻 Programming</button>
          <button className="interest-btn">🎨 Design</button>
          <button className="interest-btn">📈 Business</button>
          <button className="interest-btn">🤖 AI</button>
        </div>
      </div>

      <div className="result-card">
        <h2>✨ ผลการแนะนำ</h2>

        <div className="subject-card">
          <h3>Web Development</h3>
          <p>เหมาะสำหรับคนที่ชอบเขียนเว็บไซต์และสร้างระบบออนไลน์</p>
        </div>

        <div className="subject-card">
          <h3>Artificial Intelligence</h3>
          <p>เหมาะสำหรับคนที่สนใจ AI และเทคโนโลยีอนาคต</p>
        </div>

        <div className="subject-card">
          <h3>Digital Marketing</h3>
          <p>เหมาะสำหรับคนที่สนใจธุรกิจและการตลาดออนไลน์</p>
        </div>
      </div>
    </div>
  );
}
