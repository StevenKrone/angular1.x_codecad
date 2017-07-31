angular.module('exampleapp')
  .component('message', {
    bindings: {
      from: '<',
      msg: '<'
    },
    controller: MessageController,
    template: [
      '<p><strong>A message from {{ $ctrl.from }}:</strong></p>',
      '<p>{{ $ctrl.msg }}</p>'
    ].join('')
  });
  
  function MessageController() {}