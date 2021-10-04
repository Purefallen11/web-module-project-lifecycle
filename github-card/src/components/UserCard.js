import React from 'react'
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap';
import '../App.css'

const UserCard = props => {
	return (
		<div>
		<Card>
			<CardImg src={props.img} alt="Card image cap" />
			<CardBody>
				<CardTitle tag="h5">{props.name}</CardTitle>
				<CardSubtitle tag="h6" className="mb-2 text-muted">{props.bio}</CardSubtitle>
					<CardText>{props.location}</CardText>
			</CardBody>
    	</Card>
		</div>
	)
}

export default UserCard