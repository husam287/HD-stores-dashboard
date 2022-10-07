import {
    Box, Table, TableCaption, Tbody, Th, Thead, Tr, useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import UserTableRow from "./components/UserTableRow";

export default function Users() {
    const textColor = useColorModeValue("gray.700", "white")
    const tablesProjectData = [
        {
            name: "Horizon UI Version",
            email: "$14husam287@hh.com",
            branchName: "Working",
        },
        {
            name: "Add Progress Track",
            email: "$3husam287@hh.com",
            branchName: "Canceled",
        },
        {
            name: "Fix Platform Errors",
            email: "Nothusam287@hh.com",
            branchName: "Done",
        },
        {
            name: "Launch our Mobile App",
            email: "$32husam287@hh.com",
            branchName: "Done",
        },
        {
            name: "Add the New Pricing Page",
            email: "husam287@hh.com",
            branchName: "Working",
        },
    ]

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Table variant="simple" color={textColor}>
                <TableCaption>All users from all branches</TableCaption>
                <Thead>
                    <Tr my=".8rem" pl="0px">
                        <Th pl="0px">
                            Name
                        </Th>
                        <Th>Email</Th>
                        <Th>Branch</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tablesProjectData.map((row) => {
                        return (
                            <UserTableRow
                                name={row.name}
                                email={row.email}
                                branchName={row.branchName}
                            />
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
    );
}
