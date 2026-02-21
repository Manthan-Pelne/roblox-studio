"use server"

import { getCategories } from '../actions/category'
import { AppSidebar } from './app-sidebar'

const Sidebar = async() => {
   const categories = await getCategories()
   //console.log("sidebar cat", categories)
  return (
    <div>
      <AppSidebar categories={categories}/>
    </div>
  )
}

export default Sidebar