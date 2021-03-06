import { delay, applyStyle } from "../utils";
import elements from "../elements";

/** 初始動畫 */
async function initializeAnimation() {
    const {
        sharedLayout,
        outerCircleCover,
        innerCircleCover,
        progressCircles,
        curves,
        bottomLeftLine,
        bottomRightLine,
        leftBracketText,
        rightBracketText,
        outerProgressCircle,
        innerProgressCircle,
        bottomUpperLine,
        bottomLowerLine,
        verticalRollingDots,
        systemAccessToImSystemTextBackground,
        systemAccessToImSystemText,
        systemVersionStraghtLinkModeText,
        systemMiddleLine,
        initializingText,
        finishedText,
    } = elements;

    await delay(0);

    applyStyle(outerCircleCover, innerCircleCover, {
        r: "2560",
        transitionProperty: "r",
        transitionDuration: "3s",
    });

    await delay(500);

    applyStyle(progressCircles, {
        transitionProperty: "all",
        transitionDuration: "1s",
        transform: "scale(1)",
    });

    applyStyle(curves, {
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "scale(1)",
    });

    applyStyle(bottomLeftLine, bottomRightLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "translateX(0px)",
    });

    await delay(500);

    applyStyle(leftBracketText, rightBracketText, {
        transitionProperty: "all",
        transitionDuration: "1s",
        opacity: "1",
        transform: "translateX(0px)",
    });

    applyStyle(outerProgressCircle, innerProgressCircle, {
        animation: "",
    });

    applyStyle(bottomUpperLine, bottomLowerLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        strokeDashoffset: "0px",
        transform: "translateX(0px)",
    });

    applyStyle(verticalRollingDots, {
        transitionProperty: "all",
        transitionDuration: "1s",
        opacity: "1",
    });

    applyStyle(systemAccessToImSystemTextBackground, systemAccessToImSystemText, systemVersionStraghtLinkModeText, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "translateY(0px)",
    });

    applyStyle(systemMiddleLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        strokeDashoffset: "0px",
        transform: "translateX(0px)",
    });

    await delay(500);

    applyStyle(initializingText, {
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        opacity: "1",
    });

    await delay(1000);

    applyStyle(initializingText, {
        opacity: "0",
    });

    applyStyle(finishedText, {
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        opacity: "1",
    });

    await delay(500);

    applyStyle(progressCircles, {
        zIndex: "",
    });

    applyStyle(sharedLayout, {
        visibility: "hidden",
    });
}

export default initializeAnimation;
