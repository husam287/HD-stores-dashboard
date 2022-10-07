import { Td, Tr } from '@chakra-ui/react'
import TableControl from 'components/menu/TableControl'
import React from 'react'

const UserTableRow = ({
    name,
    email,
    branchName
}) => {
    return (
        <Tr>
            <Td>
                {name}
            </Td>
            <Td>
                {email}
            </Td>
            <Td>
                {branchName}
            </Td>
            <Td>
                <TableControl />
            </Td>
        </Tr>
    )
}

export default UserTableRow