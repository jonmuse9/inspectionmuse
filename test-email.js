// Test script to debug email authentication
const nodemailer = require("nodemailer");

async function testEmailConnection() {
  const configs = [
    {
      name: "SSL 465",
      config: {
        host: "mail.inspectionmuse.com",
        port: 465,
        secure: true,
        auth: {
          user: "info@inspectionmuse.com",
          pass: "NoLFh4e6vuFhz@",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    },
    {
      name: "TLS 587",
      config: {
        host: "mail.inspectionmuse.com",
        port: 587,
        secure: false,
        auth: {
          user: "info@inspectionmuse.com",
          pass: "NoLFh4e6vuFhz@",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    },
    {
      name: "SSL 465 with LOGIN",
      config: {
        host: "mail.inspectionmuse.com",
        port: 465,
        secure: true,
        auth: {
          user: "info@inspectionmuse.com",
          pass: "NoLFh4e6vuFhz@",
        },
        authMethod: "LOGIN",
        tls: {
          rejectUnauthorized: false,
        },
      },
    },
  ];

  for (const { name, config } of configs) {
    try {
      console.log(`\n🔧 Testing ${name}...`);
      const transporter = nodemailer.createTransport(config);

      console.log("📡 Verifying connection...");
      await transporter.verify();

      console.log(`✅ ${name} - Connection successful!`);

      console.log("📧 Sending test email...");
      await transporter.sendMail({
        from: "info@inspectionmuse.com",
        to: "info@inspectionmuse.com",
        subject: "Test Email - " + name,
        text: "This is a test email to verify the configuration works.",
      });

      console.log(`🎉 ${name} - Email sent successfully!`);
      break;
    } catch (error) {
      console.log(`❌ ${name} failed:`, error.message);
    }
  }
}

testEmailConnection().catch(console.error);
