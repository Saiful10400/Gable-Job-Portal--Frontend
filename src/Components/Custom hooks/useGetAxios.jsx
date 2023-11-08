import axios from "axios";
import { useEffect, useState } from "react";

const useGetAxios = () => {
  const[user,setUser]=useState([])
  useEffect(() => {
    axios
      .get("https://assignment-10-mu.vercel.app/brand/apple")
      .then((res) => setUser(res));
  }, []);
  return(user)
};

export default useGetAxios;
