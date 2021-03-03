import React from "react";
import "./ExploreContainer.css";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ backgroundColor: "green" }}>
          <IonTitle>
            <b style={{ color: "white" }}>PlantY</b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default ExploreContainer;
