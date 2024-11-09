import React from 'react'
import Hero from './Hero'
import BlogPostLayout from './BlogPostLayout'
import AboutSection from './AboutSection'
import Categories from './Categories'
import Story from './Story'
import Authors from './Authors'
import Testimonial from './Testimonials'
import JoinTeam from './JoinTeam'




const Home = () => {
  return (
    <div>
      <Hero/>
      <BlogPostLayout/>
      <AboutSection/>
      <Categories/>
      <Story/>
      <Authors/>
      <Testimonial />
      <JoinTeam/>
    </div>
  )
}

export default Home