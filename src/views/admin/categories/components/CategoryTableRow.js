import { Td, Tr } from '@chakra-ui/react'
import TableControl from 'components/menu/TableControl'
import React from 'react'

const CategoryTableRow = ({
    name,
}) => {
    return (
        <Tr>
            <Td>
                {name}
            </Td>
            <Td>
                <TableControl />
            </Td>
        </Tr>
    )
}

export default CategoryTableRow