export default function Page({params}) {
    console.log(params);
    
    return <>
    <h1>Blogs by ID {params.blogsId}</h1>
    </>
}