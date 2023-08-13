
import customcard from '../css/customcard.css';
import React, { Component } from 'react';


 class customCardComponent extends Component{
    constructor(props){
        super(props);
        this.sendHandler=this.sendHandler.bind(this);
        
        this.state = {
            loading: true,
            cardData:{
                "cardId": "123456",
                "cardStyle": 1,
                "cardType": 1,
                "cardGuide": "推荐商品",
                "cardDesc": "欢迎点击领取优惠劵",
                "cardImg": "https://img.sobot.com/chatres/137647808eba49b8ab81b4cf0b8e8c9d/msg/20230628/4eef15f80e3a8e25448365cef0d31b0f/aece05e116d24ac99ced073e5ed95eed.png",
                "customField": {
                    "活动时间": "2023-09-01～2023-09-08"
                },
                "cardLink": "https://www.sobot.com",
                "customCards": [{
                        "customCardId": "10611111",
                        "customCardName": "Apple 苹果 iPhone 14 Pro 256GB 暗紫色A2892手机",
                        "customCardThumbnail": "https://img.sobot.com/chatres/137647808eba49b8ab81b4cf0b8e8c9d/msg/20230629/bb8f52abcde9fb64eae76fe546600be6/3eaed97a216349048bea79e4c8db81e9.png",
                        "customCardAmount": "7699.00",
                        "customCardAmountSymbol": "¥",
                        "customCardLink": "https://www.taobao.com",
                        "customCardDesc": "强劲芯片|出色摄像|流畅显示|免费维修|5G支持|高存储容量|息屏显示",
                        "customMenus": [{
                            "menuType": 2,
                            "menuName": "发送商品给客服"
                        }, {
                            "menuType": 0,
                            "menuName": "查看详情",
                            "menuLink": "https://www.taobao.com",
                            "menuLinkType": 2
                        }, {
                            "menuType": 1,
                            "menuName": "确认商品",
                            "menuTip": "您已确认商品信息"
                        }]
                    },
                    {
                        "customCardId": "10711111",
                        "customCardName": "Apple 苹果 iPhone 14 Pro 256GB 深空黑色A2892手机",
                        "customCardThumbnail": "https://img.sobot.com/chatres/a6c9535d3bbf48e7b7c7d5ea3533fcf3/msg/20230629/fe18dd95872a4ecbabc6d13fba765c3a/f389fbd3229c48f58caad830dc38e9d9.jpeg",
                        "customCardAmount": "7699.00",
                        "customCardAmountSymbol": "¥",
                        "customCardLink": "https://www.taobao.com",
                        "customCardDesc": "强劲芯片|出色摄像|流畅显示|免费维修|5G支持|高存储容量|息屏显示",
                        "customMenus": [{
                            "menuType": 2,
                            "menuName": "发送商品给客服"
                        }, {
                            "menuType": 0,
                            "menuName": "查看详情",
                            "menuLink": "https://www.taobao.com",
                            "menuLinkType": 2
                        }, {
                            "menuType": 1,
                            "menuName": "确认商品",
                            "menuTip": "您已确认商品信息"
                        }]
                    }
                ],
                "cardMenus": [{
                    "menuType": 0,
                    "menuName": "查看详情",
                    "menuLink": "https://www.taobao.com",
                    "menuLinkType": 2
                }, {
                    "menuType": 1,
                    "menuName": "确认商品",
                    "menuTip": "您已确认商品信息"
                }, {
                    "menuType": 2,
                    "menuName": "发送全部商品给客服"
                }]
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
            msgType: 28,  //固定值
            miniPage: JSON.stringify(this.state.cardData)
        }, '*');

    }
    render(){
        return(
            <div className='customCard'>
                <p className='h4'>定制卡片：</p>
                <p className='h5'>可以结合实际业务，实现发放优惠券、物流信息查询、订单确认等丰富性的定制化卡片功能</p>
                <span className='send' onClick={this.sendHandler}>点击发送</span>
            </div>
        )

    }
 }

export default customCardComponent