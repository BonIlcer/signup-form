function blurOnEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log("blur onEnter event");
    e.target.blur();
  }
}
export default blurOnEnter;
