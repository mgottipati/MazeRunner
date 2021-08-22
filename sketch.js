var form;
var thomas;
var left;
var right;
var stand;
var positions;
var mazeGroup;
var gameOver;
var success;
var timer = 120;
var PLAY = 1;
var END = 0;
var START = 3;
var gameState = START;
var gold;
var keyImg;
var door;
var lockImg;
var keyPLAY = 0 ;
// second maze
var maze2Group;
var gold2;
var door2;
var LEVELTWO = 2;
var firstVisible = 1;
var secondKeyPLAY = 0;


function preload(){
left = loadAnimation('Pictures/leftStand.png', 'Pictures/leftWalk.png');
right = loadAnimation('Pictures/rightStand.png', 'Pictures/rightWalk.png');
stand = loadImage('Pictures/stand.png');
maze = loadImage('Pictures/maze.png');
gameOver = loadImage('Pictures/gameOver.png');
success = loadImage('Pictures/success.png');
keyImg = loadImage('Pictures/key.png');
lockImg = loadImage('Pictures/lock.png');
maze2 = loadImage('Pictures/maze2.png');
}

function setup()
{
  createCanvas(600,580);


  thomas = new Runner()
  // enemy1 = new Enemy()

  mazeGroup = new Group();
  maze2Group = new Group();
 
  gold = createSprite(165,494, 10,10);
  gold.addImage(keyImg);
  gold.scale = 0.04
  gold.visible = false;

  gold2 = createSprite(573, 120, 10, 10);
  gold2.addImage(keyImg);
  gold2.scale = 0.03;
  gold2.visible = false;

  door = createSprite((263+284)/2, 13, 284-263, 7);
  door.addImage(lockImg)
  door.scale = 0.05


  door2 = createSprite(298,8, 10,10);
  door2.addImage(lockImg);
  door2.scale = 0.05;
  door2.visible = false;

  form = new Form;


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


// maze2

// horizontals
maze2Group.add(createSprite((588+38)/2, 575, 588-38, 6));
maze2Group.add(createSprite((290+13)/2, 6, 290-13, 6));
maze2Group.add(createSprite((587+310)/2, 6, 587-310, 6));
maze2Group.add(createSprite((488+286)/2, 551, 488-285, 6));
maze2Group.add(createSprite((563+509)/2, 551, 563-509, 6));
maze2Group.add(createSprite((241+212)/2, 551, 241-212, 6));
maze2Group.add(createSprite((167+138)/2, 551, 167-138, 6));
maze2Group.add(createSprite((118+40)/2, 551, 118-40, 6));
maze2Group.add(createSprite((240+64)/2, 526, 240-64, 6));
maze2Group.add(createSprite((340+286)/2, 526, 340-286, 6));
maze2Group.add(createSprite((488+360)/2, 526, 488-360, 6));
maze2Group.add(createSprite((587+558)/2, 526, 587-558, 6));
maze2Group.add(createSprite((118+88)/2, 502, 587-558, 6));
maze2Group.add(createSprite((315+163)/2, 502, 315-163, 6));
maze2Group.add(createSprite((415+361)/2, 502, 415-361, 6));
maze2Group.add(createSprite((465+435)/2, 502, 465-435, 6));
maze2Group.add(createSprite((563+533)/2, 502, 563-533, 6));
maze2Group.add(createSprite((266+112)/2, 477, 266-112, 6));
maze2Group.add(createSprite((414+360)/2, 477, 414-360, 6));
maze2Group.add(createSprite((488+460)/2, 477, 488-460, 6));
maze2Group.add(createSprite((562+510)/2, 477, 562-510, 6));
maze2Group.add(createSprite((117+88)/2, 452, 117-88, 6));
maze2Group.add(createSprite((265+185)/2, 452, 265-185, 6));
maze2Group.add(createSprite((389+336)/2, 452, 389-336, 6));
maze2Group.add(createSprite((538+410)/2, 452, 538-410, 6));
maze2Group.add(createSprite((93+64)/2, 428, 93-64, 6));
maze2Group.add(createSprite((266+236)/2, 428, 266-236, 6));
maze2Group.add(createSprite((514+386)/2, 428, 514-386, 6));
maze2Group.add(createSprite((117+39)/2, 403, 117-39, 6));
maze2Group.add(createSprite((314+212)/2, 403, 314-212, 6));
maze2Group.add(createSprite((439+360)/2, 403, 439-360, 6));
maze2Group.add(createSprite((141+38)/2, 378, 141-38, 6));
maze2Group.add(createSprite((291+236)/2, 378, 291-236, 6));
maze2Group.add(createSprite((414+386)/2, 378, 414-386, 6));
maze2Group.add(createSprite((514+434)/2, 378, 514-434, 6));
maze2Group.add(createSprite((93+64)/2, 353, 93-64, 6));
maze2Group.add(createSprite((142+112)/2, 353, 142-112, 6));
maze2Group.add(createSprite((389+311)/2, 353, 389-311, 6));
maze2Group.add(createSprite((438+410)/2, 353, 438-410, 6));
maze2Group.add(createSprite((563+460)/2, 353, 563-460, 6));
maze2Group.add(createSprite((43+13)/2, 329, 43-13, 6));
maze2Group.add(createSprite((117+88)/2, 329, 117-88, 6));
maze2Group.add(createSprite((167+137)/2, 329, 167-137, 6));
maze2Group.add(createSprite((291+261)/2, 329, 291-261, 6));
maze2Group.add(createSprite((414+335)/2, 329, 414-335, 6));
maze2Group.add(createSprite((538+508)/2, 329, 538-508, 6));
maze2Group.add(createSprite((588+533)/2, 304, 588-533, 6));
maze2Group.add(createSprite((488+459)/2, 304, 488-459, 6));
maze2Group.add(createSprite((438+409)/2, 304, 438-409, 6));
maze2Group.add(createSprite((389+261)/2, 304, 389-261, 6));
maze2Group.add(createSprite((92+39)/2, 304, 92-39, 6));
maze2Group.add(createSprite((166+89)/2, 280, 166-89, 6));
maze2Group.add(createSprite((464+261)/2, 280, 464-261, 6));
maze2Group.add(createSprite((563+509)/2, 280, 563-509, 6));
maze2Group.add(createSprite((464+435)/2, 254, 464-435, 6));
maze2Group.add(createSprite((341+286)/2, 254, 341-286, 6));
maze2Group.add(createSprite((266+238)/2, 254, 266-238, 6));
maze2Group.add(createSprite((193+64)/2, 254, 193-64, 6));
maze2Group.add(createSprite((118+39)/2, 230, 118-39, 6));
maze2Group.add(createSprite((216+137)/2, 230, 216-137, 6));
maze2Group.add(createSprite((390+360)/2, 230, 390-360, 6));
maze2Group.add(createSprite((266+13)/2, 205, 266-13, 6));
maze2Group.add(createSprite((389+361)/2, 205, 389-361, 6));
maze2Group.add(createSprite((589+557)/2, 205, 589-557, 6));
maze2Group.add(createSprite((563+533)/2, 181, 563-533, 6));
maze2Group.add(createSprite((488+460)/2, 181, 488-460, 6));
maze2Group.add(createSprite((413+386)/2, 181, 413-386, 6));
maze2Group.add(createSprite((291+162)/2, 181, 291-162, 6));
maze2Group.add(createSprite((69+39)/2, 181, 69-39, 6));
maze2Group.add(createSprite((92+63)/2, 156, 92-63, 6));
maze2Group.add(createSprite((217+113)/2, 156, 217-113, 6));
maze2Group.add(createSprite((366+236)/2, 156, 366-236, 6));
maze2Group.add(createSprite((588+558)/2, 156, 588-558, 6));
maze2Group.add(createSprite((216+63)/2, 107, 216-63, 6));
maze2Group.add(createSprite((292+261)/2, 107, 292-261, 6));
maze2Group.add(createSprite((414+310)/2, 107, 414-310, 6));
maze2Group.add(createSprite((588+510)/2, 107, 588-510, 6));
maze2Group.add(createSprite((564+534)/2, 131, 564-534, 6));
maze2Group.add(createSprite((390+335)/2, 131, 390-335, 6));
maze2Group.add(createSprite((316+261)/2, 131, 316-261, 6));
maze2Group.add(createSprite((241+211)/2, 131, 241-211, 6));
maze2Group.add(createSprite((290+64)/2, 81, 290-64, 6));
maze2Group.add(createSprite((440+310)/2, 81, 440-310, 6));
maze2Group.add(createSprite((563+459)/2, 81, 563-459, 6));
maze2Group.add(createSprite((539+484)/2, 56, 539-484, 6));
maze2Group.add(createSprite((266+212)/2, 56, 266-212, 6));
maze2Group.add(createSprite((167+64)/2, 56, 167-64, 6));
maze2Group.add(createSprite((416+385)/2, 56, 416-385, 6));
maze2Group.add(createSprite((93+39)/2, 32, 93-39, 6));
maze2Group.add(createSprite((192+114)/2, 32, 192-114, 6));
maze2Group.add(createSprite((342+311)/2, 32, 342-311, 6));
maze2Group.add(createSprite((488+435)/2, 32, 488-435, 6));
maze2Group.add(createSprite((564+508)/2, 32, 564-508, 6));
maze2Group.add(createSprite((464+433)/2, 328, 464-433, 6));

var invisibles2 = createSprite((12+38)/2, 577, 12-38, 6);
 invisibles.visible = false;
 maze2Group.add(invisibles2);



// verticals
maze2Group.add(createSprite(15, (579+5)/2, 6, 579-5));
maze2Group.add(createSprite(41, (159+32)/2, 6, 159-32));
maze2Group.add(createSprite(41, (155+32)/2, 6, 155-32));
maze2Group.add(createSprite(41, (382+327)/2, 6, 382-327));
maze2Group.add(createSprite(41, (530+402)/2, 6, 530-402));
maze2Group.add(createSprite(41, (578+550)/2, 6, 578-550));
maze2Group.add(createSprite(41, (308+230)/2, 6, 308-230));
maze2Group.add(createSprite(66, (181+57)/2, 6, 181-57));
maze2Group.add(createSprite(66, (352+254)/2, 6, 352-254));
maze2Group.add(createSprite(66, (528+428)/2, 6, 528-428));
maze2Group.add(createSprite(90, (34+5)/2, 6, 34-5));
maze2Group.add(createSprite(90, (159+128)/2, 6, 159-128));
maze2Group.add(createSprite(90, (209+178)/2, 6, 209-177));
maze2Group.add(createSprite(90, (503+451)/2, 6, 503-451));
maze2Group.add(createSprite(114, (134+104)/2, 6, 134-104));
maze2Group.add(createSprite(114, (183+153)/2, 6, 183-153));
maze2Group.add(createSprite(114, (356+278)/2, 6, 356-278));
maze2Group.add(createSprite(114, (481+401)/2, 6, 481-401));
maze2Group.add(createSprite(140, (531+476)/2, 6, 531-476));
maze2Group.add(createSprite(140, (455+351)/2, 6, 455-351));
maze2Group.add(createSprite(140, (332+303)/2, 6, 332-303));
maze2Group.add(createSprite(140, (332+303)/2, 6, 332-303));
maze2Group.add(createSprite(139, (209+129)/2, 6, 209-129));
maze2Group.add(createSprite(165, (134+104)/2, 6, 134-104));
maze2Group.add(createSprite(165, (454+277)/2, 6, 454-277));
maze2Group.add(createSprite(165, (579+549)/2, 6, 579-549));
maze2Group.add(createSprite(189, (555+527)/2, 6, 555-527));
maze2Group.add(createSprite(189, (480+252)/2, 6, 480-252));
maze2Group.add(createSprite(189, (160+129)/2, 6, 160-129));
maze2Group.add(createSprite(189, (84+30)/2, 6, 84-30));
maze2Group.add(createSprite(213, (58+5)/2, 6, 58-5));
maze2Group.add(createSprite(213, (132+105)/2, 6, 132-105));
maze2Group.add(createSprite(213, (184+155)/2, 6, 184-155));
maze2Group.add(createSprite(213, (228+457)/2, 6, 457-228));
maze2Group.add(createSprite(238, (35+4)/2, 6, 35-4));
maze2Group.add(createSprite(238, (109+80)/2, 6, 109-80));
maze2Group.add(createSprite(238, (159+130)/2, 6, 159-130));
maze2Group.add(createSprite(238, (381+229)/2, 6, 381-229));
maze2Group.add(createSprite(238, (554+524)/2, 6, 554-524));
maze2Group.add(createSprite(263, (554+501)/2, 6, 554-501));
maze2Group.add(createSprite(263, (455+427)/2, 6, 455-427));
maze2Group.add(createSprite(263, (356+328)/2, 6, 356-328));
maze2Group.add(createSprite(263, (307+278)/2, 6, 307-278));
maze2Group.add(createSprite(263, (256+204)/2, 6, 256-204));
maze2Group.add(createSprite(263, (34+5)/2, 6, 34-5));
maze2Group.add(createSprite(288, (109+5)/2, 6, 109-5));
maze2Group.add(createSprite(288, (256+179)/2, 6, 256-179));
maze2Group.add(createSprite(288, (382+327)/2, 6, 382-327));
maze2Group.add(createSprite(288, (504+402)/2, 6, 504-402));
maze2Group.add(createSprite(288, (554+524)/2, 6, 554-524));
maze2Group.add(createSprite(313, (506+476)/2, 6, 506-476));
maze2Group.add(createSprite(313, (455+303)/2, 6, 455-303));
maze2Group.add(createSprite(313, (234+155)/2, 6, 234-155));
maze2Group.add(createSprite(313, (136+107)/2, 6, 136-107));
maze2Group.add(createSprite(313, (86+57)/2, 6, 86-57));
maze2Group.add(createSprite(338, (161+130)/2, 6, 161-130));
maze2Group.add(createSprite(338, (258+180)/2, 6, 258-180));
maze2Group.add(createSprite(338, (530+377)/2, 6, 530-377));
maze2Group.add(createSprite(362, (531+477)/2, 6, 531-477));
maze2Group.add(createSprite(362, (431+378)/2, 6, 431-378));
maze2Group.add(createSprite(362, (284+229)/2, 6, 284-229));
maze2Group.add(createSprite(362, (209+181)/2, 6, 209-181));
maze2Group.add(createSprite(362, (61+6)/2, 6, 61-6));
maze2Group.add(createSprite(387, (59+30)/2, 6, 59-30));
maze2Group.add(createSprite(387, (181+129)/2, 6, 181-129));
maze2Group.add(createSprite(387, (234+203)/2, 6, 234-203));
maze2Group.add(createSprite(387, (333+302)/2, 6, 333-302));
maze2Group.add(createSprite(387, (381+354)/2, 6, 381-354));
maze2Group.add(createSprite(387, (456+427)/2, 6, 456-437));
maze2Group.add(createSprite(412, (59+6)/2, 6, 59-6));
maze2Group.add(createSprite(412, (259+105)/2, 6, 259-106));
maze2Group.add(createSprite(412, (357+328)/2, 6, 357-328));
maze2Group.add(createSprite(436, (505+451)/2, 6, 505-451));
maze2Group.add(createSprite(436, (406+352)/2, 6, 406-352));
maze2Group.add(createSprite(436, (331+304)/2, 6, 331-304));
maze2Group.add(createSprite(436, (258+31)/2, 6, 258-31));
maze2Group.add(createSprite(461, (181+56)/2, 6, 181-56));
maze2Group.add(createSprite(461, (257+204)/2, 6, 257-204));
maze2Group.add(createSprite(461, (354+327)/2, 6, 354-324));
maze2Group.add(createSprite(461, (432+401)/2, 6, 432-401));
maze2Group.add(createSprite(486, (555+476)/2, 6, 555-476));
maze2Group.add(createSprite(486, (404+377)/2, 6, 404-377));
maze2Group.add(createSprite(486, (357+104)/2, 6, 357-104));
maze2Group.add(createSprite(486, (58+32)/2, 6, 58-32));
maze2Group.add(createSprite(460, (307+278)/2, 6, 307-278));
maze2Group.add(createSprite(510, (331+105)/2, 6, 331-105));
maze2Group.add(createSprite(510, (432+376)/2, 6, 432-376));
maze2Group.add(createSprite(510, (554+452)/2, 6, 554-452));
maze2Group.add(createSprite(535, (554+502)/2, 6, 554-502));
maze2Group.add(createSprite(535, (456+352)/2, 6, 456-352));
maze2Group.add(createSprite(535, (286+131)/2, 6, 286-131));
maze2Group.add(createSprite(560, (85+29)/2, 6, 85-29));
maze2Group.add(createSprite(560, (257+206)/2, 6, 257-206));
maze2Group.add(createSprite(560, (357+303)/2, 6, 357-303));
maze2Group.add(createSprite(560, (481+378)/2, 6, 481-378));
maze2Group.add(createSprite(584, (578+5)/2, 6, 578-5));
maze2Group.add(createSprite(536, (59+31)/2, 6, 59-31));

mazeGroup.setVisibleEach(false);
maze2Group.setVisibleEach(false);
// door.visible(false);
// gold.visible(false);
}

