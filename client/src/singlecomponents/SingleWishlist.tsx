import React from 'react'

import { Tr, Td } from 'react-super-responsive-table'
import { removeWish } from '../myredux/action'
import { useAppDispatch } from '../store'
import { useCart } from 'react-use-cart'

const SingleWishlist = ({ element }: any) => {
    const dispatch = useAppDispatch()
    const {
        addItem
    } = useCart()

    const handleRemove = () => {
        dispatch(removeWish(element));
    }

    const handleAdd = () => {
        addItem(element)
    }

    return (
        <Tr className=''>
            <Td className='align-middle'>
                <div className="d-flex align-items-center">
                    <img className='wish-img img-fluid ' src={element.image} width={70} alt={element.title} />
                    <h5 className='m-0 ms-4'>{element.title}</h5>
                </div>
            </Td>
            <Td className='align-middle text-center' ><button className='wish-btn btn-add ' onClick={handleAdd} id="add">+</button></Td>
            <Td className='align-middle text-center' ><button className='wish-btn btn-remove ' onClick={handleRemove} id="cancel">x</button></Td>
        </Tr>
    )
}

export default SingleWishlist