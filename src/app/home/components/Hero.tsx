import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-15 md:gap-10 px-6 py-10 md:py-15 md:grid-cols-2 md:px-20 h-100vh bg-gradient-to-b from-blue-100 to-background dark:bg-none">
      {/* Left Side - Text */}
      <div className="slide-in-from-left space-y-8">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
          Where Purity Meets Innovation
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Elevating water purification through advanced technology, trusted
          craftsmanship, and a commitment to your well-being.
        </p>
        <div className="space-y-4">
          <button className="bg-primary hover:bg-primary/90 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition">
            Explore Our Solutions
          </button>
          <p className="text-muted-foreground text-sm tracking-wider uppercase">
            Pure Water. Pure Life.
          </p>
        </div>
      </div>

      {/* Right Side - 3D Image */}
      <div className="slide-in-from-right flex justify-center">
        <Image
        src={"/images/water-shield-transparent.png"}
        height={500}
        width={500}
        alt='3D Water Purifier'
        className='dark:drop-shadow-[0_10px_50px_rgba(168,85,247,0.7)]'
        />
      </div>
    </section>
  )
}
