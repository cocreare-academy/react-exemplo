import React from 'react'
import logo from '../../logo.svg';
import './header.css'
import {Link} from "react-router-dom" 
class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {posts:[]}
    }

    componentDidMount() {
        console.log('Montou')
        // console.log(this.props)
        fetch('https://instagram.com/mrbean/?__a=1')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            if (!data.graphql || !data.graphql.user || !data.graphql.user.edge_owner_to_timeline_media) {
                alert('Feed vazio ou usuário inexistente')
            } else {
                this.setState({
                    posts: data.graphql.user.edge_owner_to_timeline_media.edges
                })
                console.log(this.state.posts)
            }
        })
    }

    handleClick(e) {
        console.log(e)
        console.log("Qualquer outra coisa")
    }
    render() {
        
        return (
        <>
            <div className="header">
                <img  src={logo} style={{"width": '100px', "position":"absolute", "left":"0px"}} alt="logo" />
                <div style={{"margin": '0px auto'}}>
                    Minha primeira aplicação em react, você tem nela {this.props.links.map((item) => { return item.desc }).join(', ')}
                </div>
            </div>
            { this.state.posts.slice(this.pageEnd-5, this.pageEnd).map((edge, indexEdge) => {
                return (
                    <div key={'edge-'+indexEdge}>
                        <img style={{width:"10px"}}className="imagesInstagram" src={edge.node.display_url} />
                    </div>
                )
            })
            }

                <button onClick={this.handleClick}>
                    Console
                </button>
        </>

        )
    }
}


function Menu(props) {
    console.log(props)

    return <>
        <ul>
            { 
              props.links.map((link, index) => {
                  return (
                    <li key={'menu_link_'+index}>
                        <Link to={link.url}>{link.desc}</Link> 
                    </li>
                  )
                
              })
            }
            
        </ul>
    </>
}
export { Header, Menu };