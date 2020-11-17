import React from 'react'

import '../carrosel/carrosel.css'

class CorroselClass extends React.Component {
    
    
    constructor(props) {
        super(props)

        this.state = {
            page: 1
        }
        this.carregarImagens = this.carregarImagens.bind(this)
        this.handleLoadPage = this.handleLoadPage.bind(this)
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

    render() {
        return <>
            <div className="carrosel-row">
                <div className="carrosel-line" style={{flexDirection: 'row'}}>
                    {
                        this.props.data.images.slice((this.state.page*5)-5, (this.state.page*5)).map((url, i) => {
                            return <div key={'image_bean_'+i} className="imagem expl" style={{backgroundImage: 'url('+url.node.display_url+')'}}></div>
                        })

                    }
                </div>
            </div>
            <button id="voltarBtn" data-inc="-1" onClick={this.carregarImagens}> {'<'} </button>
            {
                [1,2,3].map((valor) => {
                    return <button key={'page_button_'+valor} onClick={this.handleLoadPage} data-page={valor}>
                            {valor}
                        </button>
                })
            }
            <button id="avancarBtn" data-inc="1" onClick={this.carregarImagens}> {'>'} </button>
        </>
    }
}

export default CorroselClass