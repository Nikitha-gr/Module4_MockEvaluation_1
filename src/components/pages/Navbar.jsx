import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
    <Box bg={"blue.500"} color="white" fontWeight="bolder" p={4}>
        <Flex justifyContent={"space-evenly"}>
            <Link  to="/" fontSize={"xl"} > Products </Link>
            <Link  to="/cart" fontSize={"xl"} > Cart </Link>
            <Link  to="/checkout" fontSize={"xl"} > Checkout </Link>
        </Flex>
    </Box>
 )   
}

export default Navbar;