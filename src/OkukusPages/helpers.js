import { useState, useEffect } from "react";
import axios from "axios";

export const axiosMethod = async (url, formData) => {
  const method = await axios({
    method: "post",
    url: url,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return method;
};

// export const useAsync = (getMethod, data) => {
//   const [loading, setLoading] = useState(true);
//   const [success, setSuccess] = useState();
//   const [error, setError] = useState();
//   const [value, setValue] = useState([]);

//   const fetchData = async () => {
//     const result = await getMethod(data);
//     if (result.status !== 200) {
//       setError(result.status);
//     } else {
//       setTimeout(() => {
//         setSuccess(result.status);
//         setValue(result.data);
//         setLoading(false);
//       }, 1800);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, data);

//   return { value, error, loading, success };
// };

export const useAsync = (getMethod, data) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    const result = await getMethod(data);

    if (result.status !== 200) {
      setMessage(result.data.message);
    } else {
      setSuccess(result.status);
      setValue(result.data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { value, error, loading, success };
};

export const useAsyncc = (getMethod) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    const result = await getMethod();

    if (result.status !== 200) {
      setError(result.status);
    } else {
      setSuccess(result.status);
      setValue(result.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { value, error, loading, success };
};
