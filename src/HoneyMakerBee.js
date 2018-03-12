var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
// Set prototype of honeymakerbee to a new object that copies Bee prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// honeyMakerBee prototype was just overwritten by Bee.prototype, which has a constructor
// of Grub. we need to reset it so that it points to honeymakerbee so that any instance of 
// honeymakerbee can see that it was constructed by HoneyMakerBee.
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}
