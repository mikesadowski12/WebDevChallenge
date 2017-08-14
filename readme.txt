Libraries:
  1. Added jQuery to allow scroll and fade in animations

Assumptions:
(Assumed that the picture 'community-memberpage.png' was exactly how the page
was to look, meaning I overlooked the differences that were placed in the provided HTML file
and reverted them to look exactly like the picture shows)

  1. Default page loads only 1 row of 5 members
  2. 'Home' in nav bar is linked to the banner "Welcome to the community"
  3. When new members are added, it was ugly for them to just appear. Added
      a 0.5s fade in effect on them when a new row is appended
  4. Fixed all best-practices issues in the HTML
  5. 'Members' in nav bar is linked to the top of "Members" section
  6. Search bar expands like most modern web page search bars
  7. Page is to scroll to bottom when new members are loaded to be able to view them
