let empty = location && digital_address && phone_number && payment_method;

var formData = new FormData();

if (payment_method === "cash") {
  let empty = location && digital_address && phone_number && payment_method;
  if (empty != "") {
    formData.set("buyer_unique_id", buyer_unique_id);
    formData.set("product_unique_id", product_unique_id);
    formData.set("location", location);
    formData.set("digital_address", digital_address);
    formData.set("phone_number", phone_number);
    formData.set("payment_method", payment_method);

    const uri = "https://okukus.com/api_call/create_order.php";
    axios({
      method: "post",
      url: uri,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(
      buyer_unique_id,
      product_unique_id,
      location,
      digital_address,
      phone_number,
      payment_method
    );
    clearCheckOut();
    doneShopping();
  } else alert("Please fill below");
} else if (payment_method === "momo") {
  let empty =
    location &&
    digital_address &&
    phone_number &&
    payment_method &&
    momo_name &&
    momo_number &&
    momo_transaction_id;
  if (empty != "") {
    formData.set("buyer_unique_id", buyer_unique_id);
    formData.set("product_unique_id", product_unique_id);
    formData.set("location", location);
    formData.set("digital_address", digital_address);
    formData.set("phone_number", phone_number);
    formData.set("payment_method", payment_method);
    formData.set("momo_name", momo_name);
    formData.set("momo_number", momo_number);
    formData.set("momo_transaction_id", momo_transaction_id);

    const uri = "https://okukus.com/api_call/create_order.php";
    axios({
      method: "post",
      url: uri,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(
      buyer_unique_id,
      product_unique_id,
      location,
      digital_address,
      phone_number,
      payment_method,
      momo_name,
      momo_number,
      momo_transaction_id
    );
    clearCheckOut();
    doneShopping();
  } else alert("Please fill below");
} else {
  alert("fill all fields");
}


const CheckOut = (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", buyer_unique_id);
    formData.set("product_unique_id", product_unique_id);
    formData.set("location", location);
    formData.set("digital_address", digital_address);
    formData.set("phone_number", phone_number);
    formData.set("payment_method", payment_method);
    formData.set("momo_name", momo_name);
    formData.set("momo_number", momo_number);
    formData.set("momo_transaction_id", momo_transaction_id);

    const uri = "https://okukus.com/api_call/create_order.php";
    axios({
      method: "post",
      url: uri,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(
      buyer_unique_id,
      product_unique_id,
      location,
      digital_address,
      phone_number,
      payment_method,
      momo_name,
      momo_number,
      momo_transaction_id
    );
    clearCheckOut();
    doneShopping();
  };