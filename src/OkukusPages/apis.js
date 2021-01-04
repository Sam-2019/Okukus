export const okukus = "https://okukus.com";
export const live_site = "api_call";
export const dev_site = `${live_site}_dev`;

export const itemsGet = `${okukus}/${dev_site}/get_books.php`;
export const itemGet = `${okukus}/${dev_site}/get_book.php`;
export const tagsGet = `${okukus}/${dev_site}/get_book_tags.php`;
export const tagGet = `${okukus}/${dev_site}/get_book_tag.php`;

export const userLogin = `${okukus}/${dev_site}/user_login.php`;
export const userRegister = `${okukus}/${dev_site}/user_register.php`;
export const userValidate = `${okukus}/${dev_site}/user_validate.php`;
export const userPasswordUpdate = `${okukus}/${dev_site}/update_buyer_password.php`;
export const userProfileUpdate = `${okukus}/${dev_site}/update_buyer_profile.php`;
export const userEmailUpdate = `${okukus}/${dev_site}/update_buyer_email.php`;

//forgot my passsword first step
export const userAccountReset = `${okukus}/${dev_site}/create_password_reset_token.php`;
export const userAccountVerify = `${okukus}/${dev_site}/read_password_reset_token.php`;

//verify user account
export const userCreateEmailVerify = `${okukus}/${dev_site}/create_email_verification_token.php`;
export const userReadEmailVerify = `${okukus}/${dev_site}/read_email_verification_token.php`;

//password reset
export const passwordReset = `${okukus}/${dev_site}/update_buyer_password_reset.php`;

export const itemSearch = `${okukus}/${dev_site}/search.php`;

export const cartAdd = `${okukus}/${dev_site}/create_cart_item.php`;
export const cartGet = `${okukus}/${dev_site}/get_cart_items.php`;
export const cartCount = `${okukus}/${dev_site}/get_cart_count.php`;
export const cartUpdate = `${okukus}/${dev_site}/update_cart_item.php`;
export const cartDelete = `${okukus}/${dev_site}/delete_cart_item.php`;

export const cartCheckout = `${okukus}/${dev_site}/create_order_cart.php`;

export const cartSummary = `${okukus}/${dev_site}/read_cart_summary.php`;

export const orderCreate = `${okukus}/${dev_site}/create_order.php`;
export const orderHistory = `${okukus}/${dev_site}/get_order_history.php`;
export const orderDetail = `${okukus}/${dev_site}/get_order_details.php`;

export const wishCreate = `${okukus}/${dev_site}/create_wishlist_item.php`;
export const wishList = `${okukus}/${dev_site}/get_wishlist_items.php`;
export const wishDelete = `${okukus}/${dev_site}/delete_wishlist_item.php`;

export const userWelcome = `${okukus}/${dev_site}/create_newsletter_subscription.php`;