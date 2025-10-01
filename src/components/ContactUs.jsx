export default function ContactUs() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-600">
        Have questions, feedback, or need support? We’d love to hear from you.
        Reach out to us through the following channels:
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>
            For general inquiries and support, email us at
            <a
              href="mailto:support@devtinder.com"
              className="text-blue-600 underline ml-1"
            >
              support@devtinder.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>
            DevTinder HQ
            <br />
            123 Innovation Street,
            <br />
            Bengaluru, Karnataka, India - 560001
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Social Media</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="https://twitter.com/devtinder"
                className="text-blue-600 underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/devtinder"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devtinder"
                className="text-blue-600 underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-gray-600 text-sm">
        We usually respond within 2–3 business days. Thank you for reaching out!
      </p>
    </div>
  );
}
