// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

/// <reference path="components/project-list.ts"/>
/// <reference path="components/project-input.ts"/>

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
