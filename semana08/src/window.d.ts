export {};

declare global {
    interface Window {
        enterKey: (event: KeyboardEvent) => void;
        addTask: () => void;
    }
}