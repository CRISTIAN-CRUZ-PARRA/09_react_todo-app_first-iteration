# TodoApp

## General Requirements

- As a client, I want an application that manages a list of pending tasks
- As a client, I want an application created with Vite and developed with React/JavaScript

## Components

- As a client, I want a `<Header/>` component that renders a level #1 heading with the text '_TodoApp_'
- As a client, I want a `<Subheader>` component that renders a level #2 heading with the text '_Todo List Manager_'. This component should receive a `subtitle` prop to make it reusable in other parts of the application
- As a client, I want a `<ListHeader>` component that renders a level #3 heading with the text '_Todo List_'. This component should receive a `content` prop to make it reusable in other parts of the application
- As a client, I want an `<ItemCard>` component that renders an item of an unordered list with all the required information. This component should receive an `item` prop to make it reusable in other parts of the application
  - Item title should be rendered using a level #4 heading.
    - It must be strikethrough if the status item is '_done_'.
    - It must be bold if the status item is '_in progress_'.
    - It must be regular if the status item is '_pending_'.
  - Item description should be rendered using a paragraph.
  - Item status should be rendered using a span.
    - It must be in green if the status item is '_done_'.
    - It must be in blue if the status item is '_in progress_'.
    - It must be grey if the status item is '_pending_'.
- As a client, I want an `<ItemsList>` component that renders an unordered list with an `<ItemCard>` for each item in the list. This component should receive an `itemsList` prop to make it reusable in other parts of the application
- As a client, I want a `<ListContainer/>` component that renders only the elements it wraps [`<ListHeader>` and `<ItemsList>`]

## Styles

- As a client, I want the application to adhere to the design of the provided prototype
- As a client, I want each component to be responsible only for its styles to avoid collisions
- As a client, I want class names to adhere to BEM notation
- As a client, I want the design to be 'mobile first'.
  [!INFO]
  > The concept of 'mobile first' refers to a web design strategy that prioritizes the user experience on mobile devices. This means that the design and development start with the mobile version of the website and then expand to accommodate larger screens such as tablets and desktops. This technique ensures that the website is accessible and functional on small screens, which are increasingly used by users.

## Browser

- As a client, I want the browser tab to display '_TodoApp_'
- As a client, I want the console to show no errors

## DevOps and Deployment

- As a client, I want the application to be deployed and available through a URL in the preview environment before going to production
