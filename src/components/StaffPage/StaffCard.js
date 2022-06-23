import './staff.css'

function StaffCard(props) {
    return (
    <div className="card">
        <h2>{props.content.name}</h2>
        <h3>{props.content.title}</h3>
        <p>{props.content.description}</p>
        <p>{props.content.social}</p>
    </div>
    );
}

export default StaffCard;
