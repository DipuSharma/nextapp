import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import theme from "../../src/theme/theme";

const ViewShop = () => {
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
                                <ProductPerfomance />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </FullLayout>
        </ThemeProvider>
    )
}

export default ViewShop;