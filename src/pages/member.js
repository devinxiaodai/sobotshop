
import member from '../css/member.css';
import React, { Component } from 'react';

const userobj = 
  {
    memNum: "XB000301",
    integral: '34159.26', 
    memType:'普通会员',
    registTime:'5年',
    customeramount:'1099元',
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
                <p className='h4'>会员信息：</p>
                <div className='userPlist'>
                    <p className='p4'><span className='bold'>会员编号</span> : <span className='userValue'>{userobj.memNum}</span></p>
                    <p className='p4'><span className='bold'>会员等级</span> : <span className='userValue org'>{userobj.memType}</span></p>
                    <p className='p4'><span className='bold'>会员生日</span> : <span className='userValue'>{userobj.birth}</span></p>
                    <p className='p4'><span className='bold'>注册时间</span> : <span className='userValue'>{userobj.registTime}</span></p>
                    <p className='p4'><span className='bold'>消费总额</span> : <span className='userValue'>{userobj.customeramount}</span></p>

                </div>
                <div className='userPlist userPlist2'>
                    <p className='p4'><span className='bold'>卡内余额</span> : <span className='userValue'>{userobj.balance}</span></p>
                    <p className='p4'><span className='bold'>卡片状态</span> : <span className='userValue'>{userobj.status}</span></p>
                    <p className='p4'><span className='bold'>会员积分</span> : <span className='userValue'>{userobj.integral}</span></p>
                    <p className='p4'><span className='bold'>过期时间</span> : <span className='userValue'>{userobj.registTime}</span></p>
                    <p className='p4'><span className='bold'>购次</span> : <span className='userValue'>{userobj.buyTimes}</span></p>
                    <p className='p4'><span className='more'><a href="https://www.taobao.com" target='_blank' rel="noreferrer">查看更多...</a></span></p>

                </div>
                <div className='clear'></div> 
            </div>
        )
    }
 }

export default userinfo