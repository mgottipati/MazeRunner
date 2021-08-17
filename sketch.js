var thomas;
var left;
var right;
var stand;
var bg;
var positions;
var mazeGroup;
var gameOver;
var success;
var timer = 60;
var PLAY=1;
var END = 0;
var gameState = PLAY;
var gold;
var keyImg;
var door;
var lockImg;
var keyPLAY = 0 ;


function preload(){
left = loadAnimation('Pictures/leftStand.png', 'Pictures/leftWalk.png');
right = loadAnimation('Pictures/rightStand.png', 'Pictures/rightWalk.png');
stand = loadImage('Pictures/stand.png');
maze = loadImage('Pictures/maze.png');
gameOver = loadImage('Pictures/gameOver.png');
success = loadImage('Pictures/success.png');
keyImg = loadImage('Pictures/key.png');
lockImg = loadImage('Pictures/lock.png')
}

function setup()
{
  createCanvas(600,580);
  thomas = new Runner()

  mazeGroup = new Group();
 
  gold = createSprite(165,494, 10,10);
  gold.addImage(keyImg);
  gold.scale = 0.04

  door = createSprite((263+284)/2, 13, 284-263, 7);
  door.addImage(lockImg)
  door.scale = 0.05


// horizontal
mazeGroup.add(createSprite((14+290)/2, 562, 290-14, 7));
mazeGroup.add(createSprite((560+311)/2, 562, 560-311, 7));
mazeGroup.add(createSprite((427+230)/2, 534, 427-230, 7));
mazeGroup.add(createSprite((176+318)/2, 508, 318-176, 7));
mazeGroup.add(createSprite((371+315)/2, 480, 371-315, 7));
mazeGroup.add(createSprite((14+263)/2, 20, 263-14, 7));
mazeGroup.add(createSprite((559+284)/2, 20, 559-284, 7));
mazeGroup.add(createSprite((507+446)/2, 534, 507-446, 7));
mazeGroup.add(createSprite((534+392)/2, 508, 534-392, 7));
mazeGroup.add(createSprite((399+365)/2, 453, 399-365, 7));
mazeGroup.add(createSprite((392+426)/2, 480, 426-392, 7));
mazeGroup.add(createSprite((398+311)/2, 426, 398-311, 7));
mazeGroup.add(createSprite((399+230)/2, 372, 399-230, 7));
mazeGroup.add(createSprite((424+392)/2, 399, 424-392, 7));
mazeGroup.add(createSprite((480+392)/2, 345, 480-392, 7));
mazeGroup.add(createSprite((452+419)/2, 426, 452-419, 7));
mazeGroup.add(createSprite((559+392)/2, 129, 559-392, 7));
mazeGroup.add(createSprite((338+398)/2, 264, 398-339, 7));
mazeGroup.add(createSprite((263+175)/2, 425, 263-175, 7));
mazeGroup.add(createSprite((183+149)/2, 535, 183-149, 7));
mazeGroup.add(createSprite((101+41)/2, 535, 101-41, 7));
mazeGroup.add(createSprite((155+68)/2, 425, 155-68, 7));
mazeGroup.add(createSprite((95+154)/2, 508, 154-95, 7));
mazeGroup.add(createSprite((47+16)/2, 507, 47-16, 7));
mazeGroup.add(createSprite((101+40)/2, 480, 101-40, 7));
mazeGroup.add(createSprite((95+154)/2, 508, 154-95, 7));
mazeGroup.add(createSprite((95+129)/2, 453, 129-95, 7));
mazeGroup.add(createSprite((66+101)/2, 399, 101-66, 7));
mazeGroup.add(createSprite((128+41)/2, 371, 128-41, 7));
mazeGroup.add(createSprite((317+257)/2, 452, 317-257, 7));
mazeGroup.add(createSprite((453+364)/2, 182, 453-364, 7));
mazeGroup.add(createSprite((506+446)/2, 318, 506-446, 7));
mazeGroup.add(createSprite((533+446)/2, 399, 533-446, 7));
mazeGroup.add(createSprite((480+447)/2, 453, 480-447, 7));
mazeGroup.add(createSprite((507+474)/2, 427, 507-474, 7));
mazeGroup.add(createSprite((290+258)/2, 481, 290-258, 7));
mazeGroup.add(createSprite((479+445)/2, 372, 479-445, 7));
mazeGroup.add(createSprite((534+501)/2, 454, 534-501, 7));
mazeGroup.add(createSprite((343+257)/2, 344, 343-257, 7));
mazeGroup.add(createSprite((318+149)/2, 156, 318-149, 7));
mazeGroup.add(createSprite((372+257)/2, 128, 372-257, 7));
mazeGroup.add(createSprite((316+230)/2, 317, 316-230, 7));
mazeGroup.add(createSprite((507+418)/2, 155, 507-418, 7));
mazeGroup.add(createSprite((345+310)/2, 291, 345-310, 7));
mazeGroup.add(createSprite((182+150)/2, 481, 182-150, 7));
mazeGroup.add(createSprite((209+176)/2, 453, 209-176, 7));
mazeGroup.add(createSprite((209+176)/2, 373, 209-176, 7));
mazeGroup.add(createSprite((317+284)/2, 398, 317-284, 7));
mazeGroup.add(createSprite((237+202)/2, 399, 237-202, 7));
mazeGroup.add(createSprite((561+527)/2, 371, 561-527, 7));
mazeGroup.add(createSprite((561+527)/2, 426, 561-527, 7));
mazeGroup.add(createSprite((561+527)/2, 209, 561-527, 7));
mazeGroup.add(createSprite((561+527)/2, 155, 561-527, 7));
mazeGroup.add(createSprite((534+501)/2, 345, 534-501, 7));
mazeGroup.add(createSprite((561+473)/2, 291, 561-473, 7));
mazeGroup.add(createSprite((534+501)/2, 182, 534-501, 7));
mazeGroup.add(createSprite((209+67)/2, 128, 209-67, 7));
mazeGroup.add(createSprite((453+419)/2, 236, 453-419, 7));
mazeGroup.add(createSprite((74+40)/2, 291, 74-40, 7));
mazeGroup.add(createSprite((101+14)/2, 317, 101-14, 7));
mazeGroup.add(createSprite((101+41)/2, 317, 101-41, 7));
mazeGroup.add(createSprite((101+41)/2, 345, 101-41, 7));
mazeGroup.add(createSprite((125+95)/2, 290, 125-95, 7));
mazeGroup.add(createSprite((426+284)/2, 47, 426-284, 7));
mazeGroup.add(createSprite((264+176)/2, 47, 264-176, 7));
mazeGroup.add(createSprite((291+203)/2, 101, 291-203, 7));
mazeGroup.add(createSprite((453+393)/2, 75, 453-393, 7));
mazeGroup.add(createSprite((236+121)/2, 182, 236-121, 7));
mazeGroup.add(createSprite((344+284)/2, 183, 344-284, 7));
mazeGroup.add(createSprite((155+95)/2, 210, 155-95, 7));
mazeGroup.add(createSprite((534+474)/2, 48, 534-474, 7));
mazeGroup.add(createSprite((561+502)/2, 73, 561-502, 7));
mazeGroup.add(createSprite((183+121)/2, 263, 183-121, 7));
mazeGroup.add(createSprite((535+499)/2, 101, 535-499, 7));
mazeGroup.add(createSprite((235+176)/2, 290, 235-176, 7));
mazeGroup.add(createSprite((263+229)/2, 264, 263-229, 7));
mazeGroup.add(createSprite((210+176)/2, 316, 210-176, 7));
mazeGroup.add(createSprite((236+174)/2, 236, 236-174, 7));
mazeGroup.add(createSprite((318+285)/2, 264, 318-285, 7));
mazeGroup.add(createSprite((345+309)/2, 101, 345-309, 7));
mazeGroup.add(createSprite((128+67)/2, 74, 128-67, 7));
mazeGroup.add(createSprite((480+449)/2, 263, 480-449, 7));
mazeGroup.add(createSprite((40+74)/2, 101, 74-40, 7));
mazeGroup.add(createSprite((480+446)/2, 102, 480-446, 7));
mazeGroup.add(createSprite((291+255)/2, 236, 291-255, 7));
mazeGroup.add(createSprite((317+284)/2, 209, 317-284, 7));
mazeGroup.add(createSprite((480+445)/2, 210, 480-445, 7));
mazeGroup.add(createSprite((534+501)/2, 264, 534-501, 7));
mazeGroup.add(createSprite((182+150)/2, 346, 182-150, 7));
mazeGroup.add(createSprite((101+67)/2, 182, 101-67, 7));
mazeGroup.add(createSprite((128+95)/2, 155, 128-95, 7));
mazeGroup.add(createSprite((46+13)/2, 128, 46-13, 7));
mazeGroup.add(createSprite((155+122)/2, 101, 155-122, 7));
mazeGroup.add(createSprite((154+120)/2, 47, 154-120, 7));



var invisibles = createSprite((290+312)/2, 562, 312-290, 7);
 invisibles.visible = false;
 mazeGroup.add(invisibles);


//  Verticals
 mazeGroup.add(createSprite(314, (535+562)/2, 7, 562-535));
 mazeGroup.add(createSprite(206, (561+508)/2, 7, 561-508));
 mazeGroup.add(createSprite(341, (535+504)/2, 7, 535-504));
 mazeGroup.add(createSprite(314, (508+450)/2, 7, 508-450));
 mazeGroup.add(createSprite(368, (511+451)/2, 7, 511-451));
 mazeGroup.add(createSprite(395, (476+510)/2, 7, 510-476));
 mazeGroup.add(createSprite(17, (18+565)/2, 7, 565-18));
 mazeGroup.add(createSprite(558, (18+565)/2, 7, 565-18));
 mazeGroup.add(createSprite(476, (561+533)/2, 7, 561-533));
 mazeGroup.add(createSprite(530, (565+506)/2, 7, 565-506));
 mazeGroup.add(createSprite(152, (261+538)/2, 7, 538-261));
 mazeGroup.add(createSprite(422, (484+450)/2, 7, 484-450));
 mazeGroup.add(createSprite(449, (509+423)/2, 7, 509-423));
 mazeGroup.add(createSprite(368, (430+288)/2, 7, 430-288));
 mazeGroup.add(createSprite(395, (458+422)/2, 7, 458-424));
 mazeGroup.add(createSprite(422, (430+342)/2, 7, 430-342));
 mazeGroup.add(createSprite(395, (349+207)/2, 7, 349-207));
 mazeGroup.add(createSprite(504, (476+503)/2, 7, 503-476));
 mazeGroup.add(createSprite(503, (395+316)/2, 7, 395-316));
 mazeGroup.add(createSprite(233, (397+316)/2, 7, 397-316));
 mazeGroup.add(createSprite(368, (241+46)/2, 7, 241-45));
 mazeGroup.add(createSprite(43, (126+295)/2, 7, 295-126));
 mazeGroup.add(createSprite(70, (98+238)/2, 7, 238-98));
 mazeGroup.add(createSprite(340, (152+349)/2, 7, 349-152));
 mazeGroup.add(createSprite(231, (178+288)/2, 7, 288-178));
 mazeGroup.add(createSprite(422, (320+183)/2, 7, 320-183));
 mazeGroup.add(createSprite(43, (368+478)/2, 7, 478-368));
 mazeGroup.add(createSprite(179, (431+343)/2, 7, 427-345));
 mazeGroup.add(createSprite(97, (207+316)/2, 7, 316-207));
 mazeGroup.add(createSprite(258, (154+263)/2, 7, 263-154));
 mazeGroup.add(createSprite(501, (154+238)/2, 7, 238-154));
 mazeGroup.add(createSprite(177, (207+264)/2, 7, 264-207));
 mazeGroup.add(createSprite(234, (450+510)/2, 7, 510-450));
 mazeGroup.add(createSprite(448, (261+322)/2, 7, 322-261));
 mazeGroup.add(createSprite(315, (207+262)/2, 7, 262-207));
 mazeGroup.add(createSprite(124, (289+374)/2, 7, 374-289));
 mazeGroup.add(createSprite(69, (261+291)/2, 7, 291-261));
 mazeGroup.add(createSprite(124, (233+264)/2, 7, 264-233));
 mazeGroup.add(createSprite(177, (45+127)/2, 7, 127-45));
 mazeGroup.add(createSprite(231, (153+100)/2, 7, 153-100));
 mazeGroup.add(createSprite(312, (72+125)/2, 7, 125-72));
 mazeGroup.add(createSprite(450, (22+99)/2, 7, 99-22));
 mazeGroup.add(createSprite(43, (22+76)/2, 7, 76-22));
 mazeGroup.add(createSprite(69, (44+75)/2, 7, 75-44));
 mazeGroup.add(createSprite(123, (44+75)/2, 7, 75-44));
 mazeGroup.add(createSprite(231, (44+75)/2, 7, 75-44));
 mazeGroup.add(createSprite(285, (44+75)/2, 7, 75-44));
 mazeGroup.add(createSprite(341, (44+75)/2, 7, 75-44));
 mazeGroup.add(createSprite(96, (48+22)/2, 7, 48-22));
 mazeGroup.add(createSprite(150, (48+22)/2, 7, 48-22));
 mazeGroup.add(createSprite(96, (104+72)/2, 7, 104-72));
 mazeGroup.add(createSprite(151, (104+72)/2, 7, 104-72));
 mazeGroup.add(createSprite(205, (104+72)/2, 7, 104-72));
 mazeGroup.add(createSprite(395, (104+72)/2, 7, 104-72));
 mazeGroup.add(createSprite(258, (100+44)/2, 7, 100-44));
 mazeGroup.add(createSprite(476, (100+44)/2, 7, 100-44));
 mazeGroup.add(createSprite(477, (180+267)/2, 7, 267-180));
 mazeGroup.add(createSprite(205, (484+424)/2, 7, 484-424));
 mazeGroup.add(createSprite(259, (321+287)/2, 7, 321-287));
 mazeGroup.add(createSprite(287, (295+262)/2, 7, 295-262));
 mazeGroup.add(createSprite(287, (213+181)/2, 7, 213-181));
 mazeGroup.add(createSprite(476, (376+343)/2, 7, 376-343));
 mazeGroup.add(createSprite(476, (429+396)/2, 7, 429-396));
 mazeGroup.add(createSprite(502, (457+424)/2, 7, 457-424));
 mazeGroup.add(createSprite(530, (483+451)/2, 7, 483-451));
 mazeGroup.add(createSprite(530, (429+397)/2, 7, 429-397));
 mazeGroup.add(createSprite(530, (321+288)/2, 7, 321-288));
 mazeGroup.add(createSprite(340, (402+369)/2, 7, 402-369));
 mazeGroup.add(createSprite(341, (456+423)/2, 7, 456-423));
 mazeGroup.add(createSprite(477, (484+451)/2, 7, 484-451));
 mazeGroup.add(createSprite(314, (429+396)/2, 7, 429-396));
 mazeGroup.add(createSprite(286, (429+396)/2, 7, 429-396));
 mazeGroup.add(createSprite(259, (449+483)/2, 7, 483-449));
 mazeGroup.add(createSprite(178, (509+477)/2, 7, 509-477));
 mazeGroup.add(createSprite(125, (563+532)/2, 7, 563-532));
 mazeGroup.add(createSprite(124, (484+451)/2, 7, 484-451));
 mazeGroup.add(createSprite(70, (538+478)/2, 7, 538-478));
 mazeGroup.add(createSprite(69, (456+424)/2, 7, 456-424));
 mazeGroup.add(createSprite(97, (402+370)/2, 7, 402-370));
 mazeGroup.add(createSprite(125, (427+397)/2, 7, 427-397));
 mazeGroup.add(createSprite(259, (427+397)/2, 7, 427-397));
 mazeGroup.add(createSprite(97, (482+451)/2, 7, 482-451));
 mazeGroup.add(createSprite(125, (482+451)/2, 7, 482-451));
 mazeGroup.add(createSprite(70, (347+315)/2, 7, 347-315));
 mazeGroup.add(createSprite(123, (131+99)/2, 7, 131-99));
 mazeGroup.add(createSprite(124, (185+153)/2, 7, 185-153));
 mazeGroup.add(createSprite(151, (239+207)/2, 7, 239-207));
 mazeGroup.add(createSprite(205, (212+181)/2, 7, 212-181));
 mazeGroup.add(createSprite(206, (293+261)/2, 7, 293-261));
 mazeGroup.add(createSprite(178, (319+289)/2, 7, 319-289));
 mazeGroup.add(createSprite(205, (348+315)/2, 7, 348-315));
 mazeGroup.add(createSprite(286, (158+125)/2, 7, 158-125));
 mazeGroup.add(createSprite(395, (158+125)/2, 7, 158-125));
 mazeGroup.add(createSprite(421, (131+97)/2, 7, 131-97));
 mazeGroup.add(createSprite(503, (131+101)/2, 7, 131-101));
 mazeGroup.add(createSprite(449, (184+154)/2, 7, 184-154));
 mazeGroup.add(createSprite(530, (238+207)/2, 7, 238-207));
 mazeGroup.add(createSprite(502, (294+260)/2, 7, 294-260));




}

function draw() 
{
  background(51);
  drawSprites();
  thomas.thomas.bounceOff(mazeGroup);
  if(frameCount%50 === 0 && timer > 0 && gameState===PLAY){
    timer = timer - 1
  }

 if(thomas.thomas.collide(gold)){
   keyPLAY = true;
   gold.destroy()
 }
 
 if(thomas.thomas.collide(door) && keyPLAY === true){
   door.destroy()
 }

  if(timer < 10){
    fill('red')
  }
  else{
    fill('gray')
  }

  if(thomas.thomas.y < 15){
    gameState = END
  }

  if(gameState === PLAY){
    thomas.display()
  }


  if(timer === 0 ){
    thomas.thomas.destroy()
    image(gameOver,100,100,400,400)
    gameState = 0
  }
  
  if(thomas.thomas.y < 17 && timer > 0){
    image(success, 90,90,400,400);
    gameState = 0
  }


  textSize(20)
  text(timer, 570, 50)
}

function mouseClicked(){
  console.log(mouseX+","+mouseY);
}