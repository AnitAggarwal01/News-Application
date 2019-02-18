import React from 'react';
import TeamCard from '../../Elements/teamcard';
import PostData from '../../Elements/postdata';
const Header = (props)=>{
    
    const renderTeamCard = (teamData)=>{
        
        return teamData.id ? ( <TeamCard data={teamData}/> ) : null ;
     }
    const renderPostData = (date,author)=>{
        return date && author ? ( <PostData data={{date,author}}/> ) : null ;
    }
    return(
        <div>
            {renderTeamCard(props.teamData)}
            {renderPostData(props.date,props.author)}
        </div>
    )
}
export default Header ;