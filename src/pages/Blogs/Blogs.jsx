import React from 'react'

import BlogsHero from './BlogsHero'
import BlogList from './BlogList'
import Categories from '../Home/Categories'
import JoinTeam from '../Home/JoinTeam'


const Blogs = () => {
  return (
    <div>
      <BlogsHero/>
      <BlogList/>
      <Categories/>
      <JoinTeam/>
    </div>
  )
}

export default Blogs