import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.viewmodel({
  testArray: [],
  onCreated() {
  	this.testArray().push('item');
  	console.log(this.testArray());
  	console.log(this.testArray().array());
  }
});
