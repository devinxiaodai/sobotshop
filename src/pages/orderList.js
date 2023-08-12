
import orderList from '../css/orderList.css';
import React, { Component } from 'react';


 class orderListComponent extends Component{
    constructor(props){
        super(props);
        this.sendHandler=this.sendHandler.bind(this);
        this.createTicketHandler=this.createTicketHandler.bind(this);

        
        this.state = {
            loading: true,
            orderArrays:[{
                id:1,
                orderStatus:'待付款',//订单状态
                statusCustom: "自定义状态", //当orderStatus=0的时候，取该字段作为订单卡片的状态
                createTime:'2023-08-09 14:40:06',//下单时间  时间戳
                orderCode:'BZ1993050216362',//订单编号
                orderUrl:'https://www.taobao.com/',//订单链接
                totalFee:'3432.50',//订单金额（以分为单位，total_fee=1000相当与total_fee=10.00元，不支持小数）
                goodsCount:2,//商品数量
                goods:'索尼IMX890旗舰同款主摄 100W超...',
                picurl:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg'
            },{
                id:2,
                orderStatus:'已签收',//订单状态
                statusCustom: "自定义状态", //当orderStatus=0的时候，取该字段作为订单卡片的状态
                createTime:'2023-04-09 12:20:43',//下单时间  时间戳
                orderCode:'HX198909389201',//订单编号
                orderUrl:'https://www.taobao.com/',//订单链接
                totalFee:'2332.50',//订单金额（以分为单位，total_fee=1000相当与total_fee=10.00元，不支持小数）
                goodsCount:3,//商品数量
                goods:'OnePlus王牌兔新款游戏旗舰智能5...',
                picurl:'https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg'
            }],
            orderArrayTruth:{
                orderStatus:1,//订单状态
                statusCustom: "自定义状态", //当orderStatus=0的时候，取该字段作为订单卡片的状态
                createTime:+new Date(),//下单时间  时间戳
                orderCode:'BZ9208920350923',//订单编号
                orderUrl:'https://www.taobao.com/',//订单链接
                totalFee:'343250',//订单金额（以分为单位，total_fee=1000相当与total_fee=10.00元，不支持小数）
                goodsCount:2,//商品数量
                goods:[
                    {"name":"索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机","pictureUrl":"https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg"},
                    {"name":"OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后","pictureUrl":"https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg"}
                ]
            },
            orderArrayTruth2:{
                "order_status": 1,
                "create_time": +new Date(),
                "order_code": "BZ9208920350923",
                "order_url": "https://www.taobao.com/",
                "goods_count": 2,
                "total_fee": 343250,
                "goods": [
                  {"name":"索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机","pictureUrl":"https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg"},
                  {"name":"OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后","pictureUrl":"https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg"}
                  ]
              }
              
        }
    }
    componentDidMount(){

    }
    sendHandler(){
        console.log(this);

        window.parent.postMessage({
            cid: '',
            uid: '',
            msgType: 25,  //固定值
            miniPage:JSON.stringify(this.state.orderArrayTruth)
        }, '*');
    }
    createTicketHandler(){
        console.log(this.state.orderArrayTruth2);
        window.parent.postMessage({
            type: 'createOrder',  //固定值
            params:this.state.orderArrayTruth2
        }, '*');
    }
    render(){
        return(
            <div className='orderArea'>
            <h4>历史订单：</h4>
            {this.state.orderArrays.map(orderArray=>
                <div className='order_wide' key={orderArray.orderCode}>
                  <div className="card_ele"  >
                    <a href={orderArray.url} target="_blank" rel="noreferrer" className='card_elea'>
                      <p className="card_title"><span className='orderkey'>订单编号：</span><span className='ordernum'>{orderArray.orderCode}</span></p>
                      <p className="card_title mb5"><span className='orderkey'>{orderArray.goods}等{orderArray.goodsCount}件商品</span></p>

                    </a>
                    <div className='area'>
                      <img src={orderArray.picurl} className="card_picture" alt=''></img>
                      <div className='desc_area'>
                        <p><span className='orderkey'>{orderArray.goodsCount}件商品，合计：</span><span className='orderstatus'>{orderArray.totalFee}元</span></p>
                        <p><span className='orderkey'>订单状态：</span><span className='orderstatus'>{orderArray.orderStatus}</span></p>
                        <p><span className='orderkey'>下单时间：</span><span className='ordertime'>{orderArray.createTime}</span></p>
            
                      </div>
                    </div>
                  </div>
                  <span className='send' onClick={this.createTicketHandler}>创建工单</span>
                  <span className='send' onClick={this.sendHandler}>发送</span>

                </div>
            )
            }
            <p><span className='moreorder'><a href="https://www.taobao.com" target='_blank' rel="noreferrer">更多历史订单...</a></span></p>

            </div>
        )

    }
 }

export default orderListComponent