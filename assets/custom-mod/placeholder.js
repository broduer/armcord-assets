/*!
 * ArmCord custom-mod placeholder bundle.
 * Hosted at: https://raw.githubusercontent.com/ArmCord/ArmCord/stable/assets/custom-mod/placeholder.js
 *
 * This file intentionally does nothing except log that it loaded. It is the
 * default `customJsBundle` so a fresh "Custom" mod install is a safe no-op.
 *
 * To write your own custom mod, copy this file, add your code, and point
 * ArmCord's `customJsBundle` setting at your URL (or host it yourself).
 * The script runs in Discord's renderer context with full page access.
 * `window.armcord` exposes the ArmCord API (window, settings, themes, ...).
 */
(() => {
    console.log("[ArmCord] Custom placeholder bundle loaded (no-op).");
})();
