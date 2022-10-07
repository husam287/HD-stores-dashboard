import {
    Box, Table, TableCaption, Tbody, Th, Thead, Tr, useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import CategoryTableRow from "./components/CategoryTableRow";

export default function Categories() {
    const textColor = useColorModeValue("gray.700", "white")
    const tablesProjectData = [
        {
            name: "Horizon UI Version",
            
        },
        {
            name: "Add Progress Track",
            
        },
        {
            name: "Fix Platform Errors",
           
        },
        {
            name: "Launch our Mobile App",
            
        },
        {
            name: "Add the New Pricing Page",
            
        },
    ]

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Table variant="simple" color={textColor}>
                <TableCaption>All Categories from all Branches</TableCaption>
                <Thead>
                    <Tr my=".8rem" pl="0px">
                        <Th pl="0px">
                            Name
                        </Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tablesProjectData.map((row) => {
                        return (
                            <CategoryTableRow
                                name={row.name}
                            />
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
    );
}
