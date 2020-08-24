import { useState, useEffect } from "react";

function useAsync(getMethod) {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const result = await getMethod;

      if (result.status !== 200) {
        setError(result.status);
      } else {
        setTimeout(() => {
          setSuccess(result.status);
          setValue(result.data);
          setLoading(false);
        }, 1800);
      }
    };
    fetchData();
  }, [value]);

  return { value, error, loading, success };
};

export  default useAsync