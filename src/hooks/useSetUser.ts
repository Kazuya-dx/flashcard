import { useDispatch } from "react-redux";
import { setUsersInfo } from "../store/user";
import firebase from "firebase";
import "firebase/firestore";

const useSetUser = () => {
  const dispatch = useDispatch();
  const setUser = (uid: string | undefined) => {
    const db = firebase.firestore();
    db.collection("users")
      .where("uid", "==", uid)
      .get()
      .then((docs) => {
        if (docs) {
          docs.forEach((doc) => {
            dispatch(
              setUsersInfo({
                uid: doc.data().uid,
                name: doc.data().name,
                isGuest: false,
              })
            );
          });
        }
      })
      .catch((error) => alert(error));
  };
  return setUser;
};

export default useSetUser;
