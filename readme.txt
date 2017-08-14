Libraries:
  1. Added jQuery to allow scroll and fade in animations

Assumptions:
  1. Default page loads only 1 row of 5 members
    (reason being only 1 row was displayed in the picture although adding more rows is visually better)
    (affected the member scroll animation if only 1 row is displayed)

  2. 'Home' in nav bar is linked to the banner "Welcome to the community"
    (reason being it is the top of the page)

  3. When new members are added a 0.5s fade in effect is applied when a new row is appended
    (reason being it was ugly for them to just appear)

  4. Fixed all best-practices issues in the HTML
    (reason being it reduces potential errors)

  5. 'Members' in nav bar is linked to the top of "Members" section
    (reason being it should scroll to the proper section)

  6. Search bar expands like most modern web page search bars
    (reason being it allows user to see what they are typing into it)

  7. Page is to scroll to bottom when new members are loaded
    (reason being it is easier to view them)
    (affects the page position)

  8. All items except 'Home' and 'Members' in nav bar do not scroll to a section
    (reason being the sections don't exist)
