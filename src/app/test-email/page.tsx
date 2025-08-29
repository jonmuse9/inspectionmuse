"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function TestEmailPage() {
  const [status, setStatus] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    console.log(message);
    setLogs(prev => [...prev, `${new Date().toISOString()}: ${message}`]);
  };

  const testEmailJS = async () => {
    setStatus("Testing...");
    setLogs([]);
    
    try {
      // Log environment variables (without exposing the full key)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      addLog(`Service ID: ${serviceId ? serviceId : "NOT SET"}`);
      addLog(`Template ID: ${templateId ? templateId : "NOT SET"}`);
      addLog(`Public Key: ${publicKey ? publicKey.substring(0, 5) + "..." : "NOT SET"}`);
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not properly configured");
      }
      
      // Initialize EmailJS
      addLog("Initializing EmailJS...");
      emailjs.init(publicKey);
      addLog("EmailJS initialized successfully");
      
      // Prepare test email data
      const templateParams = {
        from_name: "Test User",
        from_email: "test@example.com",
        phone: "555-1234",
        property_address: "123 Test Street",
        inspection_type: "Test Inspection",
        message: "This is a test message from the EmailJS debug page",
        to_name: "InspectionMuse Team",
        reply_to: "test@example.com",
      };
      
      addLog("Sending email with params:");
      addLog(JSON.stringify(templateParams, null, 2));
      
      // Send email
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      
      addLog(`Email sent successfully! Status: ${result.status}, Text: ${result.text}`);
      setStatus(`Success! Status Code: ${result.status}`);
      
    } catch (error: any) {
      const errorMessage = error?.text || error?.message || "Unknown error";
      addLog(`Error: ${errorMessage}`);
      
      if (error?.status) {
        addLog(`Error Status Code: ${error.status}`);
      }
      
      setStatus(`Failed: ${errorMessage}`);
      
      // Common error meanings
      if (errorMessage.includes("Invalid service ID")) {
        addLog("→ Check your NEXT_PUBLIC_EMAILJS_SERVICE_ID in .env.local");
      } else if (errorMessage.includes("Invalid template ID")) {
        addLog("→ Check your NEXT_PUBLIC_EMAILJS_TEMPLATE_ID in .env.local");
      } else if (errorMessage.includes("Invalid public key")) {
        addLog("→ Check your NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local");
      } else if (errorMessage.includes("The user ID is invalid")) {
        addLog("→ Your public key might be incorrect");
      } else if (errorMessage.includes("The template ID is invalid")) {
        addLog("→ Template might not exist or ID is wrong");
      } else if (errorMessage.includes("The service ID is invalid")) {
        addLog("→ Service might not exist or ID is wrong");
      }
    }
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">EmailJS Test Page</h1>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h2 className="font-semibold mb-2">EmailJS Setup Checklist:</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Created account at emailjs.com ✓</li>
          <li>Added an email service (Gmail, Outlook, etc.)</li>
          <li>Created an email template</li>
          <li>Added environment variables to .env.local ✓</li>
          <li>Restarted Next.js dev server after adding env vars</li>
        </ol>
      </div>
      
      <button
        onClick={testEmailJS}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-6"
      >
        Test EmailJS Integration
      </button>
      
      {status && (
        <div className={`p-4 rounded-lg mb-6 ${
          status.includes("Success") 
            ? "bg-green-100 text-green-800 border border-green-300" 
            : status.includes("Testing")
            ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
            : "bg-red-100 text-red-800 border border-red-300"
        }`}>
          <strong>Status:</strong> {status}
        </div>
      )}
      
      {logs.length > 0 && (
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Debug Logs:</h3>
          <pre className="text-xs font-mono whitespace-pre-wrap">
            {logs.join("\n")}
          </pre>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Common Issues:</h3>
        <ul className="text-sm space-y-2">
          <li>• <strong>Environment variables not loaded:</strong> Restart your dev server after adding to .env.local</li>
          <li>• <strong>Invalid IDs:</strong> Double-check your Service ID, Template ID, and Public Key from EmailJS dashboard</li>
          <li>• <strong>Template variables:</strong> Make sure your EmailJS template uses the exact variable names we're sending</li>
          <li>• <strong>Email service not connected:</strong> Verify your email service is properly connected in EmailJS dashboard</li>
        </ul>
      </div>
    </div>
  );
}