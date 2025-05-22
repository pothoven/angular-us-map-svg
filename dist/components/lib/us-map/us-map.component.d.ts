/**
 * Created by: Steven Pothoven
 *
 * Description: This component renders a US map with clickable states.
 * When a state is clicked, it emits an event with the state name.
 * The map is created using SVG paths for each state.
 * The component allows customization of colors for the states and labels.
 *
 */
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UsMapComponent {
    labelColor: string;
    stateColor: string;
    borderColor: string;
    lineColor: string;
    hoverColor: string;
    gradientStops: string[];
    states: ({
        id: string;
        x: number;
        y: number;
        d: string;
        boxX?: undefined;
        boxY?: undefined;
        boxW?: undefined;
        boxH?: undefined;
        lineX1?: undefined;
        lineY1?: undefined;
        lineX2?: undefined;
        lineY2?: undefined;
    } | {
        id: string;
        x: number;
        y: number;
        boxX: number;
        boxY: number;
        boxW: number;
        boxH: number;
        lineX1: number;
        lineY1: number;
        lineX2: number;
        lineY2: number;
        d: string;
    } | {
        id: string;
        x: number;
        y: number;
        boxX: number;
        boxY: number;
        boxW: number;
        boxH: number;
        d: string;
        lineX1?: undefined;
        lineY1?: undefined;
        lineX2?: undefined;
        lineY2?: undefined;
    } | {
        id: string;
        d: string;
        x?: undefined;
        y?: undefined;
        boxX?: undefined;
        boxY?: undefined;
        boxW?: undefined;
        boxH?: undefined;
        lineX1?: undefined;
        lineY1?: undefined;
        lineX2?: undefined;
        lineY2?: undefined;
    })[];
    mapClick: EventEmitter<any>;
    onMapClick(state: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UsMapComponent, "us-map", never, { "labelColor": { "alias": "labelColor"; "required": false; }; "stateColor": { "alias": "stateColor"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "lineColor": { "alias": "lineColor"; "required": false; }; "hoverColor": { "alias": "hoverColor"; "required": false; }; "gradientStops": { "alias": "gradientStops"; "required": false; }; "states": { "alias": "states"; "required": false; }; }, { "mapClick": "mapClick"; }, never, never, true, never>;
}
