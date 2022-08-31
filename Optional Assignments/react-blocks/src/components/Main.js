import React, { Component } from 'react'
import Advertisement from './Advertisement'
import SubContents from './SubContents'

export class Main extends Component {
    render() {
        return (
            <div className="mainred">
                <div className="subcontentContainer">
                    < SubContents />
                    < SubContents />
                    < SubContents />
                </div>
                <div>
                    < Advertisement />
                </div>
            </div>
        )
    }
}

export default Main