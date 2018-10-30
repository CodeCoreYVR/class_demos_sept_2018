const eventLogger = event => {
  const { currentTarget, eventPhase } = event;
  const { tagName, id, className } = currentTarget;

  // Phase:
  // 0. NONE
  // 1. CAPTURE
  // 2. AT TARGET
  // 3. BUBBLE

  const eventPhaseMap = {
    0: "NONE",
    1: "CAPTURE",
    2: "AT TARGET",
    3: "BUBBLE"
  };

  // The method <node>.matches(<css-query>) returns `true` if <node>
  // would be selected by the <css-query>.
  if (currentTarget.matches(".teams") && eventPhase === 3) {
    // Use `event.stopPropagation()` to prevent the event from
    // trigger remaining event listeners. This can to prevent
    // listeners on the ancestor of the target from triggering.
    event.stopPropagation();
  }

  console.log(
    `Phase: ${eventPhaseMap[eventPhase]} Node: ${tagName}#${id}.${className}`
  );
};

document.querySelectorAll("*").forEach(node => {
  // By default, <node>.addEventListener(...) will trigger
  // from the `event.target` to going to its eldest ancestor.
  // This is called the "BUBBLE" phase.
  node.addEventListener("click", eventLogger);
  // Setting the optional third argument of
  // <node>.addEventListener(...) to `true` will reverse
  // order in which triggers. Instead, it will trigger during
  // what's called the "CAPTURE" phase.
  node.addEventListener("click", eventLogger, true);
});
