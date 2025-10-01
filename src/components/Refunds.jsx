export default function Refunds() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        At <span className="font-semibold">DevTinder</span>, we aim to provide
        the best experience for our users. If you are not satisfied with your
        purchase, please read the following refund policy to understand your
        rights and our process.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Eligibility for Refund
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Refunds are only applicable for premium subscriptions or paid
          services.
        </li>
        <li>
          You must request a refund within{" "}
          <span className="font-medium">7 days</span> of purchase.
        </li>
        <li>
          Refunds will not be provided for promotional or discounted plans.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Non-Refundable Items
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Free trials, credits, or bonus features are non-refundable.</li>
        <li>Any services already delivered or consumed cannot be refunded.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Refund Process</h2>
      <p className="mb-4">
        To request a refund, please contact our support team at
        <a
          href="mailto:support@devtinder.com"
          className="text-blue-600 underline ml-1"
        >
          support@devtinder.com
        </a>{" "}
        with your order details. Once approved, refunds will be processed to
        your original payment method within{" "}
        <span className="font-medium">5-10 business days</span>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Changes to This Policy
      </h2>
      <p>
        We reserve the right to update or modify this refund policy at any time.
        Changes will be reflected on this page with an updated effective date.
      </p>

      <p className="mt-8 text-gray-600 text-sm">
        Effective Date: October 1, 2025
      </p>
    </div>
  );
}
