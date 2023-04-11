import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        items,
        cartTotal,
        isEmpty,
        updateItemQuantity,
        totalUniqueItems,
        removeItem,
        emptyCart,

    } = useCart()

    return isEmpty
        ? <div className="emptycart"><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDEwODkxZjQzYTNlN2RhN2ViOGNjOGZhOWIxZWY0YWM1ZGI4YmYwZCZjdD1z/UU5nZHiM86H37VBAcU/giphy.gif  " alt="err" /></div>
        : (
            <div id='cart'>
                <Container>
                    <h1>Cart {totalUniqueItems}</h1>
                    <Row className="items">
                        {/* {items.map((item: any) => (
                        ))} */}
                    </Row>
                    <Button variant='danger' onClick={() => emptyCart()}>Delete all</Button>
                </Container>
            </div>
        )

}

export default Cart