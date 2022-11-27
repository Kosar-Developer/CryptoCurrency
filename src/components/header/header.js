import img1 from "../../image/img1.jpg";

const Header = () => {
  return (
    <div style={{maxWidth: '1140px', margin: 'auto'}}>
      <img src={img1} alt="headerImg" style={{ height: "100%", width:"97%", margin:"2rem 1rem" }} />
    </div>
  );
};

export default Header;
