# TakeABreak

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

# Assumptions
1. The words are being typed in and not copy-pasted. If content is copy-pasted, only the words that were typed in before and/or after would be taken into consideration for the purposes of the 100 word limit enforced break.

2. The break timer is enforced even if words were typed and erased. It accounts for all words typed in from the start or since the last break.

## Known Bugs
1. Extra spaces and enter keys are counted as additional words in the calculation. They're accounted for in the display but not in the internal counting method.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


