import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/Shimla.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Shimla</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/01/Pictures/aerial-view-photo-gurugram-using-ht-drone_29ee0454-657c-11e8-b4a9-2154dcd09999.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gurugram</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.holidify.com/images/cmsuploads/compressed/2999_20190305160539.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Leh Ladakh</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;