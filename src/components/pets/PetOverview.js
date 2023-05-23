
import Pet from "./Pet";

export const PetsOverview = ({ pets }) => {
  return (
    <section className="pets-wrapper">
        <div>            {pets.map((pet) => (
              <Pet key={pet.id} kind={pet.kind} pet={pet} />
            ))}</div>

    </section>
  );
};

export default PetsOverview;
