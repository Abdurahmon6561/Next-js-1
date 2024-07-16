export default function Page({params}) {
    console.log(params);
    
    return <>
    <h1>News by ID {params.newsId}</h1>
    </>
}