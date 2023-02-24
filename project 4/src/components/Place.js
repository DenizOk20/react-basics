import '../Styles/Place.css'

function Place(props){
    return(
        <div className="place">    
            <img className="place-image" alt="" src={`../images/${props.image}`}/>
            <div className='section-info'>
                <div className="place-header">                        
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>{props.location}</h4>
                    <a href={`${props.googleMapsUrl}`} >View On Google Maps</a>
                </div>
                <div className='place-infos'>
                    <h2>{props.title}</h2>
                    <h6>{props.startDate} - {props.endDate}</h6>
                    <p>{props.description}</p>        
                </div>
            </div>
        </div>
    )

}

export default Place;