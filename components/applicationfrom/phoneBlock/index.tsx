import { registerBlockType } from "@quillforms/blocks";
import DisplayComponent from "./display";
registerBlockType("phone", {
  supports: {
    editable: true, // If the block has an answer or not.
  },
  // The custom attributes for the block.
  attributes: {
    min: {
      type: "number",
      default: 1,
    },
    max: {
      type: "number",
      default: 10,
    },
  },
  display: DisplayComponent,
});
