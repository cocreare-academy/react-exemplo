
import React, { useState } from 'react'

import './carrosel.css'


function Carrosel(props){
        const [page, setPage] = useState(1)
        
        const carregarImagens = function (e) {
            let inc = parseInt(e.target.dataset.inc)
            console.log(inc)

            if (page == 1 && inc < 0) {
                inc = 0
            }
        
            if (!props.data.images[((page+1)*5)-5] && inc > 0) {
                inc = 0
            }
        
            setPage(page+inc)
        }
        
        let numPages = Math.ceil(props.data.images.length/5)

        let pagearray = [];

        for(var i = 1; i <= numPages; i++) {
            pagearray.push(i);
        }

        const handleLoadPage = function (e) {
            let inc = parseInt(e.target.dataset.page)
            console.log(inc)
        
            setPage(inc)
        }

        return <>
            <div className="carrosel-row">
                <div className="carrosel-line" style={{flexDirection: 'row'}}>
                    {
                        props.data.images.slice((page*5)-5, (page*5)).map((url, i) => {
                            return <div key={'image_bean_'+i} className="imagem expl" style={{backgroundImage: 'url('+url.node.display_url+')'}}></div>
                        })

                    }
                </div>
            </div>
            <button id="voltarBtn" data-inc="-1" onClick={carregarImagens}> {'<'} </button>
            {
                pagearray.map((valor) => {
                    return <button key={'page_button_'+valor} onClick={handleLoadPage} data-page={valor}>
                            {valor}
                        </button>
                })
            }
            <button id="avancarBtn" data-inc="1" onClick={carregarImagens}> {'>'} </button>
        </>

}

export default Carrosel