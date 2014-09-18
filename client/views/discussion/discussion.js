Template.discussion.events({
  'submit form': function (e) {
    e.preventDefault();

    var comment = {
      user_name: $('#name').val(),
      comment: $('#comment').val()
    };

    if (!this.discussion) {
      this.discussion = [];
    }

    this.discussion.push(comment);

    Pictures.update({_id: this._id}, this);

    $('#name').val('');
    $('#comment').val('');
  },

  'click .like': function() {
    Pictures.update({_id: this._id}, {$inc: {rating: 1} });
  }

});