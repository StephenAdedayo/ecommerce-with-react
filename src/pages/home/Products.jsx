import React, { useEffect, useState } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa'
import Cards from '../../components/Cards'

const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOption, setSortOption] = useState("default")
    const [search, setSearch] = useState('')
  

    useEffect (() => {
          const fetchData = async () => {
            try{
                const response = await fetch("/products.json")
                const data = await response.json();
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
          }
          fetchData();
    }, [])

    // console.log(products);

   const filteredItem = (category) => {
    const filtered = category === "all" ? (products) : products.filter((item) => item.category === category)
    setFilteredItems(filtered)
    setSelectedCategory(category)
   }

   const showAll =() => {
    setFilteredItems(products)
    setSelectedCategory("all")
   }

   const handleSortChange = (option) => {
    setSortOption(option)

    // let sortedItems = [...products]

    switch(option){
      case "A-Z" : 
         products.sort((a,b) => a.title.localeCompare(b.title))
         break
         case "Z-A" : 
         products.sort((a,b) => b.title.localeCompare(a.title))
         break
         case "low-to-high":
          products.sort((a,b) => a.price - b.price)
          break
          case "high-to-low":
            products.sort((a,b) => b.price - a.price)
            break
         default: 'default'
          break

    }
    setFilteredItems(products)
   }

   const handleSearch = (value) => {
    
    setSearch(value)
    
    const filter = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
    setFilteredItems(filter)
   }

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-12'>
       <h2 className='title'>Or subscribe to the newsletters</h2>


          <div>
          <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>

<div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
   <button onClick={showAll}>All Products</button>
   <button onClick={() => filteredItem("Dress")}>Clothing</button>
   <button onClick={() => filteredItem("Hoodies")}>Hoodies</button>
   <button onClick={() => filteredItem("Bag")}>Bags</button>
</div>


<div className='flex items-center rounded-lg border-2 border-black px-6 py-3 '>
  <input
  className='outline-none grow' 
  value={search}
  onChange={(e) => handleSearch(e.target.value)}
  type="text" placeholder='search'/>
  <FaSearch />
</div>

<div className=' flex justify-end rounded-sm '>
   <div className='bg-black p-2'>
       <FaFilter className='text-white size-4' />
   </div>
   <select 
   id='sort'
   onChange={(e) => handleSortChange(e.target.value)}
   value={sortOption}
   className='bg-black text-white px-2 py-1 rounded-sm'>
       <option value="default">Default</option>
       <option value="A-Z">A-Z</option>
       <option value="Z-A">Z-A</option>
       <option value="low-to-high">Low to High</option>
       <option value="high-to-low">High to low</option>
   </select>
</div>


</div>



<Cards  filteredItems ={filteredItems} />

 </div>





    </div>
  )
}

export default Products
