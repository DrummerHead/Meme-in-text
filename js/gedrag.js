var ImageData = Backbone.Model.extend({
  defaults: {
    captionTop: 'not sure if image',
    captionBottom: 'or text',
    imgSrc: 'http://mcdlr.com/i/fry.png'
  }
});


var ImageView = Backbone.View.extend({
  initialize: function(){
    this.template = $('#imageBinTemplate').html();
  },

  render: function(){
    console.log(this.template);
    var imageContent = _.template(this.template, this.model.toJSON());
    console.log('imageContent = ' + imageContent)
    this.$el.html(imageContent);
    return this;
  }
});


var LeForm = Backbone.View.extend({
  el: '#leForm',

  events: {
    'submit': 'getData'
  },

  getData: function(e){
    e.preventDefault();
    var putImgUrl = this.$el.find('#putImgUrl').val();
    var putCaptionTop = this.$el.find('#putCaptionTop').val();
    var putCaptionBottom = this.$el.find('#putCaptionBottom').val();
  }
});


var Router = Backbone.Router.extend({
  routes: {
    '': 'landing',
    '*magia': 'params'
  },

  initialize: function(){
    var leform = new LeForm;
    var imageData = new ImageData;
    var imageView = new ImageView({model: imageData});

    $('[role="main"]').append(imageView.render().el)
  },

  landing: function(){
    console.log('esto es la landing');
  },

  params: function(magia){
    console.log(magia);
  },

  start: function(){
    console.log('arranco la cosa esta del router');
    Backbone.history.start();
  }
});


jQuery(function($){
  var memeToText = new Router;
  memeToText.start();
});

