const Card = ({ title, description, image }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
// use effect ma jab dependency array nahi dainga to har state change pa use effect run hoga.

// use effect ma agar dependency array dainga to sirf aik baar component mount hona pa run hoga.

// agar kisi state ka change pa use effect run krwana ha to us dependency array ma wo state likhdo.


















