function ContextMenu({
  contaxtPosition,
  setPosition,
  setExpenses,
  rowId,
  setExpense,
  epxpenses,
  setEditingRowId,
}) {
  if (
    !contaxtPosition ||
    contaxtPosition.top === undefined ||
    contaxtPosition.left === undefined
  ) {
    return null;
  }

  return (
    <>
      <div className="context-menu" style={{ ...contaxtPosition }}>
        <div
          onClick={() => {
            console.log(rowId);
            const { title, category, amount } = epxpenses.find(
              (expense) => expense.id === rowId
            );
            setEditingRowId(rowId);
            setExpense({ title, category, amount });
            // console.log(editExoense);
            setPosition({});
          }}
        >
          Edit
        </div>
        <div
          onClick={() => {
            setExpenses((prestate) =>
              prestate.filter((expense) => expense.id !== rowId)
            );
            setPosition({});
          }}
        >
          Delete
        </div>
      </div>
    </>
  );
}

export default ContextMenu;
