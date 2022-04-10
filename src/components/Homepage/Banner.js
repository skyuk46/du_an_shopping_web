
function Banner({ item, index, moveInIndex, mainIndex }) {
  let nameOfClass = "";
  if (index === moveInIndex && moveInIndex !== mainIndex)
    nameOfClass = "overlay move-in";
  else if (index !== mainIndex)
    nameOfClass = "overlay";

  return (
    <center><img class={nameOfClass} src={item.banner} alt="banner" /></center>
  );
}

export default Banner;