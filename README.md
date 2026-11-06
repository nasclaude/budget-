# Budget

A simple app for tracking income and spending in euros, made for iPhone.

- Salary and other income, spending by category
- Monthly overview: what's left, savings rate, spending per day
- Spending by category and a 6-month income vs. spending chart
- Monthly limits per category, with warnings at 80% and when you go over
- Recurring entries (salary, rent, subscriptions) added automatically each month
- Optional 4-digit PIN lock
- Backup / restore file and CSV export
- Works offline, light and dark mode

## Privacy

There is no server and no account. Everything you enter is stored only in the
browser on your own device and is never sent anywhere. Anyone else who opens the
site gets their own empty copy.

Because the data lives only on your phone, use **Settings → Back up** now and
then. If the website data is cleared or you change phones, restore from that file.

## Install on iPhone

1. Open the site in **Safari**.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**.
3. Always open the app from that icon. iPhone keeps the Home Screen app's data
   separate from Safari's, so entries made in a Safari tab won't appear there.

## Files

- `index.html`: the whole app (HTML, CSS and JavaScript, no dependencies)
- `sw.js`: offline support
- `manifest.json`, `icons/`: Home Screen name and icon
