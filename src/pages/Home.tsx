import React from "react";
import { IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import AddButton from "../components/AddButton";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <ExploreContainer />
      <AddButton />
    </IonPage>
  );
};

export default Home;
