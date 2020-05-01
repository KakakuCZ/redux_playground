export interface FlashMessage {
    id: number;
    type: FlashMessageType;
    text: string;
}

export type FlashMessageType = "error" | "warning" | "info"
