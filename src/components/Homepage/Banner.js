function Banner({ item, index, moveInIndex, mainIndex }) {
  let nameOfClass = "";
  if (index === moveInIndex && moveInIndex !== mainIndex)
    nameOfClass = "overlay move-in";
  else if (index !== mainIndex) nameOfClass = "overlay";

  return (
    <center>
      <img
        className={nameOfClass}
        src={item.banner}
        alt="banner"
        width="1200px"
        height="450px"
      />
    </center>
  );
}

export default Banner;
