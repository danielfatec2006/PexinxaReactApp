import Slider from "react-slick";
const cd1 = "/carousel-images/c1d.svg";
const cd2 = "/carousel-images/c2d.svg";
const cd3 = "/carousel-images/c3d.svg";
const cd4 = "/carousel-images/c4d.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: true,
  };
  
  const banners = [
    { src: cd1, alt: "Promoção 1" },
    { src: cd2, alt: "Promoção 2" },
    { src: cd3, alt: "Promoção 3" },
    { src: cd4, alt: "Promoção 4" },
  ];

  return (
    <Slider {...settings} className="rounded-2xl overflow-hidden">
    {banners.map((banner, index) => (
      <div key={index} className="w-full h-45 flex items-center justify-center">
        <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover" loading="lazy"/>
      </div>
    ))}
  </Slider>
  );
};

export default BannerCarousel;
