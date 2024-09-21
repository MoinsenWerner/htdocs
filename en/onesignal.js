  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "ffa275bf-058c-4c12-9b17-26c0142ffed4",
      safari_web_id: "web.onesignal.auto.2d34c372-40ef-4eb5-956b-2d525ea9497b",
      notifyButton: {
        enable: true,
      },
    });
  });