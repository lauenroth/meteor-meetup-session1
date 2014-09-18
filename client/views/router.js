Router.map(function(){

  this.route('pictures', {
    path: '/',
  });

  this.route('discussion', {
    path: '/discussion/:id',
    data: function() {
      return Pictures.findOne({_id: this.params.id});
    }
  });

});