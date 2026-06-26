import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AI from "./pages/AI.jsx";
import Career from "./pages/Career.jsx";
import Quiz from "./pages/Quiz.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="logo">DBT GUIDE</div>

          <div className="menu">
            <Link to="/">หน้าหลัก</Link>
            <Link to="/about">รู้จัก DBT</Link>
            <Link to="/ai">AI แนะนำวิชา</Link>
            <Link to="/career">อาชีพที่ใช่</Link>
            <Link to="/quiz">แบบทดสอบ</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <div className="hero-left">
                    <h1>
                      DIGITAL <br />
                      BUSINESS <span>TECHNOLOGY</span>
                    </h1>

                    <p>
                      เว็บไซต์แนะนำสาขา DBT
                      สำหรับนักเรียนที่สนใจด้านเทคโนโลยี ธุรกิจดิจิทัล
                      และการพัฒนาเว็บไซต์
                    </p>

                    <button>เริ่มต้นเรียนรู้</button>
                  </div>

                  <div className="hero-card">
                    <div className="circle">
                      <h2>DBT GUIDE</h2>
                      <p>ค้นหาตัวตนสายดิจิทัล</p>
                    </div>
                  </div>
                </section>

                <section className="cards">
                  <div className="card">
                    <div className="icon">💻</div>
                    <h3>Programming</h3>
                    <p>เรียนรู้การเขียนโปรแกรมและพัฒนาเว็บไซต์</p>
                  </div>

                  <div className="card">
                    <div className="icon">🤖</div>
                    <h3>AI Technology</h3>
                    <p>เรียนรู้การใช้งาน AI และเทคโนโลยีสมัยใหม่</p>
                  </div>

                  <div className="card">
                    <div className="icon">📊</div>
                    <h3>Business</h3>
                    <p>วิเคราะห์ข้อมูลและการบริหารธุรกิจดิจิทัล</p>
                  </div>

                  <div className="card">
                    <div className="icon">🚀</div>
                    <h3>Career</h3>
                    <p>ค้นหาอาชีพที่เหมาะกับความสามารถของคุณ</p>
                  </div>
                </section>

                <section className="future">
                  <h2>อนาคตเริ่มต้นที่นี่</h2>
                  <p>
                    DBT คือสาขาที่ผสมผสานเทคโนโลยีและธุรกิจเข้าด้วยกัน
                    เพื่อสร้างนักพัฒนายุคใหม่
                  </p>
                </section>
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/career" element={<Career />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}