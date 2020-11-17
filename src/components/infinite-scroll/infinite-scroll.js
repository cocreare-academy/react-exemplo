import React from 'react'

import '../carrosel/carrosel.css'

class InfiniteScroll extends React.Component {
    
    
    constructor(props) {
        super(props)

        this.state = {
            page: 1
        }
        this.carregarImagens = this.carregarImagens.bind(this)
        this.handleLoadPage = this.handleLoadPage.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    carregarImagens(e) {
        let inc = parseInt(e.target.dataset.inc)

        
        if (this.state.page == 1 && inc < 0) {
            inc = 0
        }
        
        if (!this.props.data.images[((this.state.page+1)*5)-5] && inc > 0) {
            inc = 0
        }
        
        inc = this.state.page + inc
        
        this.setState((state) => {
            return {page: inc}
        })
    }

    handleLoadPage(e) {
        let inc = parseInt(e.target.dataset.page)
        console.log(inc)
    
        this.setState((state) => {
            return {page: inc}
        })
    }

    handleScroll(e) {

        if (!this.props.data.images[((this.state.page+1)*5)-5]) {
            return
        }

        if ((e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight) {
            let inc = this.state.page + 1
    
            this.setState((state) => {
                return {page: inc}
            })
        }
    }

    render() {
        return <>
            <div className="carrosel-row" style={{height:'70vh', overflow:'auto'}} onScroll={this.handleScroll}>
                <div className="carrosel-line" style={{flexDirection: 'row'}} style={{flexDirection:'column'}}>
                    {
                        this.props.data.images.slice(0, (this.state.page*5)).map((url, i) => {
                            return <div key={'image_bean_'+i} className="imagem expl" style={{backgroundImage: 'url('+url.node.display_url+')'}}></div>
                        })

                    }
                </div>
            </div>
            {/* <button id="avancarBtn" data-inc="1" onClick={this.carregarImagens}> {'>'} </button> */}
        </>
    }
}

export default InfiniteScroll