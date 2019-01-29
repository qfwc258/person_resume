Page({
    data: {},
     onLoad: function (options) {  
            
            var that=this;    
            wx.request({
                     url: 'https://www.lovelihe.top/resume/index.php/Admin/Userinfo/myskill', //仅为示例，并非真实的接口地址
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