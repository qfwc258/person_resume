Page({
    data: {},
    tel: function() {
        wx.makePhoneCall({
            phoneNumber: "17633089067"
        });
    },
    email: function() {
        wx.showModal({
            title: "wangjianphp@163.com",
            content: "暂不支持直接发送邮件",
            success: function(n) {
                n.confirm ? console.log("用户点击确定") : n.cancel && console.log("用户点击取消");
            }
        });
    },
    
     onLoad: function (options) {  
            
            var that=this;    
            wx.request({
                     url: 'https://www.lovelihe.top/resume/index.php/Admin/Userinfo/userInfo', //仅为示例，并非真实的接口地址
                     data: {
                       x: '' ,
                       y: ''
                     },
                     header: {
                       'content-type': 'application/json'
                     },
                     success: function(res) {
                            that.setData({  
                                 returnData: res.data.data,  
                            }) 
                             
                     }
            });
    },

    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
 

