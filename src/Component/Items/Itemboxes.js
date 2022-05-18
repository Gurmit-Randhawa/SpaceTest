import "./Itemboxes.css";

const img = "https://source.unsplash.com/random"




const Itemboxes = ({name,price}) => {
  return (
    <>
        <div className="itemcard">
          <img src={img} alt="" />
          <div className="infoBox">
          <p>{name}</p>
          <span>{price}</span>
          </div>
        </div>
    </>
  );
};

export { Itemboxes };
