export default function Page({params}) {
    console.log(params);
    
    return <>
    <h1>Products by ID {params.productsId}</h1>
    </>
}