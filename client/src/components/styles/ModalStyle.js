// const screen = window.matchMedia("(max-width: 991px)");
// console.log("--screen--", screen.matches);
const ModalStyle = (screen) => {
  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 53, 44, 0.75)",
    },
    content: {
      position: "absolute",
      top: "15vh",
      left: screen.matches ? "5vw" : "20vw",
      right: screen.matches ? "5vw" : "20vw",
      bottom: "15vh",
      border: ".5px solid #EEE3E3",
      background: "#00352C",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "",
    },
  };
  return style;
};
export default ModalStyle;
