import React from 'react'
import Carrosel from '../carrosel/carrosel'
import CarroselClass from '../carrosel-class/carrosel-class'
import Taro from '../taro/taro'
import InfiniteScroll from '../infinite-scroll/infinite-scroll'
import Penguin from '../../assets/img/penguin.png'
import Loco from '../../assets/img/loco.jpg'

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
        //     let tweets = []
        //     let images = []
        //     // console.log(data)
            
        //     for (let instagramUrl of data.graphql.user.edge_owner_to_timeline_media.edges) {
        //         tweets.push(instagramUrl)
        //     }
            
        //     images = tweets
        //     // .filter((tweet) => {
        //     //     console.log(tweet.node.edge_liked_by.count)
        //     //     if (tweet.node.edge_liked_by.count && tweet.node.edge_liked_by.count > 1000) {
        //     //         return true
        //     //     }

        //     //     return false
        //     // })
            
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
            {/* <div>Bem-vindo!</div> */}
            {/* <input onChange={this.changeText}></input> */}
            {/* <Carrosel data={this.state}/> */}
            {/* <CarroselClass data={this.state} /> */}
            {this.state.taro && this.state.taro.cards && this.state.taro.cards.length && <Taro taro={this.state.taro} />}
            {/* <InfiniteScroll data={this.state} /> */}

            {/* <img src={'/penguin.png'} /> */}
            {/* <img src={Penguin} /> */}
            {/* <img src={Loco} /> */}
        </>
    }
}


export {Home}