function draw() 
{
  background(51);
  drawSprites();

  form.display();

// timer
  if(frameCount%50 === 0 && timer > 0 && gameState===PLAY){
    timer = timer - 1
  }

  if(frameCount%50 === 0 && timer > 0 && gameState===2){
    timer = timer - 1
  }

  //key touch
 if(thomas.thomas.collide(gold)){
   keyPLAY = true;
   gold.destroy()
 }
 
// colliding with door
 if(thomas.thomas.collide(door) && keyPLAY === true){
   door.destroy()
   gameState = LEVELTWO;
  thomas.thomas.x = 25
  thomas.thomas.y = 544
 }


//key touch
  if(thomas.thomas.collide(gold2) && gameState === 2){
  secondKeyPLAY = true;
  gold2.destroy()
  }

 // timer colors
  if(timer < 10){
    fill('red')
  }
  else{
    fill('gray')
  }

// START
  if(gameState === START){
    mazeGroup.setVisibleEach(false);
    maze2Group.setVisibleEach(false);
  }

// PLAY
  if(gameState === PLAY){
    mazeGroup.setVisibleEach(true);
    maze2Group.setVisibleEach(false);
    thomas.thomas.bounceOff(mazeGroup);
    gold.visible=true;
  }

// LEVELTWO
 if(gameState === LEVELTWO){
  mazeGroup.setVisibleEach(false);
  mazeGroup.destroyEach()
  maze2Group.setVisibleEach(true);
  thomas.thomas.bounceOff(maze2Group);
  door2.visible = true;
  gold2.visible = true;
 }

  // transition
  if(thomas.thomas.y < 15 && gameState === PLAY){
    gameState = LEVELTWO
    mazeGroup.setVisibleEach(false);

  }

  // thomas display
  if(gameState === PLAY || gameState === LEVELTWO){
    thomas.display()
  }

  // gameOver
  if(timer === 0 ){
    thomas.thomas.destroy()
    image(gameOver,100,100,400,400)
    gameState = 0
  }

  // success
  if(thomas.thomas.collide(door2) && secondKeyPLAY === true){
    door2.destroy()
    image(success, 90,90,400,400);
    gamesState = END;
  }

  if(gameState === 0){
    image(success, 90,90,400,400);
    timer.destroy()
  }


  textSize(20)
  text(timer, 565, 50)
}

// function mouseClicked(){
//   console.log(mouseX+","+mouseY);
// }
