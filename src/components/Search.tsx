import React from 'react'

const Search = () => {
  return (
    <div id="search">
      <div className="container">
        <div className="searchbar">
          <input type="text" value="" placeholder='Search'  />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
        <div className="row d-flex justify-content-evenly g-4 mt-1">
          <div className="col-3 search_section ">
            <img src="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
              <i className="fa-solid fa-bolt search_icon"></i>
              <h5 className='mt-3'>NEW</h5>
            </div>
          </div>
          
          <div className="col-3 search_section search_section2">
            <img src="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
            <i className="fa-solid fa-tags search_icon"></i>
              <h5 className='mt-3'>TAGS</h5>
            </div>
          </div>

          <div className="col-3 search_section search_section3">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
            <i className="fa-solid fa-percent search_icon"></i>
              <h5 className='mt-3'>SPECIALS</h5>
            </div>
          </div>

          <div className="col-3 search_section search_section4">
            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
            <i className="fa-solid fa-skull search_icon"></i>
              <h5 className='mt-3'>FREE</h5>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Search