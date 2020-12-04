Page({
  data: {
    defaultList: [],
    popupShow: false,
    popupBottom: 0,
    cancelReason: "",
  },
  onShow() {
    console.log("load");
    this.createList();
  },
  createList() {
    let arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push({
        key: i,
        txt: `id${i}`
      });
    }
    this.setData({
      defaultList: [...arr]
    });
  },
  onClickOpenCancelReason(e) {
    this.setData({
      popupShow: true,
    });
    console.log(e);
  },
  onClickCloseCancelReason() {
    this.setData({
      popupShow: false,
      cancelReason: ""
    });
  },
  onTextAreaFocus(e) {
    console.log(e.detail.height);
    this.setData({
      popupBottom: e.detail.height || 0
    });
  },
  onTextAreaBlur() {
    this.setData({
      popupBottom: 0
    });
  },
  onTextAreaInput(e) {
    const text = e.detail.value;
    this.setData({
      cancelReason: text
    });
  }
});
