import { useSelector } from "react-redux"


export const getUser = () => {
  
}

export const IsLogin = () => {
  let success = useSelector((state: any) => state.login.success);
  if(!success) {
    const check = localStorage.getItem('user');
    if (check !== null) success = true;
  }
return success;
}