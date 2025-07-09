// import './App.css'

// import { Fragment } from "react"
// import Count from "./Count"

// function App() {

//   return (
//     <Fragment>
//       <Count name="Prajnesh" />
//     </Fragment>
//   )
// }

// export default App
//*** */
// import { Fragment } from "react"
// import Count from "./Count"

// function App() {

//   let a = <Fragment>
//     <Count name="Prajnesh" />
//   </Fragment>
//   return a
// }

// export default App

//*** Product*/

// import './App.css'

// import { Fragment } from "react"
// import { useEffect, useState } from 'react';
// // import Product from './Product'

// import style from './style.module.css'

// function App() {

//   const [product, setProduct] = useState([])
//   useEffect(() => {
//     fetch("https://dummyjson.com/products").then((res) => res.json()).then((data) => {
//       setProduct(data.products)
//       console.log(data)
//     })
//   }, [])
//   return (
//     <div className={style.container} >
//       {
//         product.map((product) => (
//           <div className={style.card} key={product.id}>
//             <img src={product.thumbnail} alt="product" />
//             <h3>{product.title}</h3>
//             <p>₹ {product.price}</p>
//             <button>Add to Cart</button>
//           </div>
//         ))
//       }
//     </div>
//   )
// }
// export default App

//** */

// import { useEffect, useState } from "react";
// import Product from "./Product";
// import Header from "./header";
// import style from "./style.module.css";

// function App() {
//   const [product, setProduct] = useState([]);
//   const [search, setSearch] = useState('');
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data.products);
//         // console.log(data);
//       });
//   }, []);
//   const filteredProducts = product.filter((p) =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <>
//       <Header setSearch={setSearch} />
//       <div className={style.container}>
//         {filteredProducts.map((product) => (
//           <Product
//             name={product.title}
//             img={product.thumbnail}
//             price={product.price}
//             description={product.description}
//             key={product.id}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
// export default App;

//*** */
// import { useEffect, useState } from "react";
// import Product from "./Product";

// import style from "./style.module.css";
// import Header from "./header";

// function App() {
//   const [product, setProduct] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data.products);
//       });
//   }, []);

//   const filteredProducts = product.filter((p) =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <Header setSearch={setSearch} />
//       <div className={style.container}>
//         {filteredProducts.map((product) => (
//           <Product
//             key={product.id}
//             name={product.title}
//             img={product.thumbnail}
//             price={product.price}
//             description={product.description}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

//***Forms in react */
// import { useState } from "react";

import ExpenseTabble from "./ComponentsOfForm/ExpenseTabble";
import Form from "./ComponentsOfForm/Form";
import "./ComponentsOfForm/formStyle.css";
import expenseData from "./ComponentsOfForm/expenseData";
import { useLocalStorage } from "./ComponentsOfForm/Hooks/useLocalstorege";
function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });
  // const [localData, setLocalData] = useLocalStorage("myName", [1, 2, 3]);
  // console.log(localData);

  return (
    <>
      <main>
        <h1
        // onClick={() => setLocalData((prevstate) => [...prevstate, 4, 5, 6])}
        >
          Track Your Expense
        </h1>
        <div className="expense-tracker">
          <Form
            setExpenses={setExpenses}
            expense={expense}
            setExpense={setExpense}
            editingRowId={editingRowId}
            setEditingRowId={setEditingRowId}
          />
          <ExpenseTabble
            epxpenses={expenses}
            setExpense={setExpense}
            setExpenses={setExpenses}
            setEditingRowId={setEditingRowId}
          />
          {/* <ContextMenu /> */}
        </div>
      </main>
    </>
  );
}

export default App;
