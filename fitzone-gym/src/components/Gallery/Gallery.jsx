import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-heading">
        <h4>OUR GALLERY</h4>

        <h2>
          Explore Our <span>Fitness Space</span>
        </h2>

        <p>
          Take a look inside FitZone Gym and discover our modern equipment,
          professional environment, and energetic training sessions.
        </p>
      </div>

      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;