import React from 'react'

class Taro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            deck:[]
        }

        this.shuffleAll = this.shuffleAll.bind(this)
    }

    shuffleAll(e) {
        console.log(this.state.deck)    
        let deck = this.state.deck
        
        var currentIndex = deck.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }

        this.setState({deck})

    }

    componentDidMount() {
        this.setState((state, props) => {
            return {deck: props.taro.cards}
        })
        console.log(this.state)
    }

    render() {
        return <>
            <button onClick={this.shuffleAll}>SHUFFLE BABY !</button>
            { this.state.deck && this.state.deck.map((card, i) => {
                return <div key={'card_'+i}>
                    <img src={this.props.taro.imagesUrl+card.image} /> 
                    <div>{card.name}</div>
                </div>
            })}
        </>
    }
}

export default Taro