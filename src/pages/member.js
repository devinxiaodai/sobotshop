
import member from '../css/member.css';
import React, { Component } from 'react';

const userobj = 
  {
    memNum: "XB000301",
    integral: '314159.26', 
    memType:'高级会员',
    registTime:'5年',
    customeramount:'13099元',
    balance:'2300元',
    birth:'1993/05/02',
    status:'正常',
    overTime:'2025/07/21',
    buyTimes:'32次'

 };

 class userinfo extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return (
            <div className='userArea'>
                <h4>会员信息：</h4>
                <div className='userPlist'>
                    <p><span className='bold'>会员编号</span> : <span className='userValue'>{userobj.memNum}</span></p>
                    <p><span className='bold'>会员等级</span> : <span className='userValue'>{userobj.memType}</span></p>
                    <p><span className='bold'>会员生日</span> : <span className='userValue'>{userobj.birth}</span></p>
                    <p><span className='bold'>注册时间</span> : <span className='userValue'>{userobj.registTime}</span></p>
                    <p><span className='bold'>消费总额</span> : <span className='userValue'>{userobj.customeramount}</span></p>

                </div>
                <div className='userPlist userPlist2'>
                    <p><span className='bold'>卡内余额</span> : <span className='userValue'>{userobj.balance}</span></p>
                    <p><span className='bold'>卡片状态</span> : <span className='userValue'>{userobj.status}</span></p>
                    <p><span className='bold'>会员积分</span> : <span className='userValue'>{userobj.integral}</span></p>
                    <p><span className='bold'>过期时间</span> : <span className='userValue'>{userobj.registTime}</span></p>
                    <p><span className='bold'>购次</span> : <span className='userValue'>{userobj.buyTimes}</span></p>
                    <p><span className='more'>更多...</span></p>

                </div>
                <div className='clear'></div> 
            </div>
        )
    }
 }

export default userinfo