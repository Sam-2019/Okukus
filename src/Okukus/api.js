import axios from "axios";

export const getbooks = axios.get("https://okukus.com/api_call/get_books.php");
export const getbook = "https://okukus.com/api_call/get_book.php";
export const getbooktag = axios.get(
  "https://okukus.com/api_call/get_book_tag.php"
);
export const login = axios.get("https://okukus.com/api_call/user_login.php");
export const register = axios.get(
  "https://okukus.com/api_call/user_register.php"
);
export const orderbook = axios.get(
  "https://okukus.com/api_call/create_order.php"
);

export const booktags = axios.get(
    "https://okukus.com/api_call/get_book_tags.php"
  );

export const input = (uri, formData) => {
  axios({
    method: "post",
    url: uri,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
