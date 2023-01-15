import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { useState } from "react";
import { useRouter } from "next/router";
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";

const AddProduct = () => {
    const [p_name, setP_Name] = useState();
    const [price, setPrice] = useState();
    const [d_price, setD_Price] = useState();
    const [size, setSize] = useState();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState();
    const [loading, setLoading] = useState();
    const router = useRouter();

    const submit = async (e) => {

        e.preventDefault();
        let data = ({ p_name, price, d_price, size, category, description, file})
        if(!p_name){
          alert("Please enter product name !")
        }
        else{
          fetch('http://127.0.0.1:8000/add-product', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
            },
            body: JSON.stringify(data)
          }).then((result) => {
            result.json().then((response) => {
              setLoading(false);
              if (response.detail) {
                alert(response.detail);
                router.push('/admin/add_product');
              }
              else {
                alert(response.detail);
                router.push('/admin/add_product');
              }
            })
          })
        }
      }

    return (
        <ThemeProvider theme={theme}>
            <style jsx global>{`
        footer {
          display: none;
        }
        .container-fluid .navbar {
          display: none;
        }
      `}</style>
            <FullLayout>
                <div className="container">
                    <div className="row">
                        <Grid container spacing={0}>
                            <Grid item xs={12} lg={12}>
                                <BaseCard title="Add Product">
                                    <Stack spacing={3}>
                                        <TextField onChange={(e) => { setP_Name(e.target.value) }} name="p_name"
                                            label="Product Name" variant="outlined" />
                                        <TextField onChange={(e) => { setPrice(e.target.value) }} name="price"
                                            label="Price" variant="outlined" />
                                        <TextField onChange={(e) => { setD_Price(e.target.value) }} name="d_price"
                                            label="Discount Price" variant="outlined" />
                                        <TextField onChange={(e) => { setSize(e.target.value) }} name="size"
                                            label="Size" variant="outlined" />
                                        <TextField onChange={(e) => { setCategory(e.target.value) }} name="category"
                                            label="Type" variant="outlined" />
                                        <TextField onChange={(e) => { setDescription(e.target.value) }} name="description"
                                            label="Discription" multiline rows={4} />
                                        <TextField onChange={(e) => { setFile(e.target.value) }} name="file"
                                            label="Product Image" type="file" variant="outlined" />
                                    </Stack>
                                    <br />
                                    <Button onClick={submit} type="submit" variant="contained" mt={2}>
                                        Submit
                                    </Button>
                                </BaseCard>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </FullLayout>
        </ThemeProvider>
    )
}

export default AddProduct;