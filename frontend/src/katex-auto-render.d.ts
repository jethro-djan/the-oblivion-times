declare module 'katex/dist/contrib/auto-render' {
    export default function renderMathInElement(
        elem: HTMLElement,
        options?: {
            delimiters?: Array<{
                left: string;
                right: string;
                display: boolean;
            }>;
            throwOnError?: boolean;
            errorColor?: string;
            macros?: any;
            ignoredTags?: string[];
            ignoredClasses?: string[];
            strict?: boolean | string | Function;
            trust?: boolean | Function;
            fleqn?: boolean;
            leqno?: boolean;
            output?: string;
        }
    ): void;
}
