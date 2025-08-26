// Alternative version using Formspree - just replace the form action
export default function ContactPageFormspree() {
  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="space-y-4"
    >
      {/* Your existing form fields */}
      <input type="hidden" name="_subject" value="New Inspection Request" />
      <input
        type="hidden"
        name="_next"
        value="https://yoursite.com/thank-you"
      />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary text-foreground"
        />
      </div>

      {/* Add all your other form fields with name attributes */}

      <button
        type="submit"
        className="w-full bg-primary text-black py-2 px-4 rounded"
      >
        Submit Request
      </button>
    </form>
  );
}
