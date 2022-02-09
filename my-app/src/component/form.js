import react, { useState } from "react";

const Form = (props) => {
  const { singleuserinfo } = props;
  const { updateData } = props;
  const { updateitem } = props;

  return (
    <div>
      <form
        className="Formname"
        onSubmit={(e) =>
          updateData ? props.updateitem(e) : props.submitData(e)
        }
      >
        {/* <Button
          variant="contained"
          onClick={() => (type === "add" ? saveInput() : saveChangeHandler())}
          // onClick={saveChangeHandler}
          className="dialog-submit"
        >
          {this.state.update ? "update" : "submit"}
        </Button> */}
        <div className="form-sec">
          <label htmlFor="name">Name*</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your Name"
            id="name"
            value={singleuserinfo.name}
            onChange={(e) => props.handleInputChange(e)}
            name="name"
            className="Name"
          />
          <br></br>
        </div>
        <br></br>
        <div class="form-sec">
          <label htmlFor="Std">Std *</label>
          <br></br>
          <input
            type="text"
            name="std"
            value={singleuserinfo.std}
            onChange={(e) => props.handleInputChange(e)}
            placeholder="Enter your Std"
            id="std"
            className="Name"
          />
          <br></br>
        </div>
        <br></br>
        <div class="form-sec">
          <label htmlFor="Age"> Age *</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your Age"
            value={singleuserinfo.age}
            onChange={(e) => props.handleInputChange(e)}
            id="age"
            name="age"
            className="Name"
          />
          <br></br>
        </div>
        <br></br>
        <div class="form-sec">
          <label htmlFor="Grade">Grade *</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your Grade"
            value={singleuserinfo.grade}
            onChange={(e) => props.handleInputChange(e)}
            name="grade"
            id="grade"
            className="Name"
          />
          <br></br>
        </div>
        <button type="Submit" className="sub-btn">
          {updateData ? "update" : "submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
