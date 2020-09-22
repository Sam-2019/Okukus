import React, { useState, useEffect } from "react";
import axios from "axios";

const requestchurchData = axios.get(
  "http://jsonplaceholder.typicode.com/posts"
);

const axiosMethod = async (url, formData) => {
  const method = await axios({
    method: "post",
    url: url,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return method.data;
};

const useAsync = (getMethod) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMethod;

      if (result.status !== 200) {
        setError(result.status);
        setLoading(false);
      } else {
        setTimeout(() => {
          setSuccess(result.status);
          setValue(result.data);
          setLoading(false);
        }, 1800);
      }
    };
    fetchData();
  }, [value, getMethod]);

  return { value, error, loading, success };
};

function FetchMultiple() {
  const resource = useAsync(requestchurchData);

  let content;
  content = resource.value.map(({ id, title, body }) => (
    <div key={id}>
      <h2> {title}</h2>
      <p> {body}</p>
    </div>
  ));

  //  if (resource.error) {
  //    content = <span className="text-danger">{error}</span>;
  //  } else {
  //    content = value.map(({ _id, first_name }) => (
  //      <div key={_id}>
  //        <h2> {first_name}</h2>
  //      </div>
  //    ));
  //  }

  return (
    <div className=" m-5 ">
      {resource.loading ? (
        <>Loading </>
      ) : resource.error ? (
        <span className="text-danger">{resource.error}</span>
      ) : (
        <>{content}</>
      )}
    </div>
  );
}

export default FetchMultiple;
