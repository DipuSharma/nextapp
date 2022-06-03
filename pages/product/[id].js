import Head from "next/head"
import Navbar from "../../components/Navbar"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params: {
                id: curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}

const DynamicPage = ({ data }) => {
    return (
        <>
            <Head>
                <title>Product Details Page</title>
            </Head>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Product Details Page</h1>
            <h4 style={{ textAlign: "center" }}>{data.id}</h4>
            <h2 style={{ textAlign: "center" }}>{data.title}</h2>
            <h4 style={{ textAlign: "center" }}>{data.body}</h4>
        </>
    )
}


export default DynamicPage