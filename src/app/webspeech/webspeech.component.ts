import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webspeech',
  templateUrl: './webspeech.component.html',
  styleUrls: ['./webspeech.component.scss']
})
export class WebspeechComponent implements OnInit, AfterViewChecked {
  isFlag = false;
  isShow= false;
  constructor(
    public service : VoiceRecognitionService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
  }
ngAfterViewChecked(){
  if( this.isFlag === true){
    this.isShow = true;
  }
}
  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
    this.isFlag = true;
  }
}
