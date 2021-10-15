import { FC, useEffect, useState } from "react";
import firebaseApp from "../../FirebaseConf";
import { getDatabase, ref, onValue} from "firebase/database";
import NavMenu from "../components/NavMenu/NavMenu";
import GifsContent from "../components/GifsContent/GifsContent";
import styled from "@emotion/styled";

const Gifs = styled.div`
  padding: 40px;
  margin: 0 0 0 210px;
`;

const Saved: FC = () => {
  const [data, setData] = useState([]);
  const dbRef = getDatabase(firebaseApp)
  useEffect(() => {

    const starCountRef = ref(dbRef, "saved/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      console.log(data);
      
      // updateStarCount(postElement, data);
    });
  }, []);
  console.log(data);

  return (
    <>
      <NavMenu />
      <Gifs>
        <GifsContent data={data} />
      </Gifs>
    </>
  );
};

export default Saved;
