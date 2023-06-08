import React from 'react'
import { useAppSelector } from '../store'
import SingleWishlist from '../singlecomponents/SingleWishlist'
import Navbar0 from '../components/Navbar0'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Wishlist = () => {
  const { wishs } = useAppSelector(state => state.posts)
  const { lang } = useAppSelector(state => state.auth)
  const t = lang === 'en';
  return (
    <div id="wishlist">
      <Navbar0 />
      <div className="container">
        <h1 className='text-center'>{t ? "Wishlist" : "Istək siyahısı"}</h1>
        <div className="row px-5 ">
          <Table className="wish-table mb-5 " >
            <Thead>
              <Tr className=''>
                <Th scope="col">{t?"Product":"Əşya"}</Th>
                <Th scope="col" className="text-center" >{t?"Add to cart":"Səbətə əlavə et"}</Th>
                <Th scope="col" className="text-center" >{t?"Remove from wishlist":"Istək siyahısından silin"}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {wishs.map((element: any, index: number) => (
                <SingleWishlist element={element} key={index} />
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Wishlist