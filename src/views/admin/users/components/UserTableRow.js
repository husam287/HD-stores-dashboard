import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
import TableControl from './TableControl'

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