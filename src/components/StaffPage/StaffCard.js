import './staff.css'

function StaffCard(props) {
    return (
    <div className="card">
        <div><img src={props.content.image}></img></div>
        <h2>{props.content.name}</h2>
        <h3>{props.content.title}</h3>
        <p>{props.content.description}</p>
        <i>{props.content.social}</i>
    </div>
    );
}

export default StaffCard;
