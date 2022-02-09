import react, { useState } from "react";
import Form from "./form";
import Table from "./table";

const Main = (props) => {
  const [singleuserdata, setSingleuserdata] = useState({});
  const [userdata, setUserdata] = useState([]);
  const [update, setupdate] = useState(false);
  const [clickItemData, setClickItemData] = useState({});

  const [search, setsearch] = useState("");
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

    // console.log(singleuserdata, "single");
    // console.log(userdata, "ata");

    // setformData(FormData + 1);
    // console.log(FormData, "FormData");
    setSingleuserdata({});
    setupdate(false);
    const autoId = userdata?.length;
    const obj = {
      userId: autoId + 1,
      ...singleuserdata,
    };
    userdata.push(obj);
    setUserdata(userdata);
    console.log(userdata, "obj");
    e.target.reset();
  };

  const onInputChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    const data = { ...singleuserdata, [name]: value };
    setSingleuserdata(data);
    setsearch(e.target.value);
  };

  const handleSearch = (e) => {
    setsearch(e.target.value);
    setsearch(search);

    const searchdata = {
      userdata: userdata.filter((item) => {
        item?.name.includes(search);
      }),
    };
    console.log(searchdata, "searchitem");
  };

  const add = (item) => {
    setSingleuserdata(item);
    setupdate(true);
    setClickItemData(item);
    console.log("item", item);
  };

  const remove = (item, index) => {
    console.log("userdata", userdata, index, item);
    const deletedata = userdata.splice(index, 1);
    // console.log("removedata", removedata);
    setSingleuserdata(item);
    setUserdata(userdata);

    // console.log("userdata", userdata);
  };

  const onUpdate = (e) => {
    e.preventDefault();

    console.log("hello", clickItemData, singleuserdata);
    const useritem = [];
    userdata.map((item, i) => {
      console.log("userData.update", item, i);
      const object = {
        ...item,
        name:
          item?.userId === clickItemData?.userId
            ? singleuserdata?.name
            : item?.name,
        std:
          item?.userId === clickItemData?.userId
            ? singleuserdata?.std
            : item?.std,
        age:
          item?.userId === clickItemData?.userId
            ? singleuserdata?.age
            : item?.age,
        grade:
          item?.userId === clickItemData?.userId
            ? singleuserdata?.grade
            : item?.grade,
      };
      return (useritem[i] = object);
    });
    setUserdata(useritem);

    console.log("updatedData", useritem);
  };

  return (
    <div>
      <Form
        submitData={handleFormSubmit}
        singleuserinfo={singleuserdata}
        handleInputChange={onInputChange}
        updateData={update}
        updateitem={onUpdate}
      />
      <Table
        usertabval={userdata}
        editItem={add}
        deleteItem={remove}
        handlesearch={handleSearch}
      />
    </div>
  );
};
export default Main;
