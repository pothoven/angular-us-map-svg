# Angular SVG US Map

This package is used to generate US SVG Map and also giving ability to set callback function and some parameters to change fill & stroke color.

![usmap](https://user-images.githubusercontent.com/17896904/28911043-c754c656-784c-11e7-9f2a-47f7304b6811.png)

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
| `fillLabelColor`      | Type: `string` Optional. Will change color of state name text. For Example: `fillColor="#C0C0C0"`       |
| `fillStateColor` | Type: `string` Optional. Will change background color of state area. For Example: `fillStateColor="#C0C0C0"` |
| `strokeColor`    | Type: `string` Optional. Will change border color of state area. For Example: `strokeColor="#C0C0C0"`     |
| `lineColor`    | Type: `string` Optional. Will change line color for state names outside the map pointing to the state. For Example: `strokeColor="#C0C0C0"`     |

### Output
|||
|-|-|
| `onMapClick` | Will be emitted when state area has been clicked. It returns `state` abbreviation. (onMapClick) event. |

Moreover, you can apply your own CSS to beautify this component.

