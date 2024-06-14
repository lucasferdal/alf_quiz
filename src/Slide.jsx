// src/components/Slide.jsx

const Slide = ({ image, text }) => (
    <div className="slide">
        <img src={image} alt="Slide" />
        <p>{text}</p>
    </div>
);

export default Slide;
