import React from 'react'
import Carrosel from '../carrosel/carrosel'
import Taro from '../taro/taro'


class Home extends React.Component {

    // se fosse function
    // const [taro, setTaro] = useState({cards:[]})

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            taro:{cards:[]},
            text:''
        }

        this.changeText = this.changeText.bind(this)
    }
    
    loadImages() {
        // fetch('http://instagram.com/mrbean.clip/?__a=1')
        // .then(response => response.json())
        // .then(data => {
        //     let images = []
        //     // console.log(data)
        //     for (let instagramUrl of data.graphql.user.edge_owner_to_timeline_media.edges) {
        //         images.push(instagramUrl.node.display_url)
        //     }

        //     this.setState({images:images})
        //     // carregarImagens(page)
            
        //     console.log(this.state.images)
        // })

        fetch('/resources/cards.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({taro:data})
            // se fosse function
            // setTaro(data)
        })
    }

    changeText(e) {
        console.log(e.target.value)
        this.setState({text:e.target.value})
    }

    // se fosse function é só escrever o fetch antes do return
    componentDidMount() {
        this.loadImages()
    }

    render() {
        return <>
            <div>Bem-vindo!</div>
            <input onChange={this.changeText}></input>
            {/* <Carrosel data={this.state}/> */}
            <Taro taro={this.state.taro} />
        </>
    }
}


export {Home}