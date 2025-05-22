/**
 * Created by: Steven Pothoven
 *
 * Description: This component renders a US map with clickable states.
 * When a state is clicked, it emits an event with the state name.
 * The map is created using SVG paths for each state.
 * The component allows customization of colors for the states and labels.
 *
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import usStates from '@assets/us-states.json';

@Component({
    selector: 'app-us-map',
    imports: [],
    templateUrl: './us-map.component.html',
    styleUrl: './us-map.component.scss'
})
export class UsMapComponent {
    @Input() labelColor = '#FFFFFF';
    @Input() stateColor = 'url(#grad1)';
    @Input() borderColor = '#8E8E8E';
    @Input() lineColor = '#C0C0C0';
    @Input() hoverColor = '#43C3FD';
    @Input() gradientStops = ['#1F886E', '#177DC1'];
    @Input() states = usStates;

    @Output() mapClick = new EventEmitter();

    onMapClick(state: string) {
        this.mapClick.emit({ 'state': state });
    }

}
