import React from 'react';
import Navbar from './Components/navbar.js';
import Footer from './Components/footer.js';
class App extends React.Component{  
    render()
    {
        return <div>
            <Navbar/>
            <h1>This is the React Tutorial Page</h1>
            <p>Welcome to Class!</p>
            <Footer/>
            </div>
    }
}
export default App;
