import { PropFunction } from "@builder.io/qwik";

export interface Modal {
    open: boolean;
    title?: string;
    onClose$: PropFunction<() => void>;
    onConfirm$?: PropFunction<() => void>;
    cancelLabel?: string;
    confirmLabel?: string;
}
