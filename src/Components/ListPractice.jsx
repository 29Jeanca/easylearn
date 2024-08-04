/* eslint-disable react/prop-types */
import CardPractice from "./CardPractice";

const ListPractice = ({ list }) => {
  return (
    <div className="row g-2">
      {list.map((practice) => {
        return (
          <CardPractice
            title={practice.title}
            description={practice.description}
            key={practice.id}
          />
        );
      })}
    </div>
  );
};
export default ListPractice;
