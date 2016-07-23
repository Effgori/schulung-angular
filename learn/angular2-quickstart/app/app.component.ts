import {Component} from '@angular/core';

import {HalloWeltPipe} from './hallo-welt.pipe';

@Component({
    selector: 'my-app',
    template: `
                <h1>{{name | halloWelt}}</h1>
                <h1>Meine erste und noch einzige Angular App</h1>
              `,
    pipes: [HalloWeltPipe]
              
})
export class AppComponent {
    name = 'Test';
}