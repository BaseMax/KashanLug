declare namespace Mithril {
  interface ClassComponent<Attrs = Record<never, never>> {
    view(vnode?: CVnode<Attrs>): unknown;
    oninit?(vnode?: CVnode<Attrs>): void;
    oncreate?(vnode?: CVnode<Attrs>): void;
    onupdate?(vnode?: CVnode<Attrs>): void;
    onremove?(vnode?: CVnode<Attrs>): void;
    onbeforeupdate?(vnode?: CVnode<Attrs>): boolean | void;
    onbeforeremove?(vnode?: CVnode<Attrs>): Promise<void> | void;
  }
  interface CVnode<Attrs = Record<never, never>> {
    tag: unknown;
    key?: string | number | undefined;
    attrs: Attrs;
    children: unknown;
    state: unknown;
    dom: Element | null;
    events?: Record<string, unknown> | undefined;
  }
}
