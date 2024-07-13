import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";

export const booksListTrigger = trigger('booksList', [
  transition('* <=> *', [
    query(":enter", [
      style({
        opacity: 0,
        transform: "translateY(-6em)"
      }),
      stagger('100ms', [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: "translateY(0)"
          })
        ])
        )
      ])
    ], {optional: true}),
    query(":leave", [
      stagger('100ms', [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 0,
            transform: "translateY(-6em)"
          })
        ]))
      ])
    ], {optional: true})
  ])
])
