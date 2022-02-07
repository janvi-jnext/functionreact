import react, { useState } from "react";
import Form from "./form";
import Table from "./table";

const Main = (props) => {
  const [singleuserdata, setSingleuserdata] = useState({});
  const [userdata, setUserdata] = useState([]);
  //const [formData, setformData] = useState(0);
  //   {
  //     // { name: "Tom", age: 19, Grade: "A+", Std: 10 },
  //     // { name: "King", age: 19, Grade: "B", Std: 9 },
  //     // { name: "jhon", age: 25, Grade: "A", Std: 11 },
  //     Name: "",
  //     age: "",
  //     Grade: "",
  //     Std: "",
  //   },
  // ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userdata.push(singleuserdata);
    console.log(singleuserdata, "single");
    console.log(userdata, "bvsd");

    setUserdata(userdata);
    // setformData(FormData + 1);
    // console.log(FormData, "FormData");
    setSingleuserdata({ singleuserdata });

    e.target.reset();
  };

  const onInputChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    const data = { ...singleuserdata, [name]: value };
    setSingleuserdata(data);
  };
  const showclickdata = (item) => {
    setSingleuserdata(item);
    // console.log("edit", item);
  };

  const removeItem = (item, index) => {
    console.log("userdata", userdata, index, item);
    const removedata = userdata.splice(index, 1);
    console.log("removedata", removedata);
    setSingleuserdata(item);
  };
  return (
    <div>
      <Form
        submitData={handleFormSubmit}
        singleuserinfo={singleuserdata}
        handleInputChange={onInputChange}
      />
      <Table usertabval={userdata} edit={showclickdata} delete={removeItem} />
    </div>
  );
};
export default Main;
