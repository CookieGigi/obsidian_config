// @ts-check

import { test } from "../scripts_module_common/config"

export default class MacroGuide {
  /**
   * @param {Object} dv DataView object of Obisidian extension.
   */
  helloWorld(dv) {
    // @ts-ignore
    const { obsidian, app } = self.customJS || {};
    if (obsidian == null || app == null) throw new Error("customJS is null.");

    dv.span(
      "You read the page: " + test +
      dv.fileLink(dv.current().file.path, false, "Guide for Obsidian")
    ) + ".";
  }
}
