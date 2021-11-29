import Character from "./Character";
function Column({ elem, currentColumn }) {
  return (
    <div>
      {elem === currentColumn ? <Character /> : <div> </div>}
    </div>
  );
}

export default Column;
