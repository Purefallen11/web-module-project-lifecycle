import React from 'react'
import {Card, CardImg, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap'

const FollowersCard = props => {
	console.log(props.data,'this is from followers')
	return (
		<div>
			<Card>
				<CardImg src={props.data.avatar_url} alt="Card image cap" />
				<CardBody>
					<CardTitle tag="h5">{props.data.login}</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.bio}</CardSubtitle>
				</CardBody>
    		</Card></div>
)
}

export default FollowersCard