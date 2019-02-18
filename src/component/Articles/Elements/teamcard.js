import React from 'react';
import styles from '../articles.module.css'
const TeamCard = (props)=>{
    let stats = props.data.stats ;
    return(
        <div className={styles.teamCardWrapper}>
            <div    className={styles.left}
                    style={{backgroundImage:`url(/images/teams/${props.data.logo})`}}
                ></div>
            <div className={styles.right}>
                <div>{`${props.data.city} ${props.data.name}`}</div>
                <div>
                <b style={{fontWeight:'500'}}>W{ stats[0].wins }-L{ stats[0].defeats }</b></div>
            </div>
        </div>
    )
}

export default TeamCard ;