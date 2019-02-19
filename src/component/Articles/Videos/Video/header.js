import React from 'react';
import TeamCard from '../../Elements/teamcard';
const Header = (props)=>{
    
    const renderTeamCard = ()=>{
        if(props.teamData)
            return props.teamData.id ? <TeamCard data={props.teamData}/> : null ;
        else
            return <div></div>
    } 
    
    return(
        <div>
            {renderTeamCard()}
        </div>
    )
}

export default Header ;
