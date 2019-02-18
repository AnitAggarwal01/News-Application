import React from 'react';
import TeamCard from '../../Elements/teamcard';
const Header = (props)=>{
    
    const renderTeamCard = ()=>{
        return props.teamData.id ? <TeamCard data={props.teamData}/> : null ;
    } 
    
    return(
        <div>
            {renderTeamCard()}
        </div>
    )
}

export default Header ;
