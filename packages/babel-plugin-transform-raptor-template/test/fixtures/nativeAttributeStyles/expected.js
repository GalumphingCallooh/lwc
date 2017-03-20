const memoized = Symbol('memoize');
export default function ($api, $cmp, $slotset) {
    const m = $cmp[memoized] || ($cmp[memoized] = {});
    return [$api.h(
        "section",
        {
            style: {
                fontSize: "12px",
                color: "red",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "10px",
                marginBottom: "10px"
            }
        },
        []
    )];
}
export const templateUsedIds = [];
