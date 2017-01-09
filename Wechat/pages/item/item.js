Page({
    data: {
        title: "Title",
        startTime: "00:00",
        endTime: "23:59"
    },
    startTimeChange: function (e) {
        this.setData({ startTime: e.detail.value });
    },
    endTimeChange: function (e) {
        this.setData({ endTime: e.detail.value });
    },
    formSubmit: function (e) {
        this.setData({ title: e.detail.value.title });
        var that = this
        wx.getStorage({
            key: 'plans',
            success: function (res) {
                // success
            },
            complete: function (res) {
                wx.setStorage({
                    key: 'plans',
                    data: (res.data ? res.data : []).concat({
                        title: that.data.title,
                        startTime: that.data.startTime,
                        endTime: that.data.endTime
                    }),
                    complete: function (e) {
                        wx.navigateBack();
                    }
                });
            }
        })

    },
    formReset: function () {

    }
})