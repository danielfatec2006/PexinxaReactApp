const caption = "/caption.png";

export const Header = () => {
  return (
    <div>
      <img src={caption} alt="Carrinho" className="mx-auto flex w-100 h-100 mb-2 mt-20" loading="lazy"/>
    </div>
  );
};

export default Header;
