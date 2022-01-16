function my_spaceship (param_1){
    var location = {x:0, y:0 , direction: 'up'};
    var currentDirection = 'up';
    var directionDegrees = 0;
    var y = 0;
    var x = 0;
    for (var i = 0; i < param_1.length; i++){
      if(param_1[i] === "R"){
        directionDegrees += 90;
        currentDirection = directionPointer(directionDegrees);
      }
      if (param_1[i] === "L"){
        directionDegrees -= 90;
        currentDirection = directionPointer(directionDegrees);
      }
      if (param_1[i] === "A" && currentDirection === 'up'){
        y -= 1;
      }
      if (param_1[i] === "A" && currentDirection === 'down'){
        y += 1;
      }
      if (param_1[i] === "A" && currentDirection === 'right'){
        x += 1;
      }
      if (param_1[i] === "A" && currentDirection === 'left'){
        x -= 1;
      }
     
    }
    location.x = x;
    location.y = y;
    location.direction = currentDirection;
    return '{x: ' + x +', y: ' + y + ', direction: '+ "'" + currentDirection + "'" +'}'
  }
  
  function directionPointer(degrees){
    var whichDirection = Math.abs(degrees) % 360;
    if(whichDirection === 0){
      return 'up';
    }
    if(whichDirection === 90){
      return 'right';
    }
    if(whichDirection === 180){
      return 'down';
    }
    if(whichDirection === 270){
      return 'left';
    }
  }