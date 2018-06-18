import React from 'react';
import ItemImage from '../components/itemimage/itemimage';

class Item extends React.Component {
	render() {
		return (
			<div>
				<h1>Pizza</h1>
				<ItemImage />
			</div>
		);
	}
}

export default Item;
