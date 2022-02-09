import React from "react";
import { useAsync } from "react-async";
import axios from "axios";


const fetchPerson = async ({category}) => {
  const response = await axios(
    `https://random-data-api.com/api/${category}/random_${category}`
  );
  const arr = Object.entries(response.data);

  return arr;
};
const Person = (props) => {
  const { data } = useAsync({ promiseFn: fetchPerson,category:props.category});
  if (data) {
    return (
      <table className={`fs-7 table table-striped table-responsive ${props.table || ""}`}>
        <tbody>
          <tr>
            <th colspan={2} className={"text-center fs-4"}>This is my table generated from random data about {props.category}</th>
          </tr>
          <tr className={"text-center"}>
            <td><h2>Keys</h2></td>
            <td><h2>Values</h2></td>
          </tr>
          {data.map((subarray, index) => (
            <tr key={index} className={"text-center"}>
              <td>{subarray[0]}</td>
              <td>{subarray[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return null;
};

const Home = (props) => {
  return <Person category={props.category} table = {props.table}/>;
};

export default Home;

