import React, { FC } from "react";
import Broom from "../models/Broom";
import SingleBroom from "./SingleBroom";

interface DisplayBroomsProps {
  BroomsList: Broom[];
  updateBroom: (newBroom: Broom) => void;
  deleteBroom: (id: number) => void;
}

const DisplayBrooms: FC<DisplayBroomsProps> = ({
  BroomsList,
  updateBroom,
  deleteBroom,
}) => {
  return (
    <div className='container'>
      {BroomsList.map((Broom) => {
        return (
          <SingleBroom
            key={Broom.id}
            updateBroom={updateBroom}
            Broom={Broom}
            deleteBroom={deleteBroom}
          />
        );
      })}
    </div>
  );
};
export default DisplayBrooms;
