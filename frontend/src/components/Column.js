import Character from "./Character";
import SingleColumn from "./SingleColumn";
function Column({ elem, currentColumn }) {
  return (
    <div className="container__inner">
      {elem === currentColumn ? <Character /> : <SingleColumn elem={elem} />}
    </div>
  );
}

export default Column;
