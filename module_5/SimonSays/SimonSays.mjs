"use strict";
//--------------- Objects and Variables ----------------------------------//

import lib2d from "../../common/libs/lib2d_v2.mjs"
import libSprite from "../../common/libs/libSprite_v2.mjs"
import {TColorButton} from "./colorButton.mjs";
import libSound from "../../common/libs/libSound.mjs"; 

// prettier-ignore
export const SpriteInfoList = {
  Background:     { x: 0, y:    0, width: 720, height: 720, count:  1 },
  ButtonYellow:   { x: 0, y:  720, width: 314, height: 314, count:  2, dst: { x:  29, y: 377, r1: 100, r2: 333 } },
  ButtonBlue:     { x: 0, y: 1034, width: 314, height: 314, count:  2, dst: { x: 377, y: 377, r1: 100, r2: 333 } },
  ButtonRed:      { x: 0, y: 1348, width: 314, height: 314, count:  2, dst: { x: 377, y:  29, r1: 100, r2: 333 } },
  ButtonGreen:    { x: 0, y: 1662, width: 314, height: 314, count:  2, dst: { x:  29, y:  29, r1: 100, r2: 333 } },
  ButtonStartEnd: { x: 0, y: 1976, width: 360, height: 360, count:  2, dst: { x: 180, y: 180, r1:   1, r2: 180 } },
  number:         { x: 0, y: 2344, width:  23, height:  34, count: 10, dst: { x: 365, y: 385}},
};

const cvs = document.getElementById("cvs"); 
const spcvs = new libSprite.TSpriteCanvas(cvs); 

export const EGameStatusType = {Idle: 0, Computer: 1, Player: 2, GameOver: 3}

export const gameProps = {
  Background: new libSprite.TSprite(spcvs, SpriteInfoList.Background, new lib2d.TPoint(0,0)), 
  GameCenter: new lib2d.TPosition(SpriteInfoList.Background.width/2, SpriteInfoList.Background.height / 2),
  Status: EGameStatusType.Computer, 
  ColorButtons: [
    new TColorButton(spcvs, SpriteInfoList.ButtonYellow), 
    new TColorButton(spcvs, SpriteInfoList.ButtonBlue), 
    new TColorButton(spcvs, SpriteInfoList.ButtonRed), 
    new TColorButton(spcvs, SpriteInfoList.ButtonGreen)], 
  sequence: [], 
  seqIndex: 0, //Hvilke knapp i sekvensen vi er på 
  activeButton: null, 
  buttonStartEnd: new libSprite.TSpriteButton(
    spcvs, 
    SpriteInfoList.ButtonStartEnd, 
    SpriteInfoList.ButtonStartEnd.dst, 
    lib2d.TCircle
  ), 
  GameSpeed: 800, 
  spnRound: new libSprite.TSpriteNumber(spcvs,SpriteInfoList.number, SpriteInfoList.number.dst
  ),

};

//--------------- Functions ----------------------------------------------//
function loadGame(){
  cvs.width = gameProps.Background.width; 
  cvs.height = gameProps.Background.height; 
  gameProps.buttonStartEnd.onClick = startGame; 
  setDisabledButtons(true); 
  drawGame(); 
}

function startGame(){
  gameProps.buttonStartEnd.visible = false; 
  libSound.activateAudioContext(); 
  gameProps.ColorButtons[0].sound = new libSound.TSoundWave(4, "C", "sine"); 
  gameProps.ColorButtons[1].sound = new libSound.TSoundWave(4, "D", "sine"); 
  gameProps.ColorButtons[2].sound = new libSound.TSoundWave(4, "E", "sine");
  gameProps.ColorButtons[3].sound = new libSound.TSoundWave(4, "F", "sine");  
  gameProps.sequence = []; 
  gameProps.GameSpeed = 800; 
  gameProps.spnRound.value = 0; // vi starter alltid på runde 0 
  spawnSequence();
}

function drawGame(){
  spcvs.clearCanvas(); 
  gameProps.Background.draw(); 
  for(let i = 0; i < gameProps.ColorButtons.length; i++){
    gameProps.ColorButtons[i].draw(); 
  }
  gameProps.spnRound.draw(); 

  gameProps.buttonStartEnd.draw(); 
  requestAnimationFrame(drawGame); 
}

function setDisabledButtons(aDisabled){
  for(let i = 0; i < gameProps.ColorButtons.length; i ++){
    gameProps.ColorButtons[i].disable = aDisabled; 
  }
}

function setMouseDown(){
  gameProps.activeButton.onMouseDown(); 
  setTimeout(setMouseUp, gameProps.GameSpeed); 
}

function setMouseUp(){
  let done = false; 
  if(gameProps.seqIndex < gameProps.sequence.length - 1){
    //Her er det flere knapper igjen i sekvensen
    gameProps.activeButton.onMouseUp(); 
    gameProps.seqIndex++; 
  }else{
    gameProps.activeButton.onMouseUp(); 
    gameProps.seqIndex = 0; 
    done = true; 
  }
  gameProps.activeButton = gameProps.sequence[gameProps.seqIndex]; 
  if(!done){
    setTimeout(setMouseDown, gameProps.GameSpeed); 
 }else{
  gameProps.Status = EGameStatusType.Player; 
  setDisabledButtons(false); 
 }
}

export function spawnSequence(){
  const index = Math.floor(Math.random()* gameProps.ColorButtons.length); 
  const button = gameProps.ColorButtons[index]; 
  gameProps.sequence.push(button); 
  gameProps.seqIndex = 0; 
  gameProps.activeButton = gameProps.sequence[0]; 
  gameProps.Status = EGameStatusType.Computer; 
  setDisabledButtons(true); 

  //Her skal dere erstatte all 1000 med en variabel som heter gameProps.GameSpeed
  //Start med 800 og reduser med 50 for hver runde,det laveste skal være 100, husk at dette er millisekunder 
  setTimeout(setMouseDown, gameProps.GameSpeed); 

  if(gameProps.GameSpeed > 100){
    gameProps.GameSpeed -= 50; 
  }else{
    gameProps.GameSpeed = 100; 
  }
}
//--------------- Event Handlers -----------------------------------------//

//--------------- Main Code ----------------------------------------------//
spcvs.loadSpriteSheet("./media/spriteSheet.png", loadGame); 