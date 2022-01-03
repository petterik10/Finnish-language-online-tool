function SingleColumn({ elem }) {
  const taskTables = [
    { columnValue: 14, positionTop: 100, positionLeft: 200 },
    { columnValue: 21, positionTop: 100, positionLeft: -200 },
    { columnValue: 50, positionTop: -100, positionLeft: 200 },
    { columnValue: 57, positionTop: -100, positionLeft: -200 },
  ];

  function drawTables(arr) {
    let finalValue;
    arr.forEach((value) => {
      if (value.columnValue === elem) {
        finalValue = value.columnValue;
      }
    });
    return finalValue;
  }


  if (drawTables(taskTables) === elem) {
    return (
      <div className={`container__table--${drawTables(taskTables)}`}>
        <div className="container__tableWrapper">
          <div className="container__tableWrapperInner"></div>
        </div>
      </div>
    );
  } else {
    return <div> </div>;
  }
}

export default SingleColumn;
