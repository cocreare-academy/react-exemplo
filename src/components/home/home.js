import React from 'react'
import Carrosel from '../carrosel/carrosel'


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            text:''
        }

        this.changeText = this.changeText.bind(this)
    }
    
    loadImages() {
        fetch('http://instagram.com/mrbean.clip/?__a=1')
        .then(response => response.json())
        .then(data => {
            let images = []
            // console.log(data)
            for (let instagramUrl of data.graphql.user.edge_owner_to_timeline_media.edges) {
                images.push(instagramUrl.node.display_url)
            }

            this.setState({images:images})
            // carregarImagens(page)
            
            console.log(this.state.images)
        })
    }

    changeText(e) {
        console.log(e.target.value)
        this.setState({text:e.target.value})
    }

    componentDidMount() {
        this.loadImages()
    }

    render() {
        return <>
            <div>Bem-vindo!</div>
            <input onChange={this.changeText}></input>
            <Carrosel data={this.state}/>
        </>
    }
}


export {Home}