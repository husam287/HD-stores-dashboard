import { Td, Tr } from '@chakra-ui/react'
import TableControl from 'components/menu/TableControl'
import React from 'react'

const ItemTableRow = ({
    name,
    brand,
    size,
    price,
    qty,
    category
}) => {
    return (
        <Tr>
            <Td>
                {name}
            </Td>
            <Td>
                {brand}
            </Td>
            <Td>
                {size}
            </Td>
            <Td>
                {price}
            </Td>
            <Td>
                {qty}
            </Td>
            <Td>
                {category}
            </Td>
            <Td>
                <TableControl />
            </Td>
        </Tr>
    )
}

export default ItemTableRow