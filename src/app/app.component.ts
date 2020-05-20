import { Component } from '@angular/core';
import { WordCounterPipe } from './_pipes/word-counter.pipe';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WordCounterPipe]
})
export class AppComponent {
  /*-------- Variable Definitions
             oldCount => Word count at which last break was called 
             newCount => Word count since the last break
             totalWordsTyped => Count of all words type (including ones that were deleted)
             breakTime => Time configured for a break (30 seconds in this case)
  -----------*/

  title = 'take-a-break';
  message: string;
  currentWordCount = 0;
  oldCount = 0;
  newCount = 0;
  totalWordsTyped = 0;
  breakTime = 30000;
  disableInput = false;

  constructor(private wordCounter: WordCounterPipe, private spinner: NgxSpinnerService) {
    this.message = "";
  }


  /*-------- Method to count words - Called each time a space or enter key is detected -------------*/

  countingWords() {


    this.totalWordsTyped++;
    this.newCount = this.totalWordsTyped - this.oldCount;
    if (this.newCount % 100 === 0 && this.newCount != 0) {
      this.oldCount += this.newCount;
      this.newCount = 0;
      this.breakTimer();
    }

  }

  /*-------- Method to disable input and take a break for 30 seconds -------------*/

  breakTimer() {
    this.spinner.show();
    this.disableInput = true;
    setTimeout(() => {
      this.spinner.hide();
      this.disableInput = false;
    }, this.breakTime);
  }


}

