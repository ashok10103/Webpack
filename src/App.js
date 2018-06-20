import React from 'react';
import { Link,Route } from 'react-router-dom';
import Users from './containers/users';
import Item from './containers/item';
import asyncComponent from './hoc/asyncComponent';


const asyncItem = asyncComponent(()=>{
    return import ('./containers/item.js')
})
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
                    <Route path ='/pizza'  component={asyncItem}/>
                    
                </div>
			</div>
		);
	}
}

export default App;
