import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/14687500/pexels-photo-14687500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://wallpapercave.com/wp/wp4646389.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://w0.peakpx.com/wallpaper/159/511/HD-wallpaper-amber-fort-jaipur-bing-amer-fort.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
