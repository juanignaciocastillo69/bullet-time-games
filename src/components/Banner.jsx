import bannerImage from "../assets/pixelvault-banner.png.png";

function Banner() {
  return (
    <section className="banner">
      <img
        src={bannerImage}
        alt="PixelVault banner"
        className="banner-image"
      />
    </section>
  );
}

export default Banner;