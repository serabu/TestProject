// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = <T extends Function>(cb: T, wait = 20) => {
    let h: ReturnType<typeof setTimeout>;
    const callable = (...args: any) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };
    return <T>(<any>callable);
}

