import React, { FC, useState } from "react";
import "./App.css";
import AddBroomForm from "./components/AddBroomForm";
import DisplayBrooms from "./components/DisplayBrooms";
import Broom from "./models/Broom";

const App: FC = () => {
  const [BroomsList, setBroomsList] = useState<Broom[]>([]);

  //добавление предмета
  const addBroom = (newBroom: Broom) => {
    setBroomsList([...BroomsList, newBroom]);
  };

  //изменение предмета
  const updateBroom = (newBroom: Broom) => {
    setBroomsList(
      BroomsList.map((Broom) => (Broom.id === newBroom.id ? newBroom : Broom))
    );
  };

  //удаление предмета
  const deleteBroom = (id: number) => {
    const newBroomsList = BroomsList.filter((Broom) => Broom.id !== id);
    setBroomsList(newBroomsList);
  };

  console.log("BroomList", BroomsList);

  return (
    <div className='App'>
      <div className='wrap'>
        <span className='heading'>Добавьте метлу!</span>
        <AddBroomForm addBroom={addBroom} />
        <DisplayBrooms
          BroomsList={BroomsList}
          updateBroom={updateBroom}
          deleteBroom={deleteBroom}
        />
        <img src='/broomsticks.jpg' alt='Пример изображения'></img>
      </div>
    </div>
  );
};

export default App;
