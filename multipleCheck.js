import React, { useState } from "react";

const Form = () => {
  const [datas, setDatas] = useState([
    { name: "form1" },
    { name: "form2" },
    { name: "form3" },
    { name: "form4" },
  ]);
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelected((oldData) => [...oldData, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <>
      <div>
        <label>form list</label>
        {datas.map((item, index) => {
          return (
            <>
              <div>
                <input
                  id={index}
                  type="checkbox"
                  value={item.name}
                  onChange={handleChange}
                ></input>
                <span>{item.name}</span>
              </div>
            </>
          );
        })}
        {selected.map((select) => {
          return (
            <>
              <div>{select}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Form;
