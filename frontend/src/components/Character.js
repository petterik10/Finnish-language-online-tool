function Character() {
  return (
    <div className="canvas">
      <div className="head">
        <div className="hair"></div>
        <div className="head-copy"></div>
        <div className="hair"></div>
        <div className="eyes">
          <div className="left">
            <div className="inner-eye"></div>
          </div>
          <div className="right">
            <div className="inner-eye"></div>
          </div>
        </div>
        <div className="mouth"></div>
        <div className="neck">
          <div className="bolts">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
