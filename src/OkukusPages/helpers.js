import { useState, useEffect, useCallback } from "react";
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
//   const [message, setMessage] = useState();
//   const [value, setValue] = useState([]);

//   const fetchData = useCallback(async () => {
//     const result = await getMethod(data);

//     if (result.data.error === true) {
//       setSuccess(result.status);
//       setMessage(result.data.message);
//       setValue(null);
//       setLoading(false);
//     } else if (result.data.error === false) {
//       setValue(result.data.data);
//       setLoading(false);
//       setMessage(null);
//       setError(null);
//     }
//   }, [getMethod]);

//   useEffect(() => {
//     if (data) {
//       fetchData();
//     }
//   }, [fetchData, data]);

//   return { value, message, error, loading, success };
// };

export const useAsync = (getMethod, data) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    const result = await getMethod(data);

    if (result.data.error === true) {
      setSuccess(result.status);
      setMessage(result.data.message);
      setValue(null);
      setLoading(false);
    } else if (result.data.error === false) {
      setValue(result.data.data);
      setLoading(false);
      setMessage(null);
      setError(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return { value, message, error, loading, success };
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
  }, [getMethod]);

  return { value, error, loading, success };
};
