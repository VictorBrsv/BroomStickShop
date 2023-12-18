import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Broom from "../models/Broom";
import "./styles.css";

interface EditBroomFormProps {
  data: Broom;
  updateBroom: (newBroom: Broom) => void;
  handleEdit: () => void;
}

const EditBroomForm: FC<EditBroomFormProps> = ({
  data,
  updateBroom,
  handleEdit,
}) => {
  const [editBroom, setEditBroom] = useState<Broom>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditBroom({
      ...editBroom,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editBroom;
    if (title && price && img) {
      updateBroom(editBroom);
      handleEdit();
    }
  };

  return (
    <form className='edit-form' onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Название'
        onChange={handleChange}
        value={editBroom.title}
      />
      <input
        name='price'
        type='text'
        placeholder='Стоимость'
        onChange={handleChange}
        value={editBroom.price}
      />
      <input
        name='img'
        type='text'
        placeholder='Изображение'
        onChange={handleChange}
        value={editBroom.img}
      />
      <button type='submit'>Подтвердить</button>
    </form>
  );
};

export default EditBroomForm;
