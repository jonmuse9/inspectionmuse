import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyAddress, inspectionType, message } =
      body;

    // Create transporter with your mail server settings
    // Try different configurations to handle authentication issues
    const configs = [
      {
        name: "SSL 465",
        config: {
          host: "mail.inspectionmuse.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
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
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
      },
    ];

    let transporter;
    let lastError;

    // Try each configuration
    for (const { name, config } of configs) {
      try {
        console.log(`Trying ${name} configuration...`);
        transporter = nodemailer.createTransport(config);
        await transporter.verify();
        console.log(`${name} configuration successful!`);
        break;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.log(`${name} failed:`, errorMessage);
        lastError = error;
        transporter = null;
      }
    }

    if (!transporter) {
      const lastErrorMessage =
        lastError instanceof Error ? lastError.message : String(lastError);
      throw new Error(
        `All email configurations failed. Last error: ${lastErrorMessage}`
      );
    }

    // Email to you (the business)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@inspectionmuse.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Inquiry Details</h3>
            <p><strong>Service/Inquiry Type:</strong> ${inspectionType}</p>
            ${
              propertyAddress
                ? `<p><strong>Property/Project Address:</strong> ${propertyAddress}</p>`
                : ""
            }
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #007acc; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${
              message || "No additional message provided."
            }</p>
          </div>
          
          <div style="background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0; font-size: 14px; color: #666;">
            <p><strong>Response Required:</strong> Please respond within 24 hours</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting InspectionMuse",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #007acc; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">InspectionMuse</h1>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #333;">Thank you for your message!</h2>
            
            <p>Hi ${name},</p>
            
            <p>We've received your message and appreciate you reaching out to us. Here's a summary of what you submitted:</p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Service/Inquiry Type:</strong> ${inspectionType}</p>
              ${
                propertyAddress
                  ? `<p><strong>Property/Project Address:</strong> ${propertyAddress}</p>`
                  : ""
              }
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #2d5d2d; margin-top: 0;">What happens next?</h3>
              <ul style="color: #555; line-height: 1.6;">
                <li>We'll review your inquiry within 24 hours</li>
                <li>A member of our team will contact you directly</li>
                <li>We'll provide detailed information and answer any questions</li>
              </ul>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #856404;">
                <strong>Need immediate assistance?</strong><br>
                Call us directly at <a href="tel:443-555-0100" style="color: #007acc;">(443) 555-0100</a>
              </p>
            </div>
            
            <p>Thank you for choosing InspectionMuse for your inspection needs!</p>
            
            <p>Best regards,<br>
            <strong>The InspectionMuse Team</strong></p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              InspectionMuse | Carroll County, MD<br>
              <a href="mailto:info@inspectionmuse.com" style="color: #007acc;">info@inspectionmuse.com</a> | 
              <a href="tel:443-555-0100" style="color: #007acc;">(443) 555-0100</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
