
import { fetchProducts } from "../../redux/actions";
import { Alert, Box, Button, Grid, GridItem, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Productlist = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return (
            <VStack mt={5}>
                <Spinner size="xl" />
                <Text>Loading Products...</Text>
            </VStack>
        )
    }

    if (error) {
        return (
            <Alert status="error" mt={5}>
                {error}
            </Alert>
        )
    }

    return (
        <>
           <Text fontWeight="bold" fontSize="32px" color="blue.500"  textAlign="center">Welcome to Product Page</Text>
            <Grid templateColumns="repeat(6,1fr)" gap={6} p={5}>
                {products.map((product) => {
                    <GridItem key={product.id} border={"1px solid black"} borderRadius={5}>
                        <Box p={5}>
                            <Image src={product.image} alt={product.title} boxSize="200px" />
                            <Box mt={4}>
                                <Text fontWeight="bold" textAlign="center">{product.title}</Text>
                                <Text textAlign="center" color="gray.200"> {product.price} </Text>
                                <Button bg="blue.500" mt={4} padding="10px 20px">Add to Cart</Button>
                            </Box>
                        </Box>
                    </GridItem>
                })}
            </Grid>
        </>
    )
}

export default Productlist;