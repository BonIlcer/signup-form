function triggerEvent(el, type) {
  // IE9+ and other modern browsers
  if ("createEvent" in document) {
    let e = document.createEvent("HTMLEvents");
    e.initEvent(type, false, true);
    el.dispatchEvent(e);
  } else {
    // IE8
    let e = document.createEventObject();
    e.eventType = type;
    el.fireEvent("on" + e.eventType, e);
  }
}

export default triggerEvent;
