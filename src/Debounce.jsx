import { useEffect, useState } from "react";

const Debounce = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);


const filteredPosts = posts.filter(
  (post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    post.body.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    post.userId.toString().includes(debouncedSearch)
);
  
  return (
    <div>
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div>

    </div>

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <p><strong>User ID:</strong> {post.userId}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
          <hr />
        </div>
      ))}

    </div>
  );
};

export default Debounce;