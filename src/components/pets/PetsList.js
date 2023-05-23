import {  Route, Routes, Navigate } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import "./PetsList.css";
import PetsOverview from "./PetOverview";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        <Routes>

          <Route path="/cats" element={<PetsOverview pets={cats} />}/>        
          <Route path="/dogs" element={<PetsOverview pets={dogs} />} />  
          <Route 
              path="*" 
              element={<Navigate to="/pets/cats"/>} 
          />
        </Routes>
      </section>
    </section>
  );
};

export default PetsList;
