import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2019/01/villa.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Oberoi Rajvilas Jaipur</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from ₹38,750</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/1012/476/desktop-wallpaper-taj-palace-hotel-jpg-png-gif-raw-tiff-psd-pdf-and-watch-online-taj-hotels.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Taj Mahal Palace</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹22,000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/b5/5f/31/facade.jpg?w=700&h=-1&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The LaLiT</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpPrice">Starting from ₹8,615</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/overview-desktop/itc-grand-goa.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ITC Grand Goa</span>
        <span className="fpCity">Goa</span>
        <span className="fpPrice">Starting from ₹26,550</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
