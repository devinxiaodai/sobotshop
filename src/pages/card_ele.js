
import EventHandler from './eventHandler';
import card_theme from './card_ele.css';
import React from 'react';

const products = [
  {id: 1, card_title: 'OPPO Find N2 5g 折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机', 
  card_url:'https://www.taobao.com/',
  card_desc:'折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机',card_note:'6999元',card_picture:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg'},
  {id: 2, card_title: '【新品上市】OPPO K11 索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机', 
  card_url:'https://www.taobao.com/',
  card_desc:'索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机',card_note:'7999元',card_picture:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg' },
  {id: 3, card_title: '【享6期免息】OPPO一加 Ace 2 OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后', 
  card_url:'https://www.taobao.com/',
  card_desc:'OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后',card_note:'1999元',card_picture:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/72f227cdecd1448fa9ddc0455f4af7e6.jpg' },
  {id: 4, card_title: '【享6期免息】OPPO一加 Ace 2 OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后', 
  card_url:'https://www.taobao.com/',
  card_desc:'OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后',card_note:'1999元',card_picture:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/72f227cdecd1448fa9ddc0455f4af7e6.jpg' },
];

const sendEvent=function(){  
  console.log(products[0]);  
            // console.log(this); 
            // this.refs.iframe.postMessage({},'*')
            window.parent.postMessage({
              cid: "",
              uid: "",
              msgType: 24, // 固定值
              miniPage:JSON.stringify(products[0])
            }, '*');  
}
const listItems=products.map(products=>
    <div className='card_wide' key={products.id}>
      <div className="card_ele"  >
        <a href={products.card_url} target="_blank" rel="noreferrer" className='card_elea'>
          <p className="card_title">{products.card_title}</p>
        </a>
        <div className='area'>
          <img src={products.card_picture} className="card_picture" alt=''></img>
          <div className='desc_area'>
            <p className="card_desc">{products.card_desc}</p>
            <p className="card_note">{products.card_note}</p>
            <span className='send' onClick={sendEvent}>发送</span>

          </div>
        </div>
      </div>
    </div>
);
function MyApp() {
 
    return (
      <div>
        <h4>推荐型号：</h4>
       {listItems}
      </div>
    );
  }
export default MyApp