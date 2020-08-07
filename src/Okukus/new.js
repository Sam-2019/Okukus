import React from "react";
import Products from "./files/products";

const Body = () => {
  let content = Products.map((product) => (
    <>
      <div className="column books">
        <a
          id="product"
          href="buy_nowd9bb.html?product_unique_id=574ed359ce2e18.82356240"
        >
          <img src="574ed359ce2e18.82356240.png" alt="" className="" />
        </a>

        <div className="details">
          <h4>The Man Who Was Thursday</h4>
          <p> thriller</p>
          <a
            id="product"
            href="buy_nowd9bb.html?product_unique_id=574ed359ce2e18.82356240"
          >
            <button>₵10.00</button>
          </a>
        </div>
      </div>
    </>
  ));
  return (
    <>
      {content}
      <div className="bg-dark  text-center">
        <main>
          <div className="links" id="products">
            <div className="box">
              <div className="myBtnConatainer">
                <button className="btn active" onclick="filterSelection('all'">
                  Show all
                </button>
                <button className="btn" onclick="filterSelection('books'">
                  Books
                </button>
                <button className="btn" onclick="filterSelection('bags'">
                  Bags
                </button>
                <button className="btn" onclick="filterSelection('shoes'">
                  Shoes
                </button>
                <button className="btn" onclick="filterSelection('clothes'">
                  Clothes
                </button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="row">
              <div className="column books">
                <a
                  id="product"
                  href="buy_nowd9bb.html?product_unique_id=574ed359ce2e18.82356240"
                >
                  <img src="574ed359ce2e18.82356240.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>The Man Who Was Thursday</h4>
                  <p> thriller</p>
                  <a
                    id="product"
                    href="buy_nowd9bb.html?product_unique_id=574ed359ce2e18.82356240"
                  >
                    <button>₵10.00</button>
                  </a>
                </div>
              </div>
              <div className="column books">
                <a
                  id="product"
                  href="buy_now3f28.html?product_unique_id=574ed359ce2e18.82356121"
                >
                  <img src="574ed359ce2e18.82356121.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>The Greatest Divorce</h4>
                  <p> Religious</p>
                  <a
                    id="product"
                    href="buy_now3f28.html?product_unique_id=574ed359ce2e18.82356121"
                  >
                    <button>₵12.00</button>
                  </a>
                </div>
              </div>
              <div className="column books">
                <a
                  id="product"
                  href="buy_now91e5.html?product_unique_id=5887d0173e8596.49997722"
                >
                  <img src="5887d0173e8596.49997722.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>A Short History of the Chinese People</h4>
                  <p> History</p>
                  <a
                    id="product"
                    href="buy_now91e5.html?product_unique_id=5887d0173e8596.49997722"
                  >
                    <button>₵10.00</button>
                  </a>
                </div>
              </div>
              <div className="column books">
                <a
                  id="product"
                  href="buy_nowaae2.html?product_unique_id=574ed359ce2e18.82356123"
                >
                  <img src="574ed359ce2e18.82356123.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>The Little Train That Could</h4>
                  <p> Children's literature</p>
                  <a
                    id="product"
                    href="buy_nowaae2.html?product_unique_id=574ed359ce2e18.82356123"
                  >
                    <button>₵10.00</button>
                  </a>
                </div>
              </div>
              <div className="column books">
                <a
                  id="product"
                  href="buy_nowb9a7.html?product_unique_id=574ed359ce2e18.82356495"
                >
                  <img src="574ed359ce2e18.82356495.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>The Great Gatsby</h4>
                  <p> Fiction</p>
                  <a
                    id="product"
                    href="buy_nowb9a7.html?product_unique_id=574ed359ce2e18.82356495"
                  >
                    <button>₵25.00</button>
                  </a>
                </div>
              </div>
              <div className="column books">
                <a
                  id="product"
                  href="buy_nowa862.html?product_unique_id=5887d0173e8596.49997726"
                >
                  <img src="5887d0173e8596.49997726.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>The Merchant of Venice</h4>
                  <p> Shakespearean comedy</p>
                  <a
                    id="product"
                    href="buy_nowa862.html?product_unique_id=5887d0173e8596.49997726"
                  >
                    <button>₵23.00</button>
                  </a>
                </div>
              </div>
              <div className="column books">
                <a
                  id="product"
                  href="buy_now34be.html?product_unique_id=574ed359ce2e18.82356497"
                >
                  <img src="574ed359ce2e18.82356497.png" alt="" className="" />
                </a>

                <div className="details">
                  <h4>The Man God Uses</h4>
                  <p> Christian Literature </p>
                  <a
                    id="product"
                    href="buy_now34be.html?product_unique_id=574ed359ce2e18.82356497"
                  >
                    <button>₵26.50</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Body;

