# Angular US Map SVG

This package provides the `NgUsMapSvg` component that can be used to generate a clickable US Map SVG.  An event is emitted providing the ability to set callback function and input parameters allow customizaion of fill & stroke colors. 

The included sample Angular application demonstrates the usage of the NgUsMapSvg component.  It imports the component and uses it in the template.

The component is designed to be reusable and customizable. It allows you to display a clickable US map using SVG paths for each state. The map is interactive, and when a state is clicked, it emits an event with the state name. The component can be easily integrated into any Angular application.

When a state is clicked, a dialog is opened, displaying the state name and some example data (Wikipedia page for the state). The dialog is created using Angular Material's MatDialog component, and it can be customized to show any content you want.

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/pothoven/angular-us-map-svg)

![usmap](/src/assets/screenshot.png)

This is an updated version of [angular4-us-map-svg](https://github.com/bharat20185/angular4-us-map-svg).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## How to install

Until I publish this to a npm library, it can be installed from the GitHub repository.

<pre>npm i https://github.com/pothoven/ng-us-map-svg</pre>

## Accessing Component

To use it as a stand-alone component, import the component:

<pre>import { UsMapComponent } from 'us-map-svg/dist/ng-us-map-svg';</pre>

Then include it in your component's imports:

<pre>
@Component({
  ...
  imports: [UsMapComponent]
}
</pre>

Then add it to the component's template:
<pre>&lt;us-map&gt;&lt;/us-map&gt;</pre>

## API Reference

### Inputs

|||
|-|-|
| `gradientStops`  | Type: `Array<string>` Optional. Sets the linear gradient fill colors for the states (internally named `grad1`).<br>For Example: `gradientStops=['#1F886E', '#177DC1']`     |
| `stateColor`     | Type: `string` Optional. Sets the background color of state area.<br>For Example: `stateColor="#C0C0C0"` or to use the linear gradient from gradientStops `stateColor="url(#grad1)"` |
| `labelColor`     | Type: `string` Optional. Sets the color of state name text.<br>For Example: `labelColor="#C0C0C0"`       |
| `borderColor`    | Type: `string` Optional. Sets the border color of state area.<br>For Example: `borderColor="#C0C0C0"`     |
| `lineColor`      | Type: `string` Optional. Sets the line color for state names outside the map pointing to the state.<br>For Example: `lineColor="#C0C0C0"`     |
| `hoverColor`     | Type: `string` Optional. Sets the color for state when mouse hovers over them.<br>For Example: `hoverColor="#43C3FD"`     |
| `states`     | Type: `any` Optional. JSON data for states to show.<br>The data must minimally contain an `id` attribute for the state identifier and a `d` attribute containing the SVG path of the state shape.<br>It should also contain an `x` and `y` location for the location of the state label (the `id`).<br>If the state shape is too small to contain the label, it may also define `boxX`, `boxY`, `boxW`, and `boxH` attributes (x,y, width, height) to create a separate box to place the label in. When adding an extra box, it would be expected to also add `lineX1`, `lineY1`, `lineX2`, and`lineY2` attributes for a line to connect the state to the box.       |


### Output

|||
|-|-|
| `mapClick`  | Will be emitted when a state area has been clicked. It returns the `state` abbreviation in the (mapClick) event. |

In order to perform actions based on map clicks, attach your event handler to the `mapClick` event.

<pre>&lt;us-map (mapClick)="myFunction($event)"&gt;&lt;/us-map&gt;</pre>

### Styling

Apply your own CSS to beautify this component.

|||
|-|-|
| `svg-state-group`  | Class associated with SVG `g` elements that encapsulate the state border, label, and any additional parts. |
| `svg-state-path`   | Class associated with SVG `path` elements that draw the state borders. |
| `svg-state-label`  | Class associated with the SVG `text` elements that show each state abbreviation.  |
| `svg-state-rect`   | Class associated with the SVG `rect` elements that encapsulate the state label for small states. |
| `svg-state-line`   | Class associated with SVG `line` elements that connect the state rectangles to the state. |


