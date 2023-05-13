import React ,{useState}from "react";
import Card from "./Card";
import './ExpandingCards.css';


const ExpandingCards=(props)=>{
   
    
   // console.log(data);

    const[data,setdata]=useState(props.data)

    const onCardClick=(id)=>{
        //console.log(id);
        //clone the data
        const newState=[...data];
        newState.map((item)=>item.id===id?item.active=true :item.active=false);
        setdata(newState);
    }

    if(!data || data.length<=0){
        return "No data to render!";
    }

    return(
        <section className="cards">
            {
                data.map((card)=> <Card key={card.id} data={card} onCardClick={onCardClick}/> )
            }
        </section>
    )
}

export default ExpandingCards;





