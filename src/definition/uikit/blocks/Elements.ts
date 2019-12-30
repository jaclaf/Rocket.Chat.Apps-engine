import { IConfirmationObject, ITextObject } from './Objects';

export enum BlockElementType {
    BUTTON = 'button',
    IMAGE = 'image',
    PLAIN_TEXT_INPUT = 'plain_text_input',
}

export interface IBlockElement {
    type: BlockElementType;
}

export type AvailableElements = IButtonElement | IImageElement;

export interface IInteractiveElement extends IBlockElement {
    actionId: string;
    value?: string;
}

export interface IInputElement extends IBlockElement {
    actionId: string;
    initialValue?: string;
}
export enum ButtonStyle {
    PRIMARY = 'primary',
    DANGER = 'danger',
}

export interface IButtonElement extends IInteractiveElement {
    type: BlockElementType.BUTTON;
    text: ITextObject;
    url?: string;
    style?: ButtonStyle;
    confirm?: IConfirmationObject;
}

export interface IImageElement extends IBlockElement {
    type: BlockElementType.IMAGE;
    imageUrl: string;
    altText: string;
}

export interface IPlainTextInputElement extends IInputElement {
    type: BlockElementType.PLAIN_TEXT_INPUT;
}