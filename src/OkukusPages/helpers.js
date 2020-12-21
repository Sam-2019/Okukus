import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const axiosMethod = async (type, url, formData) => {
  const method = await axios({
    method: type,
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

    if (result.error === true) {
      setTimeout(() => {
        setError(result.error);
        setSuccess(result.status);
        setMessage(result.message);
        setLoading(false);
        setValue(null);
      }, 1000);
    } else if (result.error === false) {
      setTimeout(() => {
        setValue(result.data);
        setLoading(false);
        setSuccess(result.status);
        setMessage(result.message);
        setError(null);
      }, 1000);
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
      setLoading(false);
      setError(result.status);
    } else {
      setSuccess(result.status);
      setValue(result.data);
      setLoading(false);
    }
  }, [getMethod]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
