import React from 'react'
import { useAppSelector } from '../store'

const SearchSection = () => {
  const { lang } = useAppSelector(state => state.auth)
  const t = lang === 'en';
  return (
    <div className="container">
        <div className="row d-flex justify-content-evenly g-4">
          <div className=" col-6 col-md-3 search_section ">
            <img src="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
              <i className="fa-solid fa-bolt search_icon"></i>
              <h5 className='mt-3'>{t ? "NEW" : "YENi"}</h5>
            </div>
          </div>
          
          <div className=" col-6 col-md-3 search_section ">
            <img src="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
            <i className="fa-solid fa-tags search_icon"></i>
              <h5 className='mt-3'>{t ? "TAGS" : "ETIKETLƏR"}</h5>
            </div>
          </div>

          <div className=" col-6 col-md-3 search_section ">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
            <i className="fa-solid fa-percent search_icon"></i>
              <h5 className='mt-3'>{t ? "SPECİALS" : "XÜSUSİ"}</h5>
            </div>
          </div>

          <div className=" col-6 col-md-3 search_section ">
            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='search_section_img' alt="consol" />
            <div className="search_group">
            <i className="fa-solid fa-skull search_icon"></i>
              <h5 className='mt-3'>{t ? "FREE" : "PULSUZ"}</h5>
            </div>
          </div>


        </div>
    </div>
  )
}

export default SearchSection