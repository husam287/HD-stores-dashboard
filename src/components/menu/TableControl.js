import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineEdit, AiOutlineSetting } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'
import { MdOutlineDeleteOutline } from 'react-icons/md'

const TableControl = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<AiOutlineSetting />}
                variant="outline"
            />
            <MenuList>
                <MenuItem icon={<GrView />}>
                    View
                </MenuItem>
                <MenuItem icon={<AiOutlineEdit />}>
                    Edit
                </MenuItem>
                <MenuItem color={'red'} icon={<MdOutlineDeleteOutline />}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default TableControl