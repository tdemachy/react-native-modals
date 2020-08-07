Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=require('react-native');var _Animation2=require('./Animation');var _Animation3=_interopRequireDefault(_Animation2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var FadeAnimation=function(_Animation){_inherits(FadeAnimation,_Animation);function FadeAnimation(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$initialValue=_ref.initialValue,initialValue=_ref$initialValue===undefined?0:_ref$initialValue,_ref$useNativeDriver=_ref.useNativeDriver,useNativeDriver=_ref$useNativeDriver===undefined?true:_ref$useNativeDriver,_ref$animationDuratio=_ref.animationDuration,animationDuration=_ref$animationDuratio===undefined?200:_ref$animationDuratio;_classCallCheck(this,FadeAnimation);var _this=_possibleConstructorReturn(this,(FadeAnimation.__proto__||Object.getPrototypeOf(FadeAnimation)).call(this,{initialValue:initialValue,useNativeDriver:useNativeDriver}));_this.animationDuration=animationDuration;return _this;}_createClass(FadeAnimation,[{key:'in',value:function _in(){var onFinished=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};_reactNative.Animated.timing(this.animate,{toValue:1,duration:this.animationDuration,useNativeDriver:!!this.useNativeDriver}).start(onFinished);}},{key:'out',value:function out(){var onFinished=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};_reactNative.Animated.timing(this.animate,{toValue:0,duration:this.animationDuration,useNativeDriver:!!this.useNativeDriver}).start(onFinished);}},{key:'getAnimations',value:function getAnimations(){return{opacity:this.animate};}}]);return FadeAnimation;}(_Animation3.default);exports.default=FadeAnimation;