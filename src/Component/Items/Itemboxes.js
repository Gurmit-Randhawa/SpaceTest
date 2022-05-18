import "./Itemboxes.css";


const Itemboxes = ({name,price,image1}) => {
  return (
    <>
        <div className="itemcard">
          <img src={image1} alt="" />
          <p>{name}</p>
          <span>{price}</span>
        </div>
    </>
  );
};

export { Itemboxes };
