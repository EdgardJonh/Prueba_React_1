import  { useState } from "react";
import MyCards from "./MyCards";
const Grilla = ({ persona }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = persona.filter((item) =>
    item.personaje.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input 
      style={{width: '20rem'}}
      className="form-control m-4"
        type="text"
        placeholder="Buscar personajes"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredData &&
          filteredData.map((estasPersonas) => (
            <MyCards
              lasPersonas={estasPersonas}
              key={estasPersonas.id}
            ></MyCards>
          ))}
      </div>
    </div>
  );
};
export default Grilla;
