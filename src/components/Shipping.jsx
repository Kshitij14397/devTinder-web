import React from "react";

export default function Shipping() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
        <p className="mb-8 text-sm text-gray-500">
          Last updated: October 23, 2025
        </p>

        <p className="mb-6">
          Welcome to <span className="font-semibold">devtinderpro.pw</span>!
          This page explains how we process and ship orders. Please review the
          details below to know how shipping works for your orders.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Order Processing Time</h2>
          <p>
            All orders are processed within{" "}
            <span className="font-medium">1–2 business days</span> after
            receiving your payment. You’ll receive a confirmation email once
            your order has shipped.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Shipping Options</h2>
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Region</th>
                <th className="border p-2 text-left">Method</th>
                <th className="border p-2 text-left">Est. Delivery</th>
                <th className="border p-2 text-left">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">India (Domestic)</td>
                <td className="border p-2">Standard</td>
                <td className="border p-2">2–5 business days</td>
                <td className="border p-2">₹79 or free over ₹999</td>
              </tr>
              <tr>
                <td className="border p-2">India (Domestic)</td>
                <td className="border p-2">Express</td>
                <td className="border p-2">1–2 business days</td>
                <td className="border p-2">₹199</td>
              </tr>
              <tr>
                <td className="border p-2">International</td>
                <td className="border p-2">Tracked International</td>
                <td className="border p-2">5–12 business days</td>
                <td className="border p-2">Calculated at checkout</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Important Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Delivery times may vary depending on location and courier delays.
            </li>
            <li>
              Ensure your shipping address is correct to avoid delays or
              returned packages.
            </li>
            <li>
              International orders may be subject to customs duties or taxes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions about shipping, reach out at
            <a href="mailto:support@devtinderpro.pw" className="ml-1 underline">
              support@devtinderpro.pw
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
