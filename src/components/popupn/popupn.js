Component({
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: function(newVal) {
        this.changeShow(newVal);
      }
    },
    bottom: {
      type: Number,
      value: 0,
      observer: function(newVal) {
        this.changeBottom(newVal);
      }
    }
  },
  data: {
    coverAnimation: {},
    slotAnimation: {},
    visible: false
  },
  methods: {
    changeShow: function(newVal) {
      console.log("change:" + newVal);
      if (newVal) {
        this.open();
      } else {
        this.close();
      }
    },
    changeBottom(newVal) {
      if (!newVal) {
        newVal = 0;
      }
      let slotAnimation = wx.createAnimation({ timingFunction: "ease", duration: 0 });
      slotAnimation.bottom(newVal).step();
      this.setData({
        slotAnimation: slotAnimation.export()
      });
    },
    close() {
      if (this.data.bottom !== 0) {
        this.data.show = true;
        return;
      }
      setTimeout(() => {
        this.setData({
          visible: false
        });
      }, 500);
      this.setData({
        show: false
      });
      let coverAnimation = wx.createAnimation({ timingFunction: "ease" });
      coverAnimation.opacity(0).step();
      this.setData({
        coverAnimation: coverAnimation.export()
      });

      let slotAnimation = wx.createAnimation({ timingFunction: "ease" });
      slotAnimation.bottom(-999).step();
      this.setData({
        slotAnimation: slotAnimation.export()
      });
    },
    open() {
      this.setData({
        visible: true
      });
      let coverAnimation = wx.createAnimation({ timingFunction: "ease" });
      coverAnimation.opacity(1).step();
      this.setData(
        {
          coverAnimation: coverAnimation.export()
        },
        () => {
          let slotAnimation = wx.createAnimation({ timingFunction: "ease" });
          slotAnimation.bottom(0).step();
          this.setData({
            slotAnimation: slotAnimation.export()
          });
        }
      );
    }
  }
});
