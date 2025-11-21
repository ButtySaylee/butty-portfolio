"use client";
import React, { useEffect } from "react";

export default function Transcript() {
  useEffect(() => {
    document.body.classList.add("transcript-print");
    return () => {
      document.body.classList.remove("transcript-print");
    };
  }, []);

  return (
    <div className="min-h-screen p-6">

      <button className="print-btn" onClick={() => typeof window !== "undefined" && window.print()}>Print Results</button>

      <div className="container">
        <div className="header">
          <img
            src="/DTU,_Delhi_official_logo.png"
            alt="DTU Logo"
            className="logo"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = "none";
            }}
          />
          <h1 className="uni-name">Delhi Technological University</h1>
          <p className="uni-sub">(Formerly Delhi College of Engineering)</p>
          <p className="uni-addr">Shahbad Daulatpur, Main Bawana Road, Delhi-110042</p>
          <div className="doc-title">Consolidated Statement of Grades (Semester I -- Semester VI)</div>
        </div>

        <div className="student-info">
          <div className="info-row">
            <div className="info-item"><span className="info-label">Name:</span> BUTTY SAYLEE</div>
            <div className="info-item"><span className="info-label">Roll No:</span> 2K22/SE/47</div>
            <div className="info-item"><span className="info-label">Batch:</span> 2022-2026</div>
          </div>
          <div className="info-row">
            <div className="info-item"><span className="info-label">Program:</span> Bachelor of Technology</div>
            <div className="info-item"><span className="info-label">Branch:</span> Software Engineering</div>
            <div className="info-item"><span className="info-label">Minor:</span> Cyber Forensics</div>
          </div>
        </div>

        <div className="grades-container">
          {/* Semester 1 */}
          <div className="semester-block">
            <div className="sem-header">SEMESTER I (Odd)</div>
            <table className="grades-table">
              <thead><tr><th className="col-code">Code</th><th className="col-subject">Subject Title</th><th className="col-cr">Cr</th><th className="col-gr">Gr</th></tr></thead>
              <tbody>
                <tr><td>MA101</td><td>Mathematics - I</td><td className="col-cr">4</td><td className="col-gr">P</td></tr>
                <tr><td>AP101</td><td>Physics - I</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>EE101</td><td>Basic Electrical Engineering</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>CO101</td><td>Programming Fundamentals</td><td className="col-cr">4</td><td className="col-gr">A</td></tr>
                <tr><td>ME105</td><td>Engineering Graphics</td><td className="col-cr">2</td><td className="col-gr">B+</td></tr>
                <tr><td>FEC3</td><td>Physical Education &amp; Sports</td><td className="col-cr">2</td><td className="col-gr">O</td></tr>
              </tbody>
            </table>
            <div className="sem-summary"><span>SGPA: 6.50</span><span>TC: 20</span></div>
          </div>

          {/* Semester 2 */}
          <div className="semester-block">
            <div className="sem-header">SEMESTER II (Even)</div>
            <table className="grades-table">
              <thead><tr><th className="col-code">Code</th><th className="col-subject">Subject Title</th><th className="col-cr">Cr</th><th className="col-gr">Gr</th></tr></thead>
              <tbody>
                <tr><td>MA102</td><td>Mathematics - II</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>AP102</td><td>Physics - II</td><td className="col-cr">4</td><td className="col-gr">B+</td></tr>
                <tr><td>AC102</td><td>Chemistry</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>ME104</td><td>Basic Mechanical Engineering</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>ME106</td><td>Workshop Practice</td><td className="col-cr">2</td><td className="col-gr">A+</td></tr>
                <tr><td>FEC1</td><td>Sports - 1</td><td className="col-cr">2</td><td className="col-gr">A</td></tr>
                <tr><td>MS199</td><td>Community Engagement(Mentoring Stdnts)</td><td className="col-cr">2</td><td className="col-gr">A+</td></tr>
              </tbody>
            </table>
            <div className="sem-summary"><span>SGPA: 6.91</span><span>TC: 22</span></div>
          </div>

          {/* Semester 3 */}
          <div className="semester-block">
            <div className="sem-header">SEMESTER III (Odd)</div>
            <table className="grades-table">
              <thead><tr><th className="col-code">Code</th><th className="col-subject">Subject Title</th><th className="col-cr">Cr</th><th className="col-gr">Gr</th></tr></thead>
              <tbody>
                <tr><td>EC271a</td><td>Digital Electronics</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>FEC16</td><td>Sport-II</td><td className="col-cr">2</td><td className="col-gr">O</td></tr>
                <tr><td>SE201</td><td>Data Structures</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>SE203</td><td>Object-Oriented Programming</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>SE205a</td><td>Operating Systems</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>SE207a</td><td>Engineering Analysis &amp; Design</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
              </tbody>
            </table>
            <div className="sem-summary"><span>SGPA: 6.00</span><span>TC: 22</span></div>
          </div>

          {/* Semester 4 */}
          <div className="semester-block">
            <div className="sem-header">SEMESTER IV (Even)</div>
            <table className="grades-table">
              <thead><tr><th className="col-code">Code</th><th className="col-subject">Subject Title</th><th className="col-cr">Cr</th><th className="col-gr">Gr</th></tr></thead>
              <tbody>
                <tr><td>EC272a</td><td>Computer System Architecture</td><td className="col-cr">4</td><td className="col-gr">P</td></tr>
                <tr><td>FEC7</td><td>Intro. to Environmental Science</td><td className="col-cr">2</td><td className="col-gr">C</td></tr>
                <tr><td>SE202a</td><td>Object Oriented Software Eng.</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>SE204a</td><td>Machine Learning</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>SE206</td><td>Database Management Systems</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>SE208a</td><td>Algorithm Design &amp; Analysis</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
              </tbody>
            </table>
            <div className="sem-summary"><span>SGPA: 5.36</span><span>TC: 22</span></div>
          </div>

          {/* Semester 5 */}
          <div className="semester-block">
            <div className="sem-header">SEMESTER V (Odd)</div>
            <table className="grades-table">
              <thead><tr><th className="col-code">Code</th><th className="col-subject">Subject Title</th><th className="col-cr">Cr</th><th className="col-gr">Gr</th></tr></thead>
              <tbody>
                <tr><td>HU301a</td><td>Engineering Economics</td><td className="col-cr">3</td><td className="col-gr">B</td></tr>
                <tr><td>MOOC305</td><td>Ethical Hacking</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>SE301a</td><td>Software Testing</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>SE303a</td><td>Software Quality Metrics</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>SE305</td><td>Software Req. Engineering</td><td className="col-cr">4</td><td className="col-gr">B+</td></tr>
                <tr><td>SE323</td><td>Theory of Computation</td><td className="col-cr">4</td><td className="col-gr">P</td></tr>
                <tr><td>SE325</td><td>Web Technology</td><td className="col-cr">4</td><td className="col-gr">B+</td></tr>
              </tbody>
            </table>
            <div className="sem-summary"><span>SGPA: 5.70</span><span>TC: 27</span></div>
          </div>

          {/* Semester 6 */}
          <div className="semester-block">
            <div className="sem-header">SEMESTER VI (Even)</div>
            <table className="grades-table">
              <thead><tr><th className="col-code">Code</th><th className="col-subject">Subject Title</th><th className="col-cr">Cr</th><th className="col-gr">Gr</th></tr></thead>
              <tbody>
                <tr><td>IT316</td><td>Cyber Forensic</td><td className="col-cr">4</td><td className="col-gr">B+</td></tr>
                <tr><td>MG302</td><td>Fundamentals of Management</td><td className="col-cr">3</td><td className="col-gr">B</td></tr>
                <tr><td>MOOC306</td><td>Joy of Computing Using Python</td><td className="col-cr">4</td><td className="col-gr">B+</td></tr>
                <tr><td>SE302a</td><td>Empirical Software Engineering</td><td className="col-cr">4</td><td className="col-gr">B</td></tr>
                <tr><td>SE304a</td><td>Computer Networks</td><td className="col-cr">4</td><td className="col-gr">C</td></tr>
                <tr><td>SE306</td><td>Compiler Design</td><td className="col-cr">4</td><td className="col-gr">B+</td></tr>
                <tr><td>SE308</td><td>Software Reliability</td><td className="col-cr">4</td><td className="col-gr">P</td></tr>
                <tr><td>SE316</td><td>Natural Language Processing</td><td className="col-cr">4</td><td className="col-gr">P</td></tr>
              </tbody>
            </table>
            <div className="sem-summary"><span>SGPA: 5.74</span><span>TC: 31</span></div>
          </div>
        </div>

        <div className="footer-section">
          <table className="performance-summary">
            <thead>
              <tr><th colSpan={2} style={{background: '#f0f0f0'}}>PERFORMANCE SUMMARY</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Total Credits Earned</strong></td><td><strong>144</strong></td></tr>
              <tr><td><strong>Cumulative SGPA (CGPA)</strong></td><td><strong>6.03</strong></td></tr>
            </tbody>
          </table>

          <div className="signatures"></div>

          <div><strong>Note:<em> Results for Semester VII and Semester VIII are still in progress...</em></strong></div>
        </div>

        <div style={{textAlign: 'center', fontSize: '3pc', marginTop: 50, color: '#555'}}></div>
      </div>
    </div>
  );
}
