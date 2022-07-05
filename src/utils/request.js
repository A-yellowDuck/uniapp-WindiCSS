const BaseUrl ="http://192.168.0.51:88/tutor"
export const request = (obj) => {
  return new Promise((resolved, rejected) => {
    let header = {
            "content-type": "application/json",
          };
    // if (uni.getStorageSync("token")) {
    //   header = {
    //     "content-type": "application/json",
    //     Authorization: uni.getStorageSync("token"),
    //   };
    // } else {
    //   if (
    //     obj.url != "/miniProgram/login" &&
    //     obj.url != "/miniProgram/wxLogin"
    //   ) {
    //     uni.hideLoading();
    //     uni.showModal({
    //       title: "提示",
    //       showCancel: false,
    //       content: "个人信息已过期,请重新登录！",
    //       success: function (res) {
    //         if (res.confirm) {
    //           uni.setStorageSync("token", "");
    //           uni.reLaunch({
    //             url: "/pages/index/index",
    //           });
    //         }
    //       },
    //     });
    //     return;
    //   } else {
    //     header = {
    //       "content-type": "application/json",
    //     };
    //   }
    // }
    uni.request({
      method: obj.method,
      url: BaseUrl + obj.url,
      data: obj.data || {},
      header: obj.header || header,
      withCredentials: true,
      success: (res) => {
        resolved(res.data);
      },
      fail: (err) => {
        uni.showToast({
          title: "请求超时",
          icon: "none",
          duration: 2000,
        });
        rejected(err);
      },
    });
  });
};
