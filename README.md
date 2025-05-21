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
| `fillLabelColor`      | Type: `string` Optional. Will change color of state name text. For Example: `fillLabelColor="#C0C0C0"`       |
| `fillStateColor` | Type: `string` Optional. Will change background color of state area. For Example: `fillStateColor="#C0C0C0"` |
| `strokeColor`    | Type: `string` Optional. Will change border color of state area. For Example: `strokeColor="#C0C0C0"`     |
| `lineColor`    | Type: `string` Optional. Will change line color for state names outside the map pointing to the state. For Example: `lineColor="#C0C0C0"`     |

### Output
|||
|-|-|
| `mapClick` | Will be emitted when state area has been clicked. It returns `state` abbreviation. (mapClick) event. |

Moreover, you can apply your own CSS to beautify this component.

