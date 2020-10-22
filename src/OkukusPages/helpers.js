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

  const fetchData = useCallback(async () => {
    const result = await getMethod(data);

    if (result.data.error === true) {
      setSuccess(result.status);
      setMessage(result.data.message);
      setValue(null);
      setLoading(false);
    } else if (result.data.error === false) {
      setValue(result.data.data);
      setLoading(false);
      setMessage(result.data.message);
      setError(null);
    }
  }, [data, getMethod]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { value, message, error, loading, success };
};

export const useAsyncc = (getMethod) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState([]);

  const fetchData = useCallback(async () => {
    const result = await getMethod();

    if (result.status !== 200) {
      setError(result.status);
    } else {
      setSuccess(result.status);
      setValue(result.data);
      setLoading(false);
    }
  }, [getMethod]);

  useEffect(() => {
    fetchData();
  }, [getMethod, fetchData]);

  return { value, error, loading, success };
};

export function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback\/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
