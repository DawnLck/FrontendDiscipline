var event = new Event("build");

// Listen for the event.
elem.addEventListener(
  "build",
  function (e) {
    console.log("build", e);
  },
  false
);

// Dispatch the event.
elem.dispatchEvent(event);
