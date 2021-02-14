import { Component, Input} from '@angular/core';

@Component({
selector: 'app-counting',
templateUrl: './counting.component.html',
styleUrls: ['./counting.component.css']

})

export class countingComponent {
    @Input()
    num_input:number;
    result = 0;

    constructor() {}
    countAdd() {
        this.result = this.result + parseInt(this.num_input.toString());
    }
}
