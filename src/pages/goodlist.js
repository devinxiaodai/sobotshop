import React,{Component} from "react";
import card_theme from '../css/card_ele.css';
import ReactDOM from 'react-dom/client';
class Cardlist extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            products : [
                {id: 1, title: 'OPPO Find N2 5g 折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机', 
                url:'https://www.taobao.com/',
                description:'折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机',label:'6999元',thumbnail:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg'},
                {id: 2, title: '【新品上市】OPPO K11 索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机', 
                url:'https://www.taobao.com/',
                description:'索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机',label:'7999元',thumbnail:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg' },
                {id: 3, title: '【享6期免息】OPPO一加 Ace 2 OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后', 
                url:'https://www.taobao.com/',
                description:'OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后',label:'1999元',thumbnail:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/72f227cdecd1448fa9ddc0455f4af7e6.jpg' }
                ]
        }
        this.sendHandler=this.sendHandler.bind(this);
    }
    componentDidMount(){

    }
    sendHandler(){  
        console.log(this.state.products[0]);  
        // console.log(this); 
        // this.refs.iframe.postMessage({},'*')
        window.parent.postMessage({
        cid: "",
        uid: "",
        msgType: 24, // 固定值
        miniPage:JSON.stringify(this.state.products[0])
        }, '*');  
      }
    render(){ 
        return(
            <div>
                <h4>推荐商品：</h4>
                {this.state.products.map(product=>
                    <div className='card_wide' key={product.id}>
                    <div className="card_ele"  >
                        <a href={product.url} target="_blank" rel="noreferrer" className='card_elea'>
                        <p className="card_title">{product.title}</p>
                        </a>
                        <div className='area'>
                        <img src={product.thumbnail} className="card_picture" alt=''></img>
                        <div className='desc_area'>
                            <p className="card_desc">{product.description}</p>
                            <p className="card_note">{product.label}</p>
                            <span className='send' onClick={this.sendHandler}>发送</span>

                        </div>
                        </div>
                    </div>
                    </div>
                )}
            <p><span className='moreorder'><a href="https://www.taobao.com" target='_blank' rel="noreferrer">更多商品推荐...</a></span></p>
            </div>
            )
    } 
}
export default Cardlist
 