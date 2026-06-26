export default function Quiz() {
  return (
    <div className="page">
      <h1>📝 แบบทดสอบค้นหาตัวเอง</h1>

      <div className="quiz-card">
        <h2>คุณชอบทำอะไรมากที่สุด ?</h2>

        <div className="quiz-options">
          <button>💻 เขียนโปรแกรม</button>
          <button>🎨 ออกแบบ</button>
          <button>📈 วิเคราะห์ธุรกิจ</button>
          <button>🤖 AI และเทคโนโลยี</button>
        </div>
      </div>

      <div className="quiz-card">
        <h2>ผลลัพธ์</h2>
        <p>
          เมื่อทำระบบจริง สามารถคำนวณคะแนน
          และแนะนำสายอาชีพที่เหมาะสมได้
        </p>
      </div>
    </div>
  );
}
