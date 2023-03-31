import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/CommunityCard.scss"
const CommunityCard = ({ prop }) => {
    return (
        <div className='community-card'>
            <div class="card">
                <img class="card-img-top" src="" alt="" style={{backgroundImage:`url${""}`}}/>
                <div class="card-body">
                    <h5 class={`card-title ${prop.ur? "heading-ur" : "heading-en"}`}>{prop.headingText}</h5>
                    <p class={`card-text ${prop.ur? "text-ur" : "text-en"}`}>{prop.mainText}</p>
                    <Link to={`/artical/${prop.id}`} className="btn btn-primary">READ FULL</Link>
                </div>
            </div>
        </div>
    )
}

export default CommunityCard