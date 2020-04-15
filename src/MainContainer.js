import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Connect from './Connect'

class MainContainer extends React.Component {

    render() {
        return (
            <div>
                Main Container
                <About/>
                <Portfolio/>
                <Connect/>
            </div>
        )
    }
}

export default MainContainer