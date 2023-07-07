export default function Photo(props) {
  return (
    <div className="img-container">
      <img className="image" src={props.img} />
      <time className="date">{props.date}</time>
    </div>
  );
}
