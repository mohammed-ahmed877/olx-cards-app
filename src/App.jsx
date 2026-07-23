



import React from 'react'
import './App.css'
import Card from './component/Card.jsx'
import Btn from './component/Btn'


function App() {
  return (
    <>
     <h1 className="heading">🍎 Apple Store</h1>

      <div className="container">
        {/* Card 1 */}
      <div className="card-box">
          <Card
            title="iPhone 15 Pro Max JV"
            description="Quetta, Pakistan"
            image="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12"
          />

          <div style={{ padding: "0 20px" }}>
            <Btn
              title="Buy Now"
              color="#0071e3"
              func={() => console.log("Buy Now")}
            />
          </div>
        </div>

        {/* Card 2 */}
       <div className="card-box">
          <Card
            title="iPhone 17 Pro Max JV"
            description="Karachi, Pakistan"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpadU03AzuMfKzshnlYVUDuwJo9G_FJdwyCzBMjLGqoM7iBDO7El4xTbCt&s=10"
          />

          <div style={{ padding: "0 20px" }}>
            <Btn
              title="Buy Now"
              color="#0071e3"
              func={() => console.log("Buy Now")}
            />
          </div>
        </div>

        {/* Card 3 */}
    <div className="card-box">
          <Card
            title="iPhone 11 Pro Max JV"
            description="Lahore, Pakistan"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVb5sLD8JGxGuQL75yoS2nZ4ryuVnFPdYVROoCe4qIbs_ZtSN8qrBB4g3e&s=10"
          />

          <div style={{ padding: "0 20px" }} >
            <Btn
              title="Buy Now"
              color="#0071e3"
              func={() => console.log("Buy Now")}
            />
          </div>
        </div>

        {/* Card 4 */}
      <div className="card-box">
          <Card
            title="iPhone 13 Pro Max JV"
            description="Islamabad, Pakistan"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWFyWUv3meWKQjdKex7r_SYd6RK8Ey_Xtkjvp9WVUtGE1zwAuIsRFv6af&s=10"
          />

          <div style={{ padding: "0 20px" }}>
            <Btn
              title="Buy Now"
              color="#0071e3"
              func={() => console.log("Buy Now")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



















