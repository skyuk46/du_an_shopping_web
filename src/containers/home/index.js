import { useEffect } from 'react'

function Home() {
  useEffect(
    function () {
      document.title = "Website thương mại điện tử!"
    }
    , []);

  return (
    <div>
    </div>
  );

}

export default Home;