import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
