import React from 'react';
import { Link } from 'react-router-dom';
import Users from './containers/users';
import Item from './containers/item';

class App extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/">Users</Link> |
                    <Link to= '/pizza'>Pizza</Link>
				</div>
                <div>
                    <Route path ='/' exact component={Users}/>
                    <Route path ='/pizza'  component={Item}/>
                    
                </div>
			</div>
		);
	}
}

export default Users;
