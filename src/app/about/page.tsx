import React from 'react'

const AboutPage = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="snap-start h-screen bg-red-500">Hero</section>
      <section className="snap-start h-screen bg-green-500">About</section>
      <section className="snap-start h-screen bg-blue-500">Projects</section>
    </div>
  )
}

export default AboutPage