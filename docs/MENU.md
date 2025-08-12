# Menu

Menus display a list of choices on temporary surfaces.

## Element

```html
<div>
  <button>...</button>
  <menu>
    <li>...</li>
  </menu>
</div>
```

## Most used helpers

**Forms**

border

**Positions**

left, right, top, bottom

**Sizes**

wrap, no-wrap, min, max

**Spaces**

space, no-space, small-space, medium-space, large-space

**Triggers**

active

## Examples

### Default

```html
<div>
  <button data-ui="#menu1">
    <span>Default</span>
    <i>arrow_drop_down</i>
  </button>
  <menu id="menu1">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### Border

```html
<div>
  <button data-ui="#menu11">
    <span>Border</span>
    <i>arrow_drop_down</i>
  </button>
  <menu id="menu11" class="border">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### No-wrap

```html
<div>
  <button data-ui="#menu2">
    <span>No-wrap</span>
    <i>arrow_drop_down</i>
  </button>
  <menu id="menu2" class="no-wrap">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
  </menu>
</div>
```

### Left

```html
<div>
  <button class="circle" data-ui="#menu3">
    <i>arrow_back</i>
  </button>
  <menu id="menu3" class="left no-wrap">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### Right

```html
<div>
  <button class="circle" data-ui="#menu4">
    <i>arrow_forward</i>
  </button>
  <menu id="menu4" class="right no-wrap">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### Top

```html
<div>
  <button data-ui="#menu12">
    <span>Top</span>
    <i>arrow_drop_up</i>
  </button>
  <menu id="menu12" class="top">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### Links

```html
<div>
  <button data-ui="#menu10">
    <span>Links</span>
    <i>arrow_drop_down</i>
  </button>
  <menu id="menu10">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </menu>
</div>
```

### Images and icons

```html
<div>
  <button data-ui="#menu5">
    <span>Images and icons</span>
  </button>
  <menu id="menu5" class="no-wrap">
    <li>Title</li>
    <li>
      <div>Title</div>
      <label>Some text here</label>
    </li>
    <li>
      <i>home</i>
      <span>Title</span>
    </li>
    <li>
      <i>home</i>
      <div class="max">
        <div>Title</div>
        <label>Some text here</label>
      </div>
    </li>
    <li>
      <img class="circle tiny" src="/beer-and-woman.svg" alt="">
      <span>Title</span>
    </li>
    <li>
      <img class="circle tiny" src="/beer-and-woman.svg" alt="">
      <div class="max">
        <div>Title</div>
        <label>Some text here</label>
      </div>
    </li>
  </menu>
</div>
```

### Video

```html
<div>
  <button data-ui="#menu6">
    <span>Video</span>
  </button>
  <menu id="menu6" class="no-wrap">
    <li class="no-padding">
      <video class="small-width" autoplay loop muted playsinline>
        <source src="/dance.mp4" type="video/mp4">
      </video>
    </li>
  </menu>
</div>
```

### Docked

```html
<div>
  <button data-ui="#menu8">
    <span>Docked</span>
  </button>
  <menu id="menu8" class="min">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### Fullscreen

```html
<div>
  <button data-ui="#menu7">
    <span>Fullscreen</span>
  </button>
  <menu id="menu7" class="max">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </menu>
</div>
```

### Multi level

```html
<div>
  <button data-ui="#menu9">
    <span>Multi level</span>
    <i>arrow_drop_down</i>
  </button>
  <menu id="menu9">
    <li>Item</li>
    <li>Item</li>
    <li>More items
      <menu>
        <li>Item</li>
        <li>Item</li>
        <li>More items
          <menu>
            <li>Item</li>
            <li>Item</li>
            <li>item</li>
          </menu>
        </li>
      </menu>
    </li>
  </menu>
</div>
```

## Triggers

### To open/close a menu

#### Method 1

Add/remove `active` class on menu.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu class="active">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

#### Method 2

Add `data-ui="menu-selector"` attribute on elements.

```html
<div>
  <button data-ui="#menu">
    <span>Button</span>
  </button>
  <menu id="menu">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

#### Method 3

Call `ui("menu-selector")`.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu id="menu">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

```js
ui('#menu');
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
