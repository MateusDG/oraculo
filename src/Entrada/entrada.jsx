import { Link } from "react-router-dom";

function Entrada() {
  return (
    <div className="mx-auto mt-10 bg-green-50 p-8 border border-gray-300 rounded-r-lg">
      <h1> Oráculo </h1>
      <form>
        <input placeholder="Nome" type="text" />
        <input placeholder="Data de nascimento" type="date" />
        <button>Resposta do Oráculo</button>
      </form>
      <Link to="/Sobre">Clique para saber mais</Link>
    </div>
  );
}
export default Entrada;
