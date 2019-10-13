Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 当前选中的导航 */
    currentIndexNav: 0,
    /* 首页导航数据 */
    navList:[],
    /* 轮播图 */
    swiperList:[],
    /* 获取视频列表 */
    videosList:[]
  },

  /* 获取首页导航数据 */
  getNavList() {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList",
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          // this不是微信小程序本身 改变
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },

  /* 获取轮播图数据 */
  getSwiperList() {
    let that = this
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/swiperList',
      success(res){
        // console.log(res)
        if(res.data.code===0){
          that.setData({
            swiperList:res.data.data.swiperList
          })  
        }
      }
    })
  },

  /* 获取视频列表 */
  getVideoList() {
    let that = this
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList',
      success(res){
        // console.log(res);
        if(res.data.code===0){
           that.setData({
             videosList:res.data.data.videosList
           }) 
        }
      }
    })
  },

  /* 点击导航 高亮 */
  activeNav(e){
    this.setData({
      /* dataset.index获取data-index的值 */
      currentIndexNav: e.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取首页导航数据
    this.getNavList();
    // 2.获取轮播图数据
    this.getSwiperList();
    // 3.获取视频列表
    this.getVideoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})