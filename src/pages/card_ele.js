
import EventHandler from './eventHandler';
import card_theme from './card_ele.css';
import React from 'react';

const products = [
  {id: 1, card_title: 'OPPO Find N2 5g 折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机', 
  card_url:'https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=OPPO%20Find%20N2%205g&clk1=03927ae62edf325fbfe3559c37f8f874&upsId=03927ae62edf325fbfe3559c37f8f874&spm=a2e0b.20350158.search.1&pid=mm_26632258_3504122_32538762&union_lens=recoveryid%3A201_33.5.131.176_39395515_1690631501535%3Bprepvid%3A201_33.5.131.176_39395515_1690631501535',
  card_desc:'折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机',card_note:'6999元',card_picture:'https://img.alicdn.com/imgextra/i3/16468965/O1CN01QdtLL52G61YtmRrUu_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'},
  {id: 2, card_title: '【新品上市】OPPO K11 索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机', 
  card_url:'https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=OPPO%20Find%20N2%205g&clk1=03927ae62edf325fbfe3559c37f8f874&upsId=03927ae62edf325fbfe3559c37f8f874&spm=a2e0b.20350158.search.1&pid=mm_26632258_3504122_32538762&union_lens=recoveryid%3A201_33.5.131.176_39395515_1690631501535%3Bprepvid%3A201_33.5.131.176_39395515_1690631501535',
  card_desc:'索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机',card_note:'7999元',card_picture:'https://img.alicdn.com/imgextra/i3/16468965/O1CN01r2mu5X2G61ZgYiYp4_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
  {id: 3, card_title: '【享6期免息】OPPO一加 Ace 2 OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后', 
  card_url:'https://detail.tmall.com/item.htm?ali_trackid=2:mm_3083598566_2683050047_114912400358:1690629615_005_197483856&bxsign=tbkM0ea7lThGA2TP-FKYP_k51sMh3SWmHjNu_fps1W9oTwDbGvCO3xeSSxvoGmKncEuh1IB2ICeDxmOwW8vZA6f7BZBYsyfD2VlhT-goGE0h6AdRNKiJAS5i7YH9gI3_xMxY1Nkff_iJunBJCUsqbg9CA&id=697349632837&spm=a2e1u.27655827.d1661933647166.2&union_lens=lensId:OPT@1690629354@213e5960_0abe_189a15cb2d0_1c05@01@eyJmbG9vcklkIjo2MTc4NH0ie;recoveryid:201_33.51.85.218_665075_1690629319946;prepvid:201_33.51.73.70_663360_1690629353190',
  card_desc:'OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后',card_note:'1999元',card_picture:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/901409638/O1CN018KPOgu2L4G8tTHVuV_!!0-item_pic.jpg_360x360q90.jpg_.webp' },
  {id: 4, card_title: '【享6期免息】OPPO一加 Ace 2 OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后', 
  card_url:'https://detail.tmall.com/item.htm?ali_trackid=2:mm_3083598566_2683050047_114912400358:1690629615_005_197483856&bxsign=tbkM0ea7lThGA2TP-FKYP_k51sMh3SWmHjNu_fps1W9oTwDbGvCO3xeSSxvoGmKncEuh1IB2ICeDxmOwW8vZA6f7BZBYsyfD2VlhT-goGE0h6AdRNKiJAS5i7YH9gI3_xMxY1Nkff_iJunBJCUsqbg9CA&id=697349632837&spm=a2e1u.27655827.d1661933647166.2&union_lens=lensId:OPT@1690629354@213e5960_0abe_189a15cb2d0_1c05@01@eyJmbG9vcklkIjo2MTc4NH0ie;recoveryid:201_33.51.85.218_665075_1690629319946;prepvid:201_33.51.73.70_663360_1690629353190',
  card_desc:'OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后',card_note:'1999元',card_picture:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/901409638/O1CN018KPOgu2L4G8tTHVuV_!!0-item_pic.jpg_360x360q90.jpg_.webp' },
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