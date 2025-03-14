import { useParams, useSearchParams } from "react-router-dom";

export function Post(){
    const params = useParams();
    const [searchParams] = useSearchParams();

    return (
        <div>
            <h1>Post</h1>
            <h2>Param: {params.index}, QS: {searchParams.toString()}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde, eveniet dolorem maiores animi enim molestiae facilis distinctio. Id totam deserunt cupiditate velit, veritatis ipsum ex ratione dolorum sunt rem.</p>
        </div>
    );
};
