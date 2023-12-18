import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Broom from "../models/Broom";
import EditBroomForm from "./EditBroomForm";

interface SingleBroomProps {
  Broom: Broom;
  updateBroom: (newBroom: Broom) => void;
  deleteBroom: (id: number) => void;
}

const SingleBroom: FC<SingleBroomProps> = ({
  Broom,
  updateBroom,
  deleteBroom,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteBroom(Broom.id);
  };

  return (
    <div className='Broom'>
      <img src={`/images/${Broom.img}`} alt={Broom.title} />
      <h2>{Broom.title}</h2>
      <span>{Broom.price} rub </span>
      <div class-name='Broom-controlls'>
        <AiFillEdit onClick={handleEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>
      {edit ? (
        <EditBroomForm
          data={Broom}
          updateBroom={updateBroom}
          handleEdit={handleEdit}
        />
      ) : null}
    </div>
  );
};
export default SingleBroom;
