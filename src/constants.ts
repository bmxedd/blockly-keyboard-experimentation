/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Constants for keyboard navigation.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */

/**
 * Keyboard navigation states.
 * The different parts of Blockly that the user navigates between.
 */
export enum STATE {
  WORKSPACE = 'workspace',
  FLYOUT = 'flyout',
  TOOLBOX = 'toolbox',
}

/**
 * Default keyboard navigation shortcut names.
 */
export enum SHORTCUT_NAMES {
  PREVIOUS = 'previous',
  NEXT = 'next',
  IN = 'in',
  OUT = 'out',
  INSERT = 'insert',
  MARK = 'mark',
  DISCONNECT = 'disconnect',
  TOOLBOX = 'toolbox',
  EXIT = 'exit',
  COPY = 'keyboard_nav_copy',
  CUT = 'keyboard_nav_cut',
  PASTE = 'keyboard_nav_paste',
  DELETE = 'keyboard_nav_delete',
  /* eslint-disable @typescript-eslint/naming-convention */
  MOVE_WS_CURSOR_UP = 'workspace_up',
  MOVE_WS_CURSOR_DOWN = 'workspace_down',
  MOVE_WS_CURSOR_LEFT = 'workspace_left',
  MOVE_WS_CURSOR_RIGHT = 'workspace_right',
  TOGGLE_KEYBOARD_NAV = 'toggle_keyboard_nav',
  /* eslint-enable @typescript-eslint/naming-convention */
}

/**
 * Types of possible messages passed into the loggingCallback in the Navigation
 * class.
 */
export enum LOGGING_MSG_TYPE {
  ERROR = 'error',
  WARN = 'warn',
  LOG = 'log',
}

/**
 * Platform specific modifier key used in shortcuts.
 */
export enum  MODIFIER_KEY {
  Window = 'Ctrl',
  ChromeOS = 'Ctrl',
  macOS ='⌘ Command',
  Linux = 'Meta'
}

/**
 * Categories used to organised the shortcut dialog.
 * Shortcut name should match those obtained from the Blockly shortcut register.
 */
export const SHORTCUT_CATEGORIES = {
  'General': [
    'escape', 'exit', 'delete', 'run_code', 'toggle_keyboard_nav', 'Announce',
    'List shortcuts', 'toolbox', 'disconnect'
  ],
  'Editing': [
    'cut', 'copy', 'paste', 'undo', 'redo', 'mark', 'insert'
  ],
  'Code navigation': [
    'previous', 'next', 'in', 'out', 'Context in', 'Context out',
    'Go to previous sibling', 'Go to next sibling',
    'Jump to root of current stack'
  ],
  'Workspace navigation' : [
    'workspace_down', 'workspace_left', 'workspace_up', 'workspace_right',
    'Clean up workspace'
  ]
}

