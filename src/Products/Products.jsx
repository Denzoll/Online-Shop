import React from "react";
import css from "./Products.module.css";
import imgMac from "../photo/масбус.jpg";
import imgWash from "../photo/мащынка.webp";
import imgBald from "../photo/мощь.webp";
import imgMoto from "../photo/скутыр.jpg";
import imgTv from "../photo/талвизор.jpg";
import imgTel from "../photo/талпо.webp";

const products = [
/*   {
    image: imgMac,
    title: "Macbook",
    cost: 97000,
  },
  {
    image: imgTel,
    title: "Galaxy",
    cost: 35999,
  },
  {
    image: imgMoto,
    title: "Скутыр",
    cost: 55000,
  },
  {
    image: imgTv,
    title: "Современный телевизор",
    cost: 1000,
  },
  {
    image: imgBald,
    title: "Снус",
    cost: 500,
  },
  {
    image: imgWash,
    title: "Стиральная машинка",
    cost: 75000,
  },
 */
  {
    id: 1,
    name: "MacBook",
    price: 100000,
    left: 31,
    image: "http://intocode.ru/d/react-project-1/images/1.jpg",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 35999,
    left: 11,
    image: "http://intocode.ru/d/react-project-1/images/2.jpg",
  },
  {
    id: 3,
    name: "Скутер",
    price: 65500,
    left: 0,
    image: "http://intocode.ru/d/react-project-1/images/3.jpg",
  },
  {
    id: 4,
    name: "Монитор Samsung",
    price: 12000,
    left: 7,
    image: "http://intocode.ru/d/react-project-1/images/4.jpg",
  },
  {
    id: 5,
    name: "Респераторная маска",
    price: 500,
    left: 24,
    image: "http://intocode.ru/d/react-project-1/images/5.jpg",
  },
  {
    id: 6,
    name: "Стиральная машина",
    price: 100000,
    left: 0,
    image: "http://intocode.ru/d/react-project-1/images/6.jpg",
  },
  {
    id: 7,
    name: "Белый холодильник",
    price: 43100,
    left: 18,
    image: "http://intocode.ru/d/react-project-1/images/7.jpg",
  },
  {
    id: 8,
    name: "Колонка",
    price: 3000,
    left: 1,
    image: "http://intocode.ru/d/react-project-1/images/8.jpg",
  },
  {
    id: 9,
    name: "Наушники",
    price: 1500,
    left: 5,
    image: "http://intocode.ru/d/react-project-1/images/9.jpg",
  },
];

const Products = (props) => {
  return (
    <div className={css.product_block}>
      {products.map((prod) => {
        return (
          <div key={prod.id} style={{width: '250px'}}>
            <div style={{ height: "250px"}}>
            <img src={prod.image} alt="дорого" />
            </div>
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <button>Купить</button>
          </div>
        );
      })}
     {/*  <div>
        <img src={imgMac} alt="дорого" width="250px" height="150px"></img>
        <h3>{products[0].title}</h3>
        <p>{products[0].cost}</p>
        <button>Купить</button>
      </div>
      <div>
        <img src={imgTel} alt="дорого" width="250px" height="150px"></img>
        <h3>{products[1].title}</h3>
        <p>{products[1].cost}</p>
        <button>Купить</button>
      </div>
      <div>
        <img src={imgMoto} alt="дорого" width="250px" height="150px"></img>
        <h3>{products[2].title}</h3>
        <p>{products[2].cost}</p>
        <button>Купить</button>
      </div>
      <div>
        <img src={imgTv} alt="дорого" width="250px" height="150px"></img>
        <h3>{products[3].title}</h3>
        <p>{products[3].cost}</p>
        <button>Купить</button>
      </div>
      <div>
        <img src={imgBald} alt="дорого" width="250px" height="150px"></img>
        <h3>{products[4].title}</h3>
        <p>{products[4].cost}</p>
        <button>Купить</button>
      </div>
      <div>
        <img src={imgWash} alt="дорого" width="250px" height="150px"></img>
        <h3>{products[5].title}</h3>
        <p>{products[5].cost}</p>
        <button>Купить</button>
      </div>
      <div></div>
      <div>
        <img
          src={products[6].image}
          alt="дорого"
          width="250px"
          height="150px"
        ></img>
        <h3>{products[6].name}</h3>
        <p>{products[6].price}</p>
        <button>Купить</button>
      </div>
      <div>
        <img
          src={products[7].image}
          alt="дорого"
          width="250px"
          height="150px"
        ></img>
        <h3>{products[7].name}</h3>
        <p>{products[7].price}</p>
        <button>Купить</button>
      </div>
      <div>
        <img
          src={products[8].image}
          alt="дорого"
          width="250px"
          height="150px"
        ></img>
        <h3>{products[8].name}</h3>
        <p>{products[8].price}</p>
        <button>Купить</button>
      </div>
      <div>
        <img
          src={products[9].image}
          alt="дорого"
          width="250px"
          height="150px"
        ></img>
        <h3>{products[9].name}</h3>
        <p>{products[9].price}</p>
        <button>Купить</button>
      </div>
      <div>
        <img
          src={products[10].image}
          alt="дорого"
          width="250px"
          height="150px"
        ></img>
        <h3>{products[10].name}</h3>
        <p>{products[10].price}</p>
        <button>Купить</button>
      </div> */}
    </div>
  );
};

export default Products;
