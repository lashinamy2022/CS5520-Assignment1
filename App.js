import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import Finish from "./screens/Finish";

const App = () => {
  const [status, setStatus] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  function changeStatus(changedStatus) {
    setStatus(changedStatus);
  }

  function setEmailFun(email) {
    setEmail(email);
  }

  function setPhoneFun(phone) {
    setPhone(phone);
  }

  function setVisibilityFun(v) {
    setConfirmVisibility(v);
  }

  if (status == 1) {
    return (
      <>
        <Starting
          changeStatus={changeStatus}
          setEmailFun={setEmailFun}
          setPhoneFun={setPhoneFun}
          emailValue={email}
          phoneValue={phone}
          setVisibilityFun={setVisibilityFun}
        />
        <Confirm
          changeStatus={changeStatus}
          emailValue={email}
          phoneValue={phone}
          visibility={confirmVisibility}
          setVisibilityFun={setVisibilityFun}
        />
      </>
    );
  } else if (status == 2) {
    return (
      <Finish
        type="thank"
        changeStatus={changeStatus}
        phoneValue={phone}
        setEmailFun={setEmailFun}
        setPhoneFun={setPhoneFun}
        setVisibilityFun={setVisibilityFun}
      />
    );
  } else if (status == 3) {
    return (
      <Finish
        type="sorry"
        changeStatus={changeStatus}
        setEmailFun={setEmailFun}
        setPhoneFun={setPhoneFun}
        setVisibilityFun={setVisibilityFun}
      />
    );
  }
};

export default App;
