"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    async function checkView() {
      const res = await fetch("/api/check");
      const data = await res.json();

      if (data.viewed === false) {
        setShow(true);

        await fetch("/api/viewed", {
          method: "POST",
        });
      } else {
        setShow(false);
      }
    }

    checkView();
  }, []);

  if (!show) return null;

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #f8f9fa;
          color: #343a40;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          overflow: hidden;
          margin: 0;
        }

        .content-wrapper {
          background: linear-gradient(135deg, #e3f2fd, #bbdefb);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1),
            0 0 30px rgba(255, 105, 180, 0.5),
            0 0 60px rgba(0, 123, 255, 0.5);
          width: 250px;
          text-align: center;
          animation: bounceInOut 3s infinite;
        }

        @keyframes bounceInOut {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.05);
          }
          75% {
            transform: scale(1.1);
          }
        }

        h1 {
          font-weight: bold;
          text-transform: uppercase;
          background: linear-gradient(90deg, #ff0000, #0000ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1.5em;
        }

        p {
          font-size: 1em;
        }

        #contentpara {
          color: #080103;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #25d366c9;
          color: white;
          padding: 8px 12px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 10px;
          transition: 0.3s;
        }

        .whatsapp-btn:hover {
          background-color: #1ebe5d;
        }

        .email-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #dc35459c;
          color: white;
          padding: 8px 12px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 10px;
          transition: 0.3s;
        }

        .email-btn:hover {
          background-color: #d33426;
        }
      `}</style>

      <div className="container content-wrapper">
        <h1>Attention</h1>

        <p id="contentpara">
          As you are well aware that Fiverr does not allow academic work, and
          in order to complete this project, I need to make a deal with you
          outside Fiverr. I have more than 5 years of developmentexperience and in helping students with
          quizzes, assignments, projects and Final year Projects.
        </p>

        <a
          href="https://wa.me/923137482324"
          target="_blank"
          className="whatsapp-btn"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            width="20"
          />
          Chat on WhatsApp
        </a>

        <br />

        <a href="mailto:nexomarketing555@gmail.com" className="email-btn">
          <img
            src="https://img.icons8.com/color/48/000000/gmail-new.png"
            width="20"
          />
          Email Us
        </a>
      </div>
    </>
  );
}