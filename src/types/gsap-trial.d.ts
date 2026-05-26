declare module "gsap-trial/SplitText"; {
  class SplitText {
    constructor(target: string | Element, vars?: unknown);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  export { SplitText };
  export default SplitText;
}
