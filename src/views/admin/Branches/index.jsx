import {
    Box, Table, TableCaption, Tbody, Th, Thead, Tr, useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import UserTableRow from "./components/BranchTableRow";

export default function Branches() {
    const textColor = useColorModeValue("gray.700", "white")
    const tablesProjectData = [
        {
            name: "Mall Masr",
            location: "$14husam287@hh.com",
            phoneNumber: "01129444515",
        },
        {
            name: "Shoubra",
            location: "$3husam287@hh.com",
            phoneNumber: "01129444515",
        },
        {
            name: "Haram",
            location: "Nothusam287@hh.com",
            phoneNumber: "01129444515",
        },
        {
            name: "Abbasya",
            location: "$32husam287@hh.com",
            phoneNumber: "01129444515",
        },
        {
            name: "5th settlement",
            location: "husam287@hh.com",
            phoneNumber: "011294445133",
        },
    ]

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Table variant="simple" color={textColor}>
                <Thead>
                    <Tr my=".8rem" pl="0px">
                        <Th pl="0px">
                            Name
                        </Th>
                        <Th>Location</Th>
                        <Th>Phone number</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tablesProjectData.map((row) => {
                        return (
                            <UserTableRow
                                name={row.name}
                                location={row.location}
                                phoneNumber={row.phoneNumber}
                            />
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
    );
}
