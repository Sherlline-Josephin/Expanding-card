import react from 'react';
import './Card.css';
const Card=(props)=>{

    const{id,url,active,title,poster_url,description}=props.data;
    return (
        <div className={`card ${active && 'active'}`} 
            style={{backgroundImage:`url(${url})`}}
            onClick={()=>props.onCardClick(id)}>
            <div className={`link ${active && 'active'}`}>
                <div className='image'>
                    <img className='img' src={poster_url} alt='posterimage'/>                    
                </div>
                <div className='desc'>
                    <p className='des'>
                        {description}
                    </p>
                </div>
            </div>  
                    
            <h2>{title}</h2>
        </div>
    )
}

export default Card;






