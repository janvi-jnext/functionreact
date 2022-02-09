import { react, useState } from "react";

function Table(props) {
  const { usertabval } = props;
  const { handlesearch } = props;
  return (
    <div>
      <label htmlFor="search">
        Search:
        <input
          id="search"
          type="text"
          onChange={(e) => props.handlesearch(e)}
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>std</th>
            <th>age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {usertabval?.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item?.name}</td>
                <td>{item?.std}</td>
                <td>{item?.age}</td>
                <td>{item?.grade}</td>

                <button
                  name="btnname"
                  onClick={(e) => props.deleteItem(item, index)}
                >
                  x
                </button>
                <button name="btnname" onClick={(e) => props.editItem(item)}>
                  edit
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
