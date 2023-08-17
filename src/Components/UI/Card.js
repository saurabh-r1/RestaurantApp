import './Card.css';
const Card=props=>{
    const classes='card '+ props.className;
    return(
        // <div className='card'>{props.children}</div>
        <div className={classes}>{props.children}</div>
    )
};

export default Card;