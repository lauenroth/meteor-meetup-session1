Template.pictures.helpers({
  pictures: function () {
    return Pictures.find({}, {sort: {rating: -1} });
  }
});

Template.pictures.events({
  'submit form': function (e, data) {
    // ...
    e.preventDefault();

    // console.log(e);
    // console.log(data);
    // console.log(this);

    var picture = {
      url: $('#picture').val(),
      discussion: [],
      rating: 0
    };

    Pictures.insert(picture, function(data) {
      // console.log('callback');
      // console.log(data);
    });
  },
  // 'click li': function(e, data) {

  //   var id = $(e.currentTarget).data('id');

  // }
});