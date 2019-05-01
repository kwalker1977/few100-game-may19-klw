export function ready(cb: any) {
    document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
            cb();
        }
    };
}