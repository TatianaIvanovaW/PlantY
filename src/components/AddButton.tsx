import React from "react";
import { IonButton } from "@ionic/react";

interface ContainerProps {}

const AddButton: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton>Add</IonButton>
    </div>
  );
};

export default AddButton;
