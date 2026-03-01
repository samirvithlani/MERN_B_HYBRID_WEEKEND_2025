import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustLoader } from "../CustLoader";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [singleUser, setsingleUser] = useState({});
  const [show, setshow] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  //GET API --> backend ->
  const getUser = async () => {
    //get --><promise<Axios
    //response -->datatype ->proimse
    setisLoading(true); //loader start
    const response = await axios.get("https://node5.onrender.com/user/user/");
    console.log(response); //promise object then catch [async await]
    //response -->axios object
    //api reponse ---> response.data
    console.log(response.data); // api response..
    console.log(response.data.message);
    //set
    setmessage(response.data.message);
    console.log(response.data.data);
    setusers(response.data.data);

    setisLoading(false); //loader false..
  };

  const deleteUser = async (id) => {
    //alert("delete called..."+id)
    //https://node5.onrender.com/user/user/id
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`,
    );
    console.log(res); //axios object
    console.log(res.data); ///sctual response..
    console.log(res.status); //204 -->
    if (res.status == 204) {
      //alert("user deletd..")
      toast.success("user deleted...");
      //database fetch -->get api call..
      getUser(); //---> get api call..
    } else {
      alert("error while deleteing user..");
    }
  };

  const detailUser = async (id) => {
    //alert(id)
    //.check id is not undefined...
    if (!id) return;
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
    console.log(res.data); //actual res..
    setsingleUser(res.data.data);

    //model open --> show -->true
    setshow(true);
  };

  const handleClose = () => {
    setshow(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>
      {/* {
        isLoading && <h1>Loading....</h1>
      } */}

      {isLoading && <CustLoader />}

      {/* <button onClick={()=>{getUser()}}>GET</button> */}
      {message}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    DELETE
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-primary"
                    onClick={() => {
                      detailUser(user._id);
                    }}
                  >
                    DETAIL
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* popup code */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Name = {singleUser.name}</h1>
          <h3>Age = {singleUser.age}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
