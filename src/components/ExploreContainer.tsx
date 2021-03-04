import React from "react";
import "./ExploreContainer.css";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{ backgroundColor: "rgb(60,179,113)", borderRadius: "12px" }}
          >
            <b style={{ color: "white" }}>PlantY</b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default ExploreContainer;
