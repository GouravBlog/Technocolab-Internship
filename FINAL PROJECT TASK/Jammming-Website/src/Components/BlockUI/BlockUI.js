import "./BlockUI.css";
const BlockUI = ({ blocking }) => {
  if (!blocking) {
    return "";
  } else {
    return (
      <div className="overlay">
        <div className="overlay_inner">
          <div className="overlay_content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuD877IMJl0nDpycS30Xw0Y74foc3FqHtPDwlZ6XD02wDJ4qvtbEDTZXa6_0eFpp2Jgg&usqp=CAU" className="loader" alt="loader" />
            <h3>Loading...</h3>
          </div>
        </div>
      </div>
    );
  }
};

BlockUI.defaultProps = {
  blocking: false,
};

export default BlockUI;
