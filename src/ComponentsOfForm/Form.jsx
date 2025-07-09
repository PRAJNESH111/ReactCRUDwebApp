// import { useEffect, useRef, useState } from "react";

import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const Form = ({
  setExpenses,
  expense,
  setExpense,
  editingRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});
  const validationConfig = {
    title: [
      { required: true, message: "Title is required" },
      { minlength: 2, message: "Title should be atleast 5 characters" },
    ],
    category: [{ required: true, message: "Category is required" }],
    amount: [
      {
        required: true,
        message: "Amount is required",
      },
      {
        pattern: /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/,
        message: "Enter the valid amount",
      },
    ],
  };
  const validate = (formData) => {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minlength && value.length < rule.minlength) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message;
          return true;
        }
        return false;
      });
    });
    setErrors(errorData);
    return errorData;
  };
  // console.log(expense);
  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();
  console.log("rendering");
  const handlesubmit = (e) => {
    e.preventDefault();
    // if (!expense.title || !expense.category || !expense.amount)
    //   console.log("Enter the Value");
    const validateREsult = validate(expense);
    if (Object.keys(validateREsult).length) return;
    if (editingRowId) {
      setExpenses((prevstate) =>
        prevstate.map((singleExpense) => {
          if (singleExpense.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return singleExpense;
        })
      );
      setEditingRowId("");
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }
    setExpenses((prevstate) => [
      ...prevstate,
      {
        // title: titleRef.current.value,
        // category: categoryRef.current.value,
        // amount: amountRef.current.value,
        // id: crypto.randomUUID(),
        ...expense,
        id: crypto.randomUUID(),
      },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  // useEffect(() => {
  //   console.log(titleRef, categoryRef, amountRef);
  // }, []);
  const handleChnage = (e) => {
    const {
      name,
      // value
    } = e.target;
    // console.log(name, value);
    setExpense((prevstate) => ({
      ...prevstate,
      [name]: e.target.value,
    }));
    setErrors({});
  };
  return (
    <>
      <form className="expense-form" onSubmit={handlesubmit}>
        {/* <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={expense.title}
            onChange={handleChnage}
            // ref={titleRef}
            // required
          />
          <p className="error">{errors.title}</p>
        </div> */}
        <Input
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChnage}
          error={errors.title}
        />
        <Select
          label="Category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChnage}
          error={errors.category}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select Category"
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChnage}
          error={errors.amount}
        />
        <button className="add-btn">{editingRowId ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Form;
