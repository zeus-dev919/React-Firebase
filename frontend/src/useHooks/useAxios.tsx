import React from 'react';
import axios from "axios";


function useAxios(url:string) {
  const [data, setData] = React.useState<any>();
  axios
  .get(`${url}`)
  .then((response) => setData(response));
  return {data};
}

export default useAxios;