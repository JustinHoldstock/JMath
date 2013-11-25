//Math helper

function JMath() {}

JMath.lerp = function(from, to, percent){
	return from + (to - from) * percent;
};

JMath.smoothstep = function(a, b, x){
    var t = JMath.saturate((x - a)/(b - a));
    return t*t*(3.0 - (2.0*t));
};

JMath.saturate = function(value){
	return Math.min(1.0, Math.max(0.0, value));
};

JMath.clamp = function(min, max, value){
	return Math.min(max, Math.max(min, value));
};

JMath.quadtricBezier = function(A, B, C, T){
  //clamp T to 0 and 1
  T = JMath.saturate(T);
  
  var S = 1 - T;
  var twoS = 2 * S;
  var twoT = 2 * T;
  var o = twoS * A + 2 * (S * T) * B + twoT * C;
  
  return o;
};

JMath.randSign = function(){
  return Math.random() > 0.5 ? 1 : -1;
};