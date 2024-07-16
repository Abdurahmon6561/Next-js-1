export default function Page({params}) {
    console.log(params);
    
    return <>
    <h1>Categories by ID {params.categoryId}</h1>
    </>
}