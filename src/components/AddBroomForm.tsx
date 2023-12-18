import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Broom from "../models/Broom";
import "./styles.css";

interface AddBroomFormProps {
  addBroom: (newBroom: Broom) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddBroomForm: FC<AddBroomFormProps> = ({ addBroom }) => {
  const [newBroom, setNewBroom] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBroom({
      ...newBroom,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newBroom;
    if (title && price && img) {
      addBroom({
        title,
        img,
        price: Number(price),
        id: Date.now(),
      });
      setNewBroom(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Название'
        onChange={handleChange}
        value={newBroom.title}
      />
      <input
        name='price'
        type='text'
        placeholder='Стоимость'
        onChange={handleChange}
        value={newBroom.price}
      />
      <input
        name='img'
        type='text'
        placeholder='Изображение'
        onChange={handleChange}
        value={newBroom.img}
      />
      <button type='submit'>Добавить</button>
    </form>
  );
};

export default AddBroomForm;
