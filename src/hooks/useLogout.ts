import { useDispatch } from "react-redux";
import { clearUsersInfo } from "../store/user";
import firebase from "firebase";

const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearUsersInfo({}));
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    }
  };
  return logout;
};

export default useLogout;
