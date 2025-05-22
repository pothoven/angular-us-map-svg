# Angular SVG US Map

This package is used to generate a clickable US Map SVG.  An event is emitted providing the ability to set callback function and input parameters allow customizaion of fill & stroke colors.

![usmap](/src/assets/screenshot.png)

This is an updated version of [angular4-us-map-svg](https://github.com/bharat20185/angular4-us-map-svg).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Accessing Component

<pre>&lt;app-us-map&gt;&lt;/app-us-map&gt;</pre>

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
| `mapClick` | Will be emitted when state area has been clicked. It returns `state` abbreviation. (mapClick) event. |

Moreover, you can apply your own CSS to beautify this component.

