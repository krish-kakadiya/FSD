import React from "react";

class Pract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStr: null,
      timeStr: null,
    };
  }

  setIntervalNow = () => {
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    const formattedTime = now.toLocaleTimeString();

    const textContent = (this.refs.dateRef && this.refs.dateRef.textContent === "") ? 
        formattedDate : TR;
    if (this.refs.timeRef) this.refs.timeRef.textContent = TR || formattedTime;
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", fontSize: "22px" }}>
        <h2>Practical</h2>
        <p>
          <span style={{ color: "navy" }}>OM NAMAH SHIVAYA</span>
        </p>
        <p ref={(el) => (this.dateRef = el)}>It is loading date...</p>
        <p ref={(el) => (this.timeRef = el)}>It is loading time...</p>
      </div>
    );
  }
}

export default Pract;
