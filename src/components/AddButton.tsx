import React from "react";
import { IonButton } from "@ionic/react";

interface ContainerProps {}

const AddButton: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonButton
        onClick={() => {
          console.log("click click");
        }}
      >
        Add
      </IonButton>
    </>
  );
};

export default AddButton;
