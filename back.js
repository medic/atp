if(!window.angular) {
  window.angular = {
    element: function(body) {
      return {
        injector: function() {
          return {
            get: function(serviceName) {
              return {
                v1: {
                  back: function() {
                    window.history.back();
                    return true;
                  },
                },
              };
            },
          };
        },
      };
    },
  };
}
