"use client"

import React, { useState } from "react"
import { RiDeleteBin3Fill } from "react-icons/ri"

function Cart() {
  const initialItems = [
    {
      id: 1,
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/61c3ac97919acac83d2486a5cf66fd87596a975015a12157c735b628bc76d403?apiKey=092e5299facd4790b1e37a52ac69c71d&",
      name: "Lenskart",
      price: 2600,
      quantity: 1,
    },
    {
      id: 2,
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ea91f1d4022e136b7dafcdc2b32d4a083d8088601905a94506ec740bea02bea?apiKey=092e5299facd4790b1e37a52ac69c71d&",
      name: "Lenskart",
      price: 2600,
      quantity: 1,
    },
    {
      id: 3,
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc613342425c757b6c27195ad5243620b49bd2967aebe30d822eabf953f72fbb?apiKey=092e5299facd4790b1e37a52ac69c71d&",
      name: "Bata",
      price: 2600,
      quantity: 1,
    },
  ]

  const [items, setItems] = useState(initialItems)
  const [appliedCoupon, setAppliedCoupon] = useState(false)

  const handleIncrease = (id: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const handleDecrease = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    )
  }

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const handleApplyCoupon = () => {
    setAppliedCoupon(true)
  }

  const handleAddCart = () => {
    alert("Items added to cart!")
  }

  const subTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = appliedCoupon ? subTotal * 0.2 : 0
  const total = subTotal - discount

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      {/* First Column */}
      <div className="flex w-full flex-col p-4 lg:w-2/3">
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between pb-4 ${index !== items.length - 1 ? "border-b" : ""}`}
            >
              <img loading="lazy" src={item.imgSrc} className="h-20 w-32 rounded" alt={item.name} />
              <div className="flex flex-col">
                <div>
                  <div className="text-md font-medium">{item.name}</div>
                  <div className="text-lg font-extrabold">${item.price}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => handleDecrease(item.id)} className="rounded bg-gray-200 px-2 py-1">
                  -
                </button>
                <div>{item.quantity}</div>
                <button onClick={() => handleIncrease(item.id)} className="rounded bg-gray-200 px-2 py-1">
                  +
                </button>
              </div>
              <div className="flex items-center gap-4">
                <RiDeleteBin3Fill onClick={() => handleDelete(item.id)} className="cursor-pointer text-red-500" />
              </div>
            </div>
          ))}
          <button className="mt-4 flex items-center justify-center rounded bg-green-600 p-2 text-white">
            <span>Add More Items</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/51bd49144f4ad91be51d2a97717a71f0641125009c2a2b032c1ea9991ed4d3f4?apiKey=092e5299facd4790b1e37a52ac69c71d&"
              className="ml-2 h-4 w-4"
              alt="Add"
            />
          </button>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex w-full flex-col rounded-lg bg-white p-4 lg:w-1/3">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-green-100 p-2">
          <div className="text-green-600">20% Special Offer</div>
          {!appliedCoupon ? (
            <button onClick={handleApplyCoupon} className="rounded bg-green-600 px-4 py-2 text-white">
              Apply Coupon
            </button>
          ) : (
            <button className="rounded bg-green-600 px-4 py-2 text-white">Applied</button>
          )}
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-gray-600">Sub-total</div>
          <div>${subTotal.toFixed(2)}</div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-gray-600">Special Offer</div>
          <div>-${discount.toFixed(2)}</div>
        </div>
        <div className="mb-4 flex items-center justify-between font-bold">
          <div>Total</div>
          <div>${total.toFixed(2)}</div>
        </div>
        <div className="mt-4 flex justify-between gap-4">
          <button onClick={handleAddCart} className="flex-grow rounded bg-green-600 px-4 py-2 text-white">
            Checkout
          </button>
          <button onClick={handleAddCart} className="flex-grow rounded bg-red-500 px-4 py-2 text-white">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
