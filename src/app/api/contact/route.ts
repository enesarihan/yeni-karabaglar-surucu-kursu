import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message, courseType } = await request.json();

    // Form validation
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar doldurulmalıdır" },
        { status: 400 }
      );
    }

    // Create transporter (Outlook/Hotmail için)
    const transporter = nodemailer.createTransport({
      service: "hotmail", // Outlook için 'hotmail' kullanın
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Yeni İletişim Formu</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        .header h1 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .header p {
          opacity: 0.9;
          font-size: 1rem;
        }
        .content {
          padding: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background-color: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .form-group label {
          font-weight: 600;
          color: #374151;
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .form-group .value {
          color: #1f2937;
          font-size: 1rem;
          line-height: 1.5;
        }
        .course-badge {
          display: inline-block;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .footer {
          background-color: #f3f4f6;
          padding: 1.5rem 2rem;
          border-top: 1px solid #e5e7eb;
        }
        .footer-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .contact-info {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .contact-info strong {
          color: #374151;
        }
        .logo {
          font-size: 1.2rem;
          font-weight: 700;
          color: #3b82f6;
        }
        @media (max-width: 600px) {
          .container {
            margin: 1rem;
            border-radius: 8px;
          }
          .header, .content, .footer {
            padding: 1.5rem;
          }
          .footer-info {
            flex-direction: column;
            text-align: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚗 Yeni İletişim Formu</h1>
          <p>Yeni Karabağlar Sürücü Kursu</p>
        </div>

        <div class="content">
          <div class="form-group">
            <label>👤 Ad Soyad</label>
            <div class="value">${name}</div>
          </div>

          <div class="form-group">
            <label>📞 Telefon</label>
            <div class="value">${phone}</div>
          </div>

          <div class="form-group">
            <label>✉️ E-posta</label>
            <div class="value">${email}</div>
          </div>

          <div class="form-group">
            <label>🎯 İlgilenilen Kurs</label>
            <div class="value">
              <span class="course-badge">${courseType}</span>
            </div>
          </div>

          <div class="form-group">
            <label>💬 Mesaj</label>
            <div class="value">${message}</div>
          </div>
        </div>

        <div class="footer">
          <div class="footer-info">
            <div class="logo">Yeni Karabağlar Sürücü Kursu</div>
            <div class="contact-info">
              <strong>Tel:</strong> +90 232 264 40 03<br>
              <strong>Adres:</strong> Gülyaka, Karabağlar/İzmir
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Aynı mail adresine gönder
      subject: `🚗 Yeni İletişim Formu - ${name} (${courseType})`,
      html: htmlTemplate,
      replyTo: email, // Yanıtları müşterinin mail adresine yönlendir
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
