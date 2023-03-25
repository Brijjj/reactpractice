import React, { useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setitem] = useState([]);
  const [toggel, setToggel] = useState(true);
  const [edit, setEdit] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const add = () => {
    if (!input) {
      alert("plz add some words");
     } 
   // else if (input && !toggel) {
    //   setitem(
    //     item.map((el) => {
    //       if (el.id === edit) {
    //         return { ...el, name: input };
    //       }
    //       return el;
    //     })
    //   );
    //   setToggel(true);
    //   setInput("");
    //   setEdit(null);
    // } 
    else {
      const allInput = { id: new Date().getTime().toString(), name: input };
      setitem([...item, allInput]);
      setInput("");
    }
  };

  const deleteOne = (indexid) => {
    // First Method for Delete Todo
    let deleteItem = item.filter((el) => {
      return indexid !== el.id;
    });
    setitem(deleteItem);
     // Second Method for Delete Todo

    //   const deleteItem = [...item];
    //   deleteItem.splice(indexid,1)
    // console.log(indexid)
    //   setitem(deleteItem);
  };

  const editOne = (element, index) => {
    let name = element.name;
    setInput(name);
    setToggel(false);
    setEdit(element.id);
  };
  const UpdateItem = () => {
    // First Method for Update
    // console.log(editIndex);
    item[editIndex].name = input;
    setitem([...item]);
    setInput("");
    setToggel(true);
    // Second Method for Update

    // const updatedItem = item.map((ele) => {
    //   if (ele.id === edit) {
    //     return { ...ele, name: input };
    //   }
    //   return ele;
    // });
    // setitem(updatedItem);
    // setInput("");
    // setToggel(true);
  };
  const removeAll = () => {
    setitem([]);
  };

  return (
    <div className="todo-content">
      <input
        className="input-filed"
        placeholder="type hear"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      &nbsp;&nbsp;
      {toggel ? (
        <i className="bi bi-plus-lg" onClick={add}></i>
      ) : (
        <i className="bi bi-pencil-square" onClick={UpdateItem}></i>
      )}
      &nbsp;&nbsp; <button onClick={removeAll}>Remove all</button>
      {item.map((el, index) => {
        return (
          <div key={el.id}>
            <h3>{el.name}</h3>
            <i
              className="bi bi-trash"
              onClick={() => deleteOne(el.id, index)}
            ></i>
            <i
              className="bi bi-pencil-square"
              style={{ marginLeft: 30 }}
              onClick={() => {
                editOne(el, index);
                setEditIndex(index);
              }}
            ></i>
            <br></br>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
