export default function Photo(props) {
  return (
    <div className="img-container">
      <div className="border1"></div>
      <img className="image" src={props.img} />
      <time className="date">{props.date}</time>
      <div className="border2"></div>
    </div>
  );
}
