import { useState } from "react";
import ContextMenu from "./ContextMenu";
import { useFilter } from "./Hooks/useFilter";

function ExpenseTabble({
  epxpenses,
  setExpenses,
  setExpense,
  setEditingRowId,
}) {
  const [filterdData, setQuery] = useFilter(epxpenses, (data) => data.category);
  const [position, setPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [sortCallback, setSortCallback] = useState(() => {});
  // console.log(sortCallback);
  // console.log(position);
  const total = filterdData.reduce((accumulator, current) => {
    return accumulator + parseInt(current.amount);
  }, 0);
  console.log("rendering expense table");
  return (
    <>
      <ContextMenu
        contaxtPosition={position}
        setPosition={setPosition}
        setExpenses={setExpenses}
        rowId={rowId}
        setExpense={setExpense}
        epxpenses={epxpenses}
        setEditingRowId={setEditingRowId}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (position.left || position.top) {
            setPosition({});
          }
        }}
      >
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setSortCallback(
                      () => (a, b) => a.title.localeCompare(b.title)
                    );
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortCallback(
                      () => (a, b) => b.title.localeCompare(a.title)
                    );
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select
                name="category"
                id="category"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setSortCallback(() => (a, b) => a.amount - b.amount);
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortCallback(() => (a, b) => b.amount - a.amount);
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterdData.sort(sortCallback).map((expense) => (
            <tr
              key={expense.id}
              onContextMenu={(e) => {
                e.preventDefault();
                setPosition({
                  left: e.clientX + 4,
                  top: e.clientY + 4,
                });
                setRowId(expense.id);
              }}
            >
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th
              className="clear-sort"
              onClick={() => {
                setSortCallback(() => () => {});
              }}
            >
              Clear Sort
            </th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTabble;
