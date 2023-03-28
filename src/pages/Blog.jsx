import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };


  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
        className="form-control my-3"
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

          .map((item) => (
            <Link to={`/blog/${item.id}`} key={item.id} className="list-item">
              {item.id}-{item.title}{" "}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
