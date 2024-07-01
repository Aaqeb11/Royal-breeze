import React from "react";

const PaymentMethod = () => {
  return (
    <div
      className="text-center font-sans text-gray-800 p-8 scroll-mt-[68px]"
      id="payment"
    >
      <h1 className="text-2xl font-bold mb-4">Starting at</h1>
      <h1 className="text-4xl font-bold mb-6">$275,000</h1>
      <h1 className="text-2xl font-bold mb-4">Payment Method</h1>
      <div className="flex flex-col items-center mt-6">
        <div className="mb-2">
          <p className="font-medium">Reservation</p>
          <p className="text-lg">US$5,000.00</p>
        </div>
        <div className="text-2xl text-gray-500 mb-2">↓</div>
        <div className="mb-2">
          <p className="font-medium">Upon signing the contract</p>
          <p className="text-lg">20%</p>
        </div>
        <div className="text-2xl text-gray-500 mb-2">↓</div>
        <div className="mb-2">
          <p className="font-medium">During construction</p>
          <p className="text-lg">35%</p>
        </div>
        <div className="text-2xl text-gray-500 mb-2">↓</div>
        <div className="mb-2">
          <p className="font-medium">Upon delivery</p>
          <p className="text-lg">45%</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>Kitchen equipment, air conditioners, and jacuzzi included.</p>
        <p className="mt-2">
          The furnishings presented in the previous images are a representation
          of how to adapt the spaces and are not included with the house.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
