

function Taro(props) {
    return <>
        { props.taro.cards.map((card) => {
            return <>
                <img src={props.taro.imagesUrl+card.image} /> 
                <div>{card.name}</div>
            </>
        })}
    </>
}

export default Taro