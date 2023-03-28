import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>
        {data.id}-
        {data.title}
      </h1>
      <p>{data.body}</p>
      <Link to="/blog">Volver</Link>
    </>
  );
};

export default BlogDetails;
