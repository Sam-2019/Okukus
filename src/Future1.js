import React, { useState, useEffect } from "react";
import axios from "axios";

const useAsync2 = (getMethod, params) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState([]);

  async function getResource() {
    try {
      setLoading(true);
      const result = await getMethod(...params);
      setValue(result);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getResource();
  }, params);

  return { value, error, loading };
};

const AddPost = () => {
  const [post, setPost] = useState("");

  const url =  axios.get("https://jsonplaceholder.typicode.com/posts")
  const id = 20;

  var formData = new FormData();
  formData.set("post", post);
  formData.set("id", id);

  const resource = useAsync2(url, id);
  console.log(resource);

  return (
    <div className="m-5">
      <input
        className="form-input"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <button className="search-button" >
        Search
      </button>
    </div>
  );
};

export default AddPost;
