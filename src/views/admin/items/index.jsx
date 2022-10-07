import {
    Box, Table, TableCaption, Tbody, Th, Thead, Tr, useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ItemTableRow from "./components/ItemTableRow";

export default function Items() {
    const textColor = useColorModeValue("gray.700", "white")
    const tablesProjectData = [
        {
            name: "Red T-shirt long",
            brand: "Black line",
            size: "xl",
            price: 399,
            qty: 1300,
            category: 'T-shirt'
        },
        {
            name: "Red T-shirt long",
            brand: "Black line",
            size: "xl",
            price: 399,
            qty: 1300,
            category: 'T-shirt'
        },
        {
            name: "Red T-shirt long",
            brand: "Black line",
            size: "xl",
            price: 399,
            qty: 1300,
            category: 'T-shirt'
        },
        {
            name: "Red T-shirt long",
            brand: "Black line",
            size: "xl",
            price: 399,
            qty: 1300,
            category: 'T-shirt'
        },
    ]

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Table variant="simple" color={textColor}>
                <TableCaption>All items in the store</TableCaption>
                <Thead>
                    <Tr my=".8rem" pl="0px">
                        <Th pl="0px">
                            Name
                        </Th>
                        <Th>Brand</Th>
                        <Th>Size</Th>
                        <Th>Price</Th>
                        <Th>Qty</Th>
                        <Th>Category</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tablesProjectData.map((row) => {
                        return (
                            <ItemTableRow
                                name={row.name}
                                brand={row.brand}
                                size={row.size}
                                price={row.price}
                                qty={row.qty}
                                category={row.category}
                            />
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
    );
}
