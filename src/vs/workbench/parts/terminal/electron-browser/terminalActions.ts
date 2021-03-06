/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TPromise} from 'vs/base/common/winjs.base';
import nls = require('vs/nls');
import {Action} from 'vs/base/common/actions';
import {ITerminalService} from 'vs/workbench/parts/terminal/electron-browser/terminal';

export class ToggleTerminalAction extends Action {

	public static ID = 'workbench.action.terminal.toggle';
	public static LABEL = nls.localize('workbench.action.terminal.toggle', "Toggle Integrated Terminal");

	constructor(
		id: string, label: string,
		@ITerminalService private terminalService: ITerminalService
	) {
		super(id, label);
	}

	public run(event?: any): TPromise<any> {
		return this.terminalService.toggle();
	}
}

export class CloseTerminalAction extends Action {

	public static ID = 'workbench.action.terminal.close';
	public static LABEL = nls.localize('workbench.action.terminal.close', "Terminal: Close the current terminal");

	constructor(
		id: string, label: string,
		@ITerminalService private terminalService: ITerminalService
	) {
		super(id, label);
	}

	public run(event?: any): TPromise<any> {
		return this.terminalService.close();
	}
}

export class CreateNewTerminalAction extends Action {

	public static ID = 'workbench.action.terminal.new';
	public static LABEL = nls.localize('workbench.action.terminal.new', "Terminal: Create New Integrated Terminal");

	constructor(
		id: string, label: string,
		@ITerminalService private terminalService: ITerminalService
	) {
		super(id, label);
	}

	public run(event?: any): TPromise<any> {
		return this.terminalService.createNew();
	}
}

export class FocusTerminalAction extends Action {

	public static ID = 'workbench.action.terminal.focus';
	public static LABEL = nls.localize('workbench.action.terminal.focus', "Terminal: Focus Terminal");

	constructor(
		id: string, label: string,
		@ITerminalService private terminalService: ITerminalService
	) {
		super(id, label);
	}

	public run(event?: any): TPromise<any> {
		return this.terminalService.focus();
	}
}

export class FocusNextTerminalAction extends Action {

	public static ID = 'workbench.action.terminal.focusNext';
	public static LABEL = nls.localize('workbench.action.terminal.focusNext', "Terminal: Focus Next Terminal");

	constructor(
		id: string, label: string,
		@ITerminalService private terminalService: ITerminalService
	) {
		super(id, label);
	}

	public run(event?: any): TPromise<any> {
		return this.terminalService.focusNext();
	}
}

export class FocusPreviousTerminalAction extends Action {

	public static ID = 'workbench.action.terminal.focusPrevious';
	public static LABEL = nls.localize('workbench.action.terminal.focusPrevious', "Terminal: Focus Previous Terminal");

	constructor(
		id: string, label: string,
		@ITerminalService private terminalService: ITerminalService
	) {
		super(id, label);
	}

	public run(event?: any): TPromise<any> {
		return this.terminalService.focusPrevious();
	}
}