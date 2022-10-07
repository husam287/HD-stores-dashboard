import { Td, Tr } from '@chakra-ui/react'
import TableControl from 'components/menu/TableControl'
import React from 'react'

const UserTableRow = ({
    name,
    location,
    phoneNumber
}) => {
    return (
        <Tr>
            <Td>
                {name}
            </Td>
            <Td>
                {location}
            </Td>
            <Td>
                {phoneNumber}
            </Td>
            <Td>
                <TableControl />
            </Td>
        </Tr>
    )
}

export default UserTableRow