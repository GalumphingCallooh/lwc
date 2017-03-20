const memoized = Symbol('memoize');
export default function ($api, $cmp, $slotset) {
    const _expr = $cmp.isTrue || $api.e();

    const m = $cmp[memoized] || ($cmp[memoized] = {});
    return [_expr && $api.f(
        ["Outer", $api.i($cmp.items, function (item) {
            return $api.h(
                "p",
                {},
                ["Inner"]
            );
        })]
    )];
}
export const templateUsedIds = ["isTrue", "items"];
