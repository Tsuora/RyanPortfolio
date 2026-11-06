import React from "react";
import {createRoot} from "react-dom/client";
import {act} from "react-dom/test-utils";
import Header from "./Header";
import {StyleProvider} from "../../contexts/StyleContext";

global.IS_REACT_ACT_ENVIRONMENT = true;

jest.mock("react-headroom", () => ({children, pin, style}) => (
  <div data-headroom-pinned={String(pin)} style={style}>
    {children}
  </div>
));

let container;
let root;
let originalWidth;
let originalHeight;

function renderHeader(width = 390) {
  window.innerWidth = width;
  act(() =>
    root.render(
      <StyleProvider value={{isDark: true, changeTheme: jest.fn()}}>
        <Header />
      </StyleProvider>
    )
  );
}

function click(element) {
  act(() => element.dispatchEvent(new MouseEvent("click", {bubbles: true})));
}

beforeEach(() => {
  originalWidth = window.innerWidth;
  originalHeight = window.innerHeight;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  window.innerWidth = originalWidth;
  window.innerHeight = originalHeight;
});

it("keeps the mobile header pinned and the menu expanded during scrolling and viewport height changes", () => {
  renderHeader();
  const toggle = container.querySelector(".menu-toggle");
  expect(container.firstChild.dataset.headroomPinned).toBe("true");
  click(toggle);
  expect(toggle.getAttribute("aria-expanded")).toBe("true");

  act(() => {
    window.dispatchEvent(new Event("scroll"));
    window.innerHeight = 320;
    window.dispatchEvent(new Event("resize"));
  });
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  expect(container.firstChild.dataset.headroomPinned).toBe("true");
  click(container.querySelector('input[aria-label="Dark mode"]'));
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
});

it("closes with Escape while the toggle has focus and restores focus to it", () => {
  renderHeader();
  const toggle = container.querySelector(".menu-toggle");
  click(toggle);
  toggle.focus();
  expect(toggle.textContent).toContain("Close navigation");
  act(() =>
    document.dispatchEvent(
      new KeyboardEvent("keydown", {key: "Escape", bubbles: true})
    )
  );
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(toggle);
  expect(toggle.textContent).toContain("Open navigation");
});

it("closes after navigation, using the logo, or toggling the menu again", () => {
  renderHeader();
  const toggle = container.querySelector(".menu-toggle");
  click(toggle);
  click(container.querySelector('nav a[href="#highlights"]'));
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  click(toggle);
  click(container.querySelector("a.logo"));
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  click(toggle);
  click(toggle);
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
});

it("preserves desktop Headroom behavior and clears the expanded state when switching to desktop", () => {
  renderHeader(1440);
  expect(container.firstChild.dataset.headroomPinned).toBe("false");
  act(() => {
    window.innerWidth = 390;
    window.dispatchEvent(new Event("resize"));
  });
  const toggle = container.querySelector(".menu-toggle");
  click(toggle);
  expect(container.firstChild.dataset.headroomPinned).toBe("true");
  act(() => {
    window.innerWidth = 1440;
    window.dispatchEvent(new Event("resize"));
  });
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(container.firstChild.dataset.headroomPinned).toBe("false");
  expect(container.firstChild.style.zIndex).toBe("1");
});
