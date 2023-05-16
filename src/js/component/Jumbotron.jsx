import React from "react";


const Jumbotron = (props) => {
    return <div className="p-5 bg-light rounded-2" style={{ backgroundColor: "#E9ECEF" }}>
    <div className="container">
      <h1 className="display-3">Hello, 4Geeks!</h1>
      <p>TLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit nec turpis vitae commodo. Nulla vitae gravida nibh. Proin eget placerat libero. Nullam diam diam, consectetur et pellentesque id, fringilla et ipsum. Vestibulum vitae pellentesque lectus. Morbi lectus quam, molestie non congue at, venenatis vel mauris. Vivamus dignissim, lectus at aliquam pulvinar, diam sapien dictum nibh, vitae elementum elit lorem eget mi.</p>
      <p><a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a></p>
    </div>
  </div>
}
export default Jumbotron