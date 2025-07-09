import { useState } from "react";
import styles from "./style.module.css"

function Count({ name }) {
    const [count, setCount] = useState(0);
    // console.log("rendering")
    let myname = name;
    console.log(count)
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        ><h1>{myname}</h1>
            <h2>{count}</h2>
            <button
                onClick={() => {
                    setCount((prestate) => prestate + 1);

                }} className={styles.btn}
            >
                Increase
            </button>
        </div>
    );
}

export default Count;